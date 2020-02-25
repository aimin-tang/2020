'use strict';

let maxSubArray = function (arr, len) {
    let result = arr.slice(0, len).reduce((a, b) => a+b, 0);
    let currSum = result;

    for (let i=len; i<arr.length; i++) {
        let newSum = currSum + arr[i] - arr[i-len];
        result = Math.max(result, newSum);
        currSum = newSum;
    }

    return result;
}

let minSubArrayLen = function(arr, sum) {
    for (let i=1; i<arr.length; i++) {
        if (maxSubArray(arr, i) >= sum){
            return i;
        }
    }
    return 0;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([2,1,6,5,4], 9))
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55))
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11))
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95))