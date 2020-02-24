import { show10Nums } from "./utils/num_images.js";
import { drawGrid } from "./utils/draw_grids.js"; 

function main() {
    let here = document.getElementById("here");
    // here.innerHTML = show10Nums();
    here.innerHTML = drawGrid();
}
main();
