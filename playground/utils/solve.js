let nextMove = function (g) {
    return {
        row: 0,
        col: 0,
        num: 1
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
    moveAll
}