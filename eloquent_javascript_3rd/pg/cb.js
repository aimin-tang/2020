let calSq = function (num, cb) {
    setTimeout(function () {
        if (typeof num === 'number') {
            cb(null, num * num);
        } else {
            cb(new Error(`num should be a number, but got ${typeof num}`));
        }
    }, 1000)
}

calSq('bad', (error, result) => {
    if (error !== null) {
        console.log(error)
        console.log("Done")
        return;
    };
    console.log(result);
})