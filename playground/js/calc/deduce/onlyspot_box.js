import * as basic from '../../lib/basic.js';

// build array of 9 spots with "true"
let buildInitSpots = function () {
    return new Array(9).fill(true);
}

// find boxIdx, and index inside the box
// toSpotIndex(3, 5) => { box: 4, pos: 3 }
let toBoxPos = function (row, col) {
    let rowInBox = row % 3;
    let colInBox = col % 3;

    return {
        box: Math.floor(row / 3) * 3 + Math.floor(col / 3),
        pos: rowInBox * 3 + colInBox
    }
}

// toRowCol(4, 3) => { row: 3, col: 5 }
let toRowCol = function (boxIdx, pos) {
    let rowInBox = Math.floor(pos / 3);
    let colInBox = pos % 3;

    let { startRow, startCol } = basic.boxStarts(boxIdx);

    let r = {
        row: startRow + rowInBox,
        col: startCol + colInBox
    }

    return r;
}

// check if a spot is impossible (eg. already seen in the same row)
let spotPossible = function (g, row, col, num) {
    if (g[row][col] !== '0') return false; // spot is filled (with a number)
    if (basic.numInRow(g, row, num) > -1) return false;
    if (basic.numInCol(g, col, num) > -1) return false;

    return true;
}

// In a box, if all open spots are eliminated (eg. same number in the row),
// except for the last spot. fill in that number.
// boxIdx is 0 - 8
let solveInOnlyspotBox = function (g, boxIdx, num) {
    let threeRowsNums = basic.get3Rows(g, Math.floor(boxIdx / 3));

    let boxNums = basic.get3Boxes(threeRowsNums)[boxIdx % 3];
    if (boxNums.indexOf(num.toString()) > -1) { // already in box
        return { row: null, col: null, num: num };
    }

    let possibleSpots = buildInitSpots();
    for (let i=0; i<9; i++) {
        let { row, col } = toRowCol(boxIdx, i);
        possibleSpots[i] = spotPossible(g, row, col, num);
    }

    let choices = possibleSpots.filter(e => e === true)
    if (choices.length !== 1) {
        return { row: null, col: null, num: num };
    }

    let { row, col } = toRowCol(boxIdx, possibleSpots.indexOf(true));
    return { row, col, num };
}

export {
    solveInOnlyspotBox
}