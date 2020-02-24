const { graph } = require('./genGraph');
const { villageState, move, randomInit } = require('./villageState');

// console.log(graph)
first = randomInit(graph, 2);
console.log(first);