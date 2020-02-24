let buildImages = function() {
    let images = [];

    for (let i = 0; i < 10; i++) {
        images.push(`./images/${i}.jpg`);
    }

    return images;
}

let draw1Num = function(num) {
    return `<img src="../images/${num}.jpg" height="35" width="35">`
}

let show10Nums = function() {
    let images = buildImages();
    let innerHTML = "";

    for (let i = 0; i < 10; i++) {
        innerHTML += draw1Num(i);
    }
    console.log(innerHTML);
    return innerHTML;
}

export {
    buildImages,
    draw1Num,
    show10Nums
}