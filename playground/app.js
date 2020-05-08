import { drawGrid } from "./utils/draw_grids.js";
import { move1, moveAll } from "./utils/solve.js";
import { g } from "./games/g1.js"

function loadGame() {
    let here = document.getElementById("here");
    // here.innerHTML = show10Nums();
    here.innerHTML = drawGrid(g);
}

function next() {
    move1(g)
    here.innerHTML = drawGrid(g);
}

function end() {
    moveAll(g)
    here.innerHTML = drawGrid(g);
}

function addEventActions() {
    let button1 = document.getElementById("button1");
    button1.addEventListener("click", next);
    let button2 = document.getElementById("button2");
    button2.addEventListener("click", end);
}

loadGame();
addEventActions();


// start: python -m SimpleHTTPServer
