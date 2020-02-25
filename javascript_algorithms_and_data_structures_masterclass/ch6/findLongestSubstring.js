"use strict";

let findLongestSubstring = function (str) {
    if (str.length === 0) return 0;

    let result = 1;

    for (let i=0; i<str.length; i++) {
        // console.log("==out==: ", str.slice(i), result)
        for (let j=i+1; j<str.length; j++) {
            // console.log("--in--:", i, j, str.slice(i, j));
            if (str.slice(i, j).indexOf(str[j]) === -1) {
                result = Math.max(result, j-i+1);
            } else {
                break;
            }
        }
    }

    return result;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));