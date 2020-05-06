import {draw1Num } from "../utils/num_images.js";

let drawGrid = function (g) {
    let result = "";
    for (let row of g) {
        for (let num of row) {
            result += draw1Num(num);
        }
    }
    return result;
}

export {
    drawGrid
};