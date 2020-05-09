import * as basic from '../../lib/basic.js';

// if "5" is seen in box 0 and 1, but not in box 2, then "5" is fixed to
// a single row of box 2. If two numbers in box 2 are already filled with
// numbers, then "5" is in the last spot.
// type is either "horizontal" or "vertical"
// return either { row, col, num } or { row: null, col: null, num: num }
let solveIn1d = function (g, type, boxd1Idx, num) {
    if (type === "horizontal") {
        let threeRows = basic.get3Rows(g, boxd1Idx);
        let threeBoxes = basic.get3Boxes(threeRows);
        let seen = basic.numInBoxes(threeBoxes, num);
        if (seen.length !== 2) {
            return { row: null, col: null, num: num };
        }

        let notSeen = basic.numNotInBoxes(threeBoxes, num);
        let rowsTaken = [];
        seen.map(e => rowsTaken.push(e.row));
        let missingRow = 3 - rowsTaken.reduce((a, e) => a + e, 0);
        let missingRowNums = threeBoxes[notSeen[0]].slice(missingRow*3, 
                                                          missingRow*3+3);
        if (basic.countUnknown(missingRowNums) !== 1) {
            return { row: null, col: null, num: num };
        }

        let row = boxd1Idx * 3 + missingRow;
        let col = notSeen[0] * 3 + missingRowNums.indexOf('0');
        console.log(`row: ${row}, col: ${col}, num: ${num}`);
        return { row: row, col: col, num: num };
    } else if (type === "vertical") {
        let threeCols = basic.get3Cols(g, boxd1Idx);
        let threeBoxes = basic.get3Boxes(threeCols);
        let seen = basic.numInBoxes(threeBoxes, num);
        if (seen.length !== 2) {
            return { row: null, col: null, num: num };
        }

        let notSeen = basic.numNotInBoxes(threeBoxes, num);
        let colsTaken = [];
        seen.map(e => colsTaken.push(e.row));
        let missingRow = 3 - colsTaken.reduce((a, e) => a + e, 0);
        let missingRowNums = threeBoxes[notSeen[0]].slice(missingRow*3, missingRow*3+3);
        if (basic.countUnknown(missingRowNums) !== 1) {
            return { row: null, col: null, num: num };
        }

        let row = notSeen[0] * 3 + missingRowNums.indexOf('0');
        let col = boxd1Idx * 3 + missingRow;
        console.log(`row: ${row}, col: ${col}, num: ${num}`);
        return { row: row, col: col, num: num };

    } else {
        throw new Error(`Unknown type: ${type}`);
    }

}

export {
    solveIn1d
}