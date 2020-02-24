'use strict';

const numToFreqObj = function (int) {
    let intS = int.toString();
    let result = {}
    for (let d of intS) {
        result[d] = (result[d] || 0) + 1;
    }

    return result;
}

const isEqual = function (obj1, obj2) {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);

    if (props1.length !== props2.length) { return false; }
    for (let i=0; i<props1.length; i++) {
        let p = props1[i];
        if (obj1[p] !== obj2[p]) {
            return false;
        }
    }
    return true;
}

const sameFreq = function (int1, int2) {
    // sanitize inputs
    if (typeof int1 !== 'number' || typeof int2 !== 'number') {
        throw new Error(`Need two numbers as input, got: ${int1}, ${int2}`)
    } else if ([int1, int2]
                   .map(i => /^[0-9]+$/.exec(i.toString()))
                   .filter(r => r === null)
                   .length > 0) {
        throw new Error(`Not all are integers. got: ${int1}, ${int2}`)
    }

    return isEqual(numToFreqObj(int1), numToFreqObj(int2));
}

console.log(sameFreq(182,281))
console.log(sameFreq(34,14))
console.log(sameFreq(3589578,5879385))
console.log(sameFreq(22,222))