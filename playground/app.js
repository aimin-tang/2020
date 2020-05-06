import { drawGrid } from "./utils/draw_grids.js";
import { move1, moveAll } from "./utils/solve.js";
import { g1 } from "./games/g1.js"

function loadGame() {
    let here = document.getElementById("here");
    // here.innerHTML = show10Nums();
    here.innerHTML = drawGrid(g1);
}

function addEventActions() {
    function next() {
        move1(g1)
        here.innerHTML = drawGrid(g1);
    }

    function end() {
        moveAll(g1)
        here.innerHTML = drawGrid(g1);
    }
    let button1 = document.getElementById("button1");
    button1.addEventListener("click", next);
    let button2 = document.getElementById("button2");
    button2.addEventListener("click", end);
}

loadGame();
addEventActions();


// start: python -m SimpleHTTPServer
