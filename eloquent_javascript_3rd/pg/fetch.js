const p1 = function() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000)
    })
}
const p2 = function() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => reject("rejected"), 10000)
    })
}

Promise.race([p1(), p2()])
    .then(values => console.log(values))
    .catch(error => console.log(error))