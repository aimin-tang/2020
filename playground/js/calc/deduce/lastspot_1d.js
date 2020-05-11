import * as basic from '../../lib/basic.js';

// if "5" is seen in box 0 and 1, but not in box 2, then "5" is fixed to
// a single row of box 2. If two numbers in box 2 are already filled with
// numbers, then "5" is in the last spot.
// direction is either "horizontal" or "vertical"
// idx is either 0, 1 or 2
// return either { row, col, num } or { row: null, col: null, num: num }
let solveInLastSpod1d = function (g, direction, idx, num) {
    if (direction === "horizontal") {
        let threeRows = basic.get3Rows(g, idx);
        let threeBoxes = basic.get3Boxes(threeRows);
        let seen = basic.numInBoxes(threeBoxes, num);
        if (seen.length !== 2) {
            return { row: null, col: null, num: num };
        }

        let notSeen = basic.numNotInBoxes(threeBoxes, num);
        let rowsTaken = [];
        seen.map(e => rowsTaken.push(e.d1));
        let missingRow = 3 - rowsTaken.reduce((a, e) => a + e, 0);
        let missingRowNums = threeBoxes[notSeen[0]].slice(missingRow*3, 
                                                          missingRow*3+3);
        if (basic.countUnknown(missingRowNums) !== 1) {
            return { row: null, col: null, num: num };
        }

        let row = idx * 3 + missingRow;
        let col = notSeen[0] * 3 + missingRowNums.indexOf('0');
        return { row: row, col: col, num: num };
    } else if (direction === "vertical") {
        let threeCols = basic.get3Cols(g, idx);
        let threeBoxes = basic.get3Boxes(threeCols);
        let seen = basic.numInBoxes(threeBoxes, num);
        if (seen.length !== 2) {
            return { row: null, col: null, num: num };
        }

        let notSeen = basic.numNotInBoxes(threeBoxes, num);
        let colsTaken = [];
        seen.map(e => colsTaken.push(e.d1));
        let missingCol = 3 - colsTaken.reduce((a, e) => a + e, 0);
        let missingColNums = threeBoxes[notSeen[0]].slice(missingCol*3,
                                                          missingCol*3+3);
        if (basic.countUnknown(missingColNums) !== 1) {
            return { row: null, col: null, num: num };
        }

        let row = notSeen[0] * 3 + missingColNums.indexOf('0');
        let col = idx * 3 + missingCol;
        return { row: row, col: col, num: num };
    } else {
        throw new Error(`Unknown direction: ${direction}`);
    }
}

export {
    solveInLastSpod1d
}