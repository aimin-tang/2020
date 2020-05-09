import { readRow, readCol, readBox } from './game/read_game.js';
import { solveIn9, numCoords } from './fill_a_number/nine_numbers.js'; 
import { solveIn1d } from './fill_a_number/one_dimension.js';

let indexToBox = function (index) {
    return Math.floor(index / 3);
}

let nextMove = function (g) {
    // check each row
    for (let i=0; i<9; i++) {
        let arr = readRow(g, i);
        let { pos, num } = solveIn9(arr);
        if (pos) {
            console.log(`Fill: Row ${i}, ${arr}`);
            return numCoords('row', i, pos, num);
        }
        console.log(`Skip: Row ${i}, ${arr}`);
    }

    // check each column
    for (let i=0; i<9; i++) {
        let arr = readCol(g, i);
        let { pos, num } = solveIn9(arr);
        if (pos) {
            console.log(`Fill: Col ${i}, ${arr}`);
            return numCoords('col', i, pos, num);
        }
        console.log(`Skip: Col ${i}, ${arr}`);
    }

    // check each box
    for (let i=0; i<9; i++) {
        let arr = readBox(g, i);
        let { pos, num } = solveIn9(arr);
        if (pos) {
            console.log(`Fill: Box ${i}, ${arr}`);
            return numCoords('box', i, pos, num);
        }
        console.log(`Skip: Box ${i}, ${arr}`);
    }

    // check 1-d
    for (let n=1; n<10; n++) {
        for (let boxRow=0; boxRow<3; boxRow++) {
            let r = solveIn1d(g, "horizontal", boxRow, n);
            if (r.row) {
                console.log(`Fill:  Horizonal 1d box: ${boxRow}, num: ${n}`)
                return r;
            }
            console.log(`Skip:  Horizonal 1d box: ${boxRow}, num: ${n}`)
        }
    }
    for (let n=1; n<10; n++) {
        for (let boxCol=0; boxCol<3; boxCol++) {
            let r = solveIn1d(g, "vertical", boxCol, n);
            if (r.row) {
                console.log(`Fill:  Vertical 1d box: ${boxCol}, num: ${n}`)
                return r;
            }
            console.log(`Skip:  Vertical 1d box: ${boxCol}, num: ${n}`)
        }
    }
    
    // check 2-d
    /*
    for (let n=1; n<10; n++) {
        for (let boxRow=0; boxRow<3; boxRow++) {
            continue;
            let nS = n.toString();
            let startRow  = boxRow * 3;
            let appearances = [];
            for (let j=startRow; j<startRow+3; j++) {
                let k =  g[j].indexOf(nS);
                if (g[j].indexOf(nS) > -1) {
                    appearances.push({row: j, col: k});
                }
            }

            console.log(`n: ${n}, boxRow: ${boxRow}, appearances: ` +
                        `${print_appearances(appearances)}`)
            if (appearances.length !== 2) { continue; }

            let boxesTaken = appearances.map(a => indexToBox(a.col))
            let boxMissing = 3 - boxesTaken.reduce((s, i) => s + i, 0);
            let rowsTaken = appearances.map(a => a.row);
            let rowMissing = startRow * 3 + 3 - rowsTaken.reduce((s, i) => s + i, 0);

            let startCol = boxMissing * 3;
            let appearances2 = [];
            for (let j = startCol; j<startCol+3; j++) {
                for (let row=0; row<9; row++) {
                    if (g[row][j] === nS) {
                        appearances2.push({row: row, col: j});
                    }
                }
            }

            console.log(`appearances2: ${print_appearances(appearances2)}`)
            if (appearances2.length !== 2) { continue; }

            let colsTaken = appearances2.map(a => a.col);
            let colMissing = startCol * 3 + 3 - colsTaken.reduce((s, i) => s + i, 0);

            return {
                row: rowMissing,
                col: colMissing,
                num: n.toString()
            }
        }
    }
    */
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