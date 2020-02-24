const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

let insertOnewayPath = function (graph, from, to) {
    if (graph[from] == null) {
        graph[from] = [to]
    } else {
        graph[from].push = to
    }
}

let insertBothWaysPath = function (graph, from, to) {
    insertOnewayPath(graph, from, to);
    insertOnewayPath(graph, to, from);
}

let buildGraph = function (roads) {
    let graph = {};
    for (let road of roads) {
        let [from, to] = road.split('-');
        insertBothWaysPath(graph, from, to);
    }
    return graph;
}

module.exports = {
    graph: buildGraph(roads),
}