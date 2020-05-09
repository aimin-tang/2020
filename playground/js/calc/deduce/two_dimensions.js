import * as basic from '../../lib/basic.js';

let solveIn2d = function (g, idx1, idx2, num) {
    let rowNums =basic.get3Rows(g, idx1);
    let seenBoxes1 = basic.numInBoxes(rowNums, num);
    if (seenBoxes1.length !== 2) {
        return { row: null, col: null, num: num };
    }

    let colNums =basic.get3Cols(g, idx2);
    let seenBoxes2 = basic.numInBoxes(colNums, num);
    if (seenBoxes2.length !== 2) {
        return { row: null, col: null, num: num };
    }

    let rowsTaken  = [];
    seenBoxes1.map(e => rowsTaken.push(e.d1));
    let missingRow = 3 - rowsTaken.reduce((a, e) => a + e, 0);

    let colsTaken  = [];
    seenBoxes2.map(e => colsTaken.push(e.d1));
    let missingCol = 3 - colsTaken.reduce((a, e) => a + e, 0);

    return {
        row: idx1 * 3 + missingRow,
        col: idx2 * 3 + missingCol,
        num
    }
}

export {
    solveIn2d
}