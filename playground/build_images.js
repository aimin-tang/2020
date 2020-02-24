let buildImages = function() {
    let images = [];

    for (let i = 0; i < 10; i++) {
        images.push(`./images/${i}.jpg`);
    }

    return images;
}

let buildGrids = function() {
    let images = buildImages();
    let innerHTML = "";

    for (let i = 0; i < 10; i++) {
        innerHTML += `<img src="${images[i]}" height="35" width="35">`
    }
    console.log(innerHTML);
    return innerHTML;
}

export {
    buildImages,
    buildGrids
}