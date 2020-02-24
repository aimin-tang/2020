import { g1 } from "../games/g1.js";
import {draw1Num } from "../utils/num_images.js";

let drawGrid = function () {
    let result = "";
    for (let row of g1) {
        for (let num of row) {
            result += draw1Num(num);
        }
    }
    return result;
}

export {
    drawGrid
};