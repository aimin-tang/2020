const { graph } = require("./genGraph");

console.log(graph);

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i=0; i<work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)})
            }
        }
    }
    return work;
}

console.log(findRoute(graph, "Alice's House", "Post Office"))
console.log(findRoute(graph, "Alice's House", "Marketplace"))