import { countUnknown, boxStarts } from '../utils.js';

// given arr of "123456780", return {pos:8, num:9}
// given arr of "123456700", return {pos:null, num:null}
let solveIn9 = function (str) {
    let unknownCount = countUnknown(str);

    if (unknownCount !== 1) {
        return {
            pos: null,
            num: null
        }
    }

    // there is exactly one number unknown
    let strCopy = str.slice();
    strCopy.sort();

    let num = 9;
    strCopy.shift() // should have only 1 "0"
    for (let i = 0; i < 8; i++) {
        if (strCopy[i] !== (i + 1).toString()) {
            num = i + 1;
            break;
        }
    }

    let pos = str.indexOf('0');

    return {
        pos,
        num
    }
}

// find coords (row, col) for a number
// type is "row", "col", or "box"
// numCoords("row", 2, 3, 4) => { row: 2, col: 3, num: 4}
// numCoords("col", 2, 3, 4) => { row: 3, col: 2, num: 4}
// numCoords("box", 2, 3, 4) => { row: 1, col: 6, num: 4}
let numCoords = function (type, boxIdx, idx, num) {
    if (type === 'row') {
        return {
            row: boxIdx,
            col: idx,
            num: num.toString()
        }
    } else if (type === 'col') {
        return {
            row: idx,
            col: boxIdx,
            num: num.toString()
        }
    } else if (type === 'box') {
        let { startRow, startCol } = boxStarts(boxIdx);
        let resultRow = startRow + Math.floor(idx / 3);
        let resultCol = startCol + idx % 3;
        return {
            row: resultRow,
            col: resultCol,
            num: num.toString()
        }
    } else {
        throw new Error(`Unknown type: ${type}`);
    }
}

// functions to handle calculations relating to 9 numbers
export {
    solveIn9,
    numCoords
}