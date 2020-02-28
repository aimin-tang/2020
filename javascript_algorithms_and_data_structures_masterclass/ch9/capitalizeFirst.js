let capitalizeFirst = function (arr) {
    if (arr.length === 0) { return []; }
    let arr1 = capitalizeFirst(arr.slice(0, arr.length-1));
    let lastWord = arr[arr.length - 1];
    let lastWordCap = lastWord[0].toUpperCase() + lastWord.slice(1);
    arr1.push(lastWordCap);
    return arr1;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']