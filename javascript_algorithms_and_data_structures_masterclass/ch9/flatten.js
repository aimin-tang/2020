function flatten(arg) {
    if (arg.length !== undefined) {
        if (arg.length === 1) {
            return flatten(arg[0]);
        } else {
            let result = [];
            for (let e of arg) {
                result = result.concat(flatten(e));
            }
            return result;
        }
    } else {
        return arg;
    }
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3