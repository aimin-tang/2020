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

export {
    arrToStr,
    strToArr,
    boxStartRow,
    boxStartCol,
    boxStarts,
    print_appearances,
    countUnknown
}