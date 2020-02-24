let arrToFreqCounter = function (arr) {
    let result = {}
    for (let e of arr) {
        result[e] = (result[e] || 0) + 1;
    }
    return result;
}

// console.log(arrToFreqCounter([1, 2, 3, 2]))

let areThereDuplicates = function (...args) {
    freqCounter = arrToFreqCounter(args);
    for (let k in freqCounter) {
        if (freqCounter[k] > 1) {
            return true;
        } 
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));