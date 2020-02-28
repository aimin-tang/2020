let stringifyNumbers = function (obj) {
    let obj2 = {};
    for (let k in obj) {
        if (typeof obj[k] === 'number') {
            obj2[k] = obj[k].toString();
        } else if (typeof obj[k] === 'object') {
            if (obj[k] instanceof Array) {
                obj2[k] = obj[k];
            } else {
                obj2[k] = stringifyNumbers(obj[k]);
            }
        } else {
            obj2[k] = obj[k];
        }
    }
    return obj2;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/