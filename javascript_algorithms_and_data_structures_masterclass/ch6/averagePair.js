"use strict";

let averagePair = function (arr, avg) {
    let startIdx = 0;

    while (startIdx < arr.length) {
        for (let i = startIdx; i < arr.length; i++) {
            let tempAvg = (arr[startIdx] + arr[i]) / 2;
            if (tempAvg === avg) {
                return true;
            } else if (tempAvg > avg) {
                break;
            }
        }
        startIdx++;
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 2, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 2.5))