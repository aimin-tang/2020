import { g1 } from "../games/g1.js";

let drawGrid = function () {
    for (let row of g1) {
        console.log(row);
    }
}

export {
    drawGrid
};