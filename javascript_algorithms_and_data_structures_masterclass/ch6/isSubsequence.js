"use strict";

let isSubsequence = function(str1, str2) {
    let consumed2 = 0;
    for (let l1 of str1) {
        let remaining = str2.slice(consumed2);
        let pos = remaining.indexOf(l1);
        if (pos == -1) return false;
        consumed2 += pos;
    }
    return true;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracad'));
console.log(isSubsequence('abc', 'acb'));