async function f1() {
    return "hello";
}

f1().then(v => console.log(v))
console.log("Done")

function gsn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(42), 2000)
    })
}

async function f() {
    const n = await gsn();
    return n
}

console.log(f())
console.log("Done again")