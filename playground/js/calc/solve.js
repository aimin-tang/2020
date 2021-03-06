import { readRow, readCol, readBox } from '../lib/read.js';
import { solveIn9, numCoords } from './deduce/nine_numbers.js';
import { solveInLastSpod1d } from './deduce/lastspot_1d.js';
import { solveIn2r2c } from './deduce/two_rows_two_cols.js';
import { solveInOnlyspotBox } from './deduce/onlyspot_box.js';

let nextMove = function (g) {
    // check each row
    for (let i = 0; i < 9; i++) {
        let arr = readRow(g, i);
        let { pos, num } = solveIn9(arr);
        if (pos != null) {
            console.log(`Fill: Row ${i}, ${arr}`);
            return numCoords('row', i, pos, num);
        }
        console.log(`Skip: Row ${i}, ${arr}`);
    }

    // check each column
    for (let i = 0; i < 9; i++) {
        let arr = readCol(g, i);
        let { pos, num } = solveIn9(arr);
        if (pos != null) {
            console.log(`Fill: Col ${i}, ${arr}`);
            return numCoords('col', i, pos, num);
        }
        console.log(`Skip: Col ${i}, ${arr}`);
    }

    // check each box
    for (let i = 0; i < 9; i++) {
        let arr = readBox(g, i);
        let { pos, num } = solveIn9(arr);
        if (pos != null) {
            console.log(`Fill: Box ${i}, ${arr}`);
            return numCoords('box', i, pos, num);
        }
        console.log(`Skip: Box ${i}, ${arr}`);
    }

    // check lastspot 1-d
    for (let n = 1; n < 10; n++) {
        for (let j = 0; j < 3; j++) {
            let r = solveInLastSpod1d(g, "horizontal", j, n);
            if (r.row != null) {
                console.log(`Fill:  Horizonal 1d box: ${j}, num: ${n}`)
                return r;
            }
            console.log(`Skip:  Horizonal 1d box: ${j}, num: ${n}`)
        }
    }
    for (let n = 1; n < 10; n++) {
        for (let j = 0; j < 3; j++) {
            let r = solveInLastSpod1d(g, "vertical", j, n);
            if (r.row != null) {
                console.log(`Fill:  Vertical 1d box: ${j}, num: ${n}`)
                return r;
            }
            console.log(`Skip:  Vertical 1d box: ${j}, num: ${n}`)
        }
    }

    // check 2-rows-2-cols
    /* 
    for (let n = 1; n < 10; n++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                let r = solveIn2r2c(g, j, k, n);
                if (r.row) {
                    console.log(`Fill:  2d d1: ${j}, d2: ${k}, num: ${n}`)
                    return r; 
                }
                console.log(`Skip:  2d d1: ${j}, d2: ${k}, num: ${n}`)
            }
        }
    }
    */

    // check onlyspot for box
    for (let box=0; box<9; box++) {
        for (let i=0; i<9; i++) {
            let r = solveInOnlyspotBox(g, box, i)
            if (r.row != null) {
                console.log(`Fill:  onlyspot box: ${box}, num: ${i}`)
                return r; 
            }
            console.log(`Skip:  onlyspot box: ${box}, num: ${i}`)
        }
    }
    console.log("Sigh: Out of skills!");
}

let move1 = function (g) {
    let { row, col, num } = nextMove(g);
    g[row] = g[row].substr(0, col) + num + g[row].substr(col + 1);
}

let moveAll = function (g) {
    g[1] = "111111111";
}

export {
    move1,
    moveAll,
}