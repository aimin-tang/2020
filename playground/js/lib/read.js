// Given a game, get the numbers for a row, eg: "123456780"
let readRow = function (g, row) {
    let result = [];
    for (let i=0; i<9; i++) {
        result.push(g[row][i]);
    }
    return result;
}

// Given a game, get the numbers for a col, eg: "123456780"
let readCol = function (g, col) {
    let result = [];
    for (let i=0; i<9; i++) {
        result.push(g[i][col]);
    }
    return result;
}

// Given a game, get the numbers for a box, eg: "123456780"
// a game is viewed to have 9 boxes. top 3 rows have boxes 0, 1, 2.
// next 3 rows have boxes 3, 4, 5, last 3 rows have 6, 7, 8.
let readBox = function (g, box) {
    let result = [];
    let startRow = Math.floor(box / 3) * 3;
    let startCol = (box % 3) * 3;
    for (let i=startRow; i<startRow + 3; i++) {
        for (let j=startCol; j<startCol + 3; j++) {
            result.push(g[i][j]);
        }
    }
    return result;
}

// functions to read the numbers (as a string) for a row, a column, or a box
export {
    readRow,
    readCol,
    readBox
}