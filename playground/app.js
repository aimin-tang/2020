import { buildGrids } from "./build_images.js";

function main() {
    let here = document.getElementById("here");
    here.innerHTML = buildGrids();

}
console.log(main());
