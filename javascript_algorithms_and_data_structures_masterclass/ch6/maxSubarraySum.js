"use strict";

let maxSubarraySum = function (arr, num) {
    if (num > arr.length) {
        throw new Error(`Given array is too short: ${arr}, ${num}`);
    }

    let result = arr.slice(0, num).reduce((a, b) => a+b, 0);
    let lastSum = result;

    for (let i=num; i<arr.length; i++) {
        let newSum = (lastSum + arr[i] - arr[i-num]);
        result = Math.max(result, newSum);
        lastSum = newSum;
    }

    return result;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([300, 400], 3));
