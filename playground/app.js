import { drawGrid } from "./utils/draw_grids.js"; 
import { g1, g2 } from "./games/g1.js"

function main() {
    let here = document.getElementById("here");
    // here.innerHTML = show10Nums();
    here.innerHTML = drawGrid(g1);
}

function next() {
    let here = document.getElementById("here");
    here.innerHTML = drawGrid(g2);
}

function end() {
    let here = document.getElementById("here");
    here.innerHTML = drawGrid(g2);
}

main();

let button1 = document.getElementById("button1");
button1.addEventListener("click", next);
let button2 = document.getElementById("button2");
button2.addEventListener("click", end);

// python -m SimpleHTTPServer
