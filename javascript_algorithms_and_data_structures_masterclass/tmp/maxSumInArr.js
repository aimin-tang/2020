let maxSumInArr = function(arr, n) {
    // sanitize input
    if (arr.map(n => typeof n).filter(r => r === 'number').length < arr.length) {
        throw new Error("Not all elements in array are numbers.")
    } else if (typeof n !== 'number') {
        throw new Error("number count isn't a number.")
    } else if (n > arr.length) {
        throw new Error("number count is too big (bigger than array length).")
    }

    let left = 0;
    let right = n;
    let result;

    do {
        curResult = arr.slice(left, right).reduce((a, b) => a + b, 0);
        if (result) {
            if (curResult > result) {
                result = curResult;
            }
        } else {
            result = curResult;
        }
        left++;
        right++
    } while (right < arr.length);

    return result;
}

console.log(maxSumInArr([1,2,5,2,8,1,5], 2))
console.log(maxSumInArr([1,2,5,2,8,1,5], 4))
console.log(maxSumInArr([], 4))