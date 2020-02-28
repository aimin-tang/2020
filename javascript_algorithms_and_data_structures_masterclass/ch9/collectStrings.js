let collectStrings = function (obj) {
    let result = [];
    for (let k in obj) {
        if (typeof obj[k] === 'string') {
            result.push(obj[k]);
        } else {
            result = result.concat(collectStrings(obj[k]));
        }
    }
    return result;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])