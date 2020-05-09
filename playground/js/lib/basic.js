// arrToStr(["0", "1", "2"]) => "012"
let arrToStr = function (arr) {
    return arr.reduce((a, e) => a + e, "");
}

// strToArr("012") => ["0", "1", "2"]
let strToArr = function (str) {
    let result = [];

    for (let i=0; i<str.length; i++) {
        result.push(str[i]);
    }

    return result
}

let print_appearances = function (appearances) {
    let result = `Found ${appearances.length}: `;

    for (let a of appearances) {
        result += `(${a.row}, ${a.col})`;
    }

    return result;
}

// count how many "0" there are in a str
let countUnknown = function (str) {
    let count = 0;
    for (let i=0; i<str.length; i++) {
        if (str[i] === '0') count++;
    }

    return count
}

let boxStartRow = function (boxIdx) {
    return Math.floor(boxIdx / 3) * 3;
}

let boxStartCol = function (boxIdx) {
    return (boxIdx % 3) * 3;
}

// return { startRow: 3, startCol: 3 } for boxStarts(4)
let boxStarts = function (boxIdx) {
    return {
        startRow: boxStartRow(boxIdx),
        startCol: boxStartCol(boxIdx)
    }
}

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

// from game g, according to boxColIdx (0, 1, or 2), get the corresponding
// 3 columns of numbers.
let get3Cols = function (g, boxColIdx) {
    let startCol = boxColIdx * 3;
    let result = [];

    for (let i=startCol; i<startCol+3; i++) {
        let e  = "";
        for (let j=0; j<9; j++) {
            e += g[j][i];
        }
        result.push(e);
    }

    return result;
}

// get3Boxes(["001002003", "004005006", "007008009"]) =>
//     ["001004007", "002005008", "003006009"]
// input is either get3Rows() or get3Cols(). 
let get3Boxes = function (three9s) {
    let result = [];
    for (let i=0; i<3; i++) {
        let box = "";
        let start = i * 3;
        for (let j=0; j<3; j++) {
            box += three9s[j].slice(start, start+3);
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
                d1: Math.floor(l / 3),
                d2: l % 3
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

export {
    arrToStr,
    strToArr,
    boxStartRow,
    boxStartCol,
    boxStarts,
    print_appearances,
    countUnknown,
    get3Rows,
    get3Cols,
    get3Boxes,
    numInBoxes,
    numNotInBoxes
}