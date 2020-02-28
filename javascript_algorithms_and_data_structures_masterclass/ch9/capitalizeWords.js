function capitalizedWords(arr) {
    if (arr.length === 0) return [];
    let result = [arr[0].toUpperCase()];
    result = result.concat(capitalizedWords(arr.slice(1)));
    return result;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']