let nextMove = function (g) {
    // check each row
    let arr;

    for (let i=0; i<9; i++) {
        arr = [];
        for (let j=0; j<9; j++){
            arr.push(g[i][j]);
        }
        let { pos, num} = thereIsOnlyChoice(arr);
        if (pos) {
            return {
                row: i,
                col: pos,
                num: num.toString()
            }
        }
    }

    // check each column
    for (let i=0; i<9; i++) {
        arr = [];
        for (let j=0; j<9; j++){
            arr.push(g[j][i]);
        }
        let { pos, num} = thereIsOnlyChoice(arr);
        if (pos) {
            return {
                row: pos,
                col: i,
                num: num.toString()
            }
        }
    }

    // check each box
    for (let i=0; i<9; i++) {
        arr = [];
        let startRow = Math.floor(i / 3) * 3;
        let startCol = (i % 3) * 3;
        for (let j=startRow; j<startRow + 3; j++){
            for (let k=startCol; k<startCol + 3; k++){
                arr.push(g[j][k]);
            }
        }
        let { pos, num} = thereIsOnlyChoice(arr);
        if (pos) {
            let resultRow = startRow + Math.floor(pos / 3);
            let resultCol = startCol + i % 3;
            return {
                row: resultRow,
                col: resultCol,
                num: num.toString()
            }
        }
    }
}

let buildRow = function (g, row) {
    let result = [];
    for (let i=0; i<9; i++) {
        result.push(g[row][i]);
    }
    return result;
}

let buildCol = function (g, col) {
    let result = [];
    for (let i=0; i<9; i++) {
        result.push(g[i][col]);
    }
    return result;
}

let buildBox = function (g, box) {
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

let thereIsOnlyChoice = function (arr) {
    // return {pos: <num>, num: <num>}, or {pos: null, num: null}
    let arrCopy = JSON.parse(JSON.stringify(arr));
    arrCopy.sort();
    let count = 0;
    arrCopy.forEach(num => {
        if (num === '0') count++;
    })
    
    if (count > 1 || count === 0) {
        return {
            pos: null,
            num: null
        }
    }

    // there is exactly one number missing:
    let num = 9;
    arrCopy.shift()
    for (let i = 0; i< 8; i++) {
        if (arrCopy[i] !== (i + 1).toString()) {
            num = i + 1;
            break;
        }
    }

    let pos = arr.indexOf('0');

    return {
        pos,
        num
    }
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
    thereIsOnlyChoice
}