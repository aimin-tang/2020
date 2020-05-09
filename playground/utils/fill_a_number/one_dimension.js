import { countUnknown, arrToStr, strToArr, boxStartRow, boxStartCol, boxStarts } from '../utils.js';

// from game g, according to boxRowIdx (0, 1, or 2), get the corresponding
// 3 rows of numbers.
let get3Rows = function (g, boxRowIdx) {
    let startRow = boxRowIdx * 3;
    let result = [];

    for (let i=startRow; i<startRow+3; i++) {
        result.push(g[i]);
    }

    return result;
}

// threeRowsInto3Boxes(["001002003", "004005006", "007008009"]) =>
//     ["001004007", "002005008", "003006009"]
let get3Boxes = function (threeRows) {
    let result = [];
    for (let i=0; i<3; i++) {
        let box = "";
        let start = i * 3;
        for (let j=0; j<3; j++) {
            box += threeRows[j].slice(start, start+3);
        }
        result.push(box);
    }

    return result
}

// return array of where num is seen.
// numInBoxes(["005000000", "000005000", "000000000"]) => 
//     [{box: 0, row: 0, col: 2}, {box: 1, row: 1, col: 2}]
let numInBoxes = function (threeBoxes, num) {
    let result = [];
    let nS = num.toString();

    for (let i = 0; i<3; i++) {
        let l = threeBoxes[i].indexOf(nS);
        if (l > -1) {
            result.push({
                box: i,
                row: Math.floor(l / 3),
                col: l % 3
            })
        }
    } 
    
    return result;
}

// return array of where number is not seen
// numNotInBoxes(["005000000", "000005000", "000000000"]) => [2]
let numNotInBoxes = function (threeBoxes, num) {
    let result = [];
    let nS = num.toString();

    for (let i = 0; i<3; i++) {
        let l = threeBoxes[i].indexOf(nS);
        if (l === -1) {
            result.push(i);
        }
    } 
    
    return result;
}

// if "5" is seen in box 0 and 1, but not in box 2, then "5" is fixed to
// a single row of box 2. If two numbers in box 2 are already filled with
// numbers, then "5" is in the last spot.
// type is either "horizontal" or "vertical"
// return either { row, col, num } or { row: null, col: null, num: num }
let solveIn1d = function (g, type, boxRowIdx, num) {
    if (type === "horizontal") {
        let threeRows = get3Rows(g, boxRowIdx);
        let threeBoxes = get3Boxes(threeRows);
        let seen = numInBoxes(threeBoxes, num);
        if (seen.length !== 2) {
            return { row: null, col: null, num: num };
        }

        let notSeen = numNotInBoxes(threeBoxes, num);
        let rowsTaken = [];
        seen.map(e => rowsTaken.push(e.row));
        let missingRow = 3 - rowsTaken.reduce((a, e) => a + e, 0);
        let missingRowNums = threeBoxes[notSeen[0]].slice(missingRow*3, missingRow*3+3);
        if (countUnknown(missingRowNums) !== 1) {
            return { row: null, col: null, num: num };
        }

        let row = boxRowIdx * 3 + missingRow;
        let col = notSeen[0] * 3 + missingRowNums.indexOf('0');
        console.log(`row: ${row}, col: ${col}, num: ${num}`);
        return { row: row, col: col, num: num };
    } else if (type === "vertical") {
        let threeCols = get3Cols(g, boxRowIdx);
        let threeBoxes = get3Boxes(threeCols);
        let seen = numInBoxes(threeBoxes, num);
        if (seen.length !== 2) {
            return { row: null, col: null, num: num };
        }

        let notSeen = numNotInBoxes(threeBoxes, num);
        let rowsTaken = [];
        seen.map(e => rowsTaken.push(e.row));
        let missingRow = 3 - rowsTaken.reduce((a, e) => a + e, 0);
        let missingRowNums = threeBoxes[notSeen[0]].slice(missingRow*3, missingRow*3+3);
        if (countUnknown(missingRowNums) !== 1) {
            return { row: null, col: null, num: num };
        }

        let row = boxRowIdx * 3 + missingRow;
        let col = notSeen[0] * 3 + missingRowNums.indexOf('0');
        console.log(`row: ${row}, col: ${col}, num: ${num}`);
        return { row: row, col: col, num: num };

    } else {
        throw new Error(`Unknown type: ${type}`);
    }

}

export {
    solveIn1d
}