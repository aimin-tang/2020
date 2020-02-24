const myP = function (num) {
    const p = new Promise(function (resolve, reject) {
        if (typeof num !== 'number') {
            reject(`bad type of ${typeof num}. should be a number`);
        }
        resolve(num * num);
    })
    return p;
}

myP(3)
    .then(value => {
        console.log(value)
        return myP('bad');
    })
    .then(value => {
        console.log(value)
    })
    .catch(error => {
        console.log(error)
    });

console.log("Done!!!")