class villageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
}

let move = function (graph, dest, fromState) {
    if (!graph[fromState.place].includes(dest)) {
        return fromState;
    } else {
        let parcels = fromState.parcels.map(parcel => {
            if (parcel.place != fromState.place) return parcel;
            return {
                place: dest,
                address: parcel.address
            }
        }).filter(parcel => {
            parcel.address != dest;
        })
        return new villageState(dest, parcels);
    }
}

let randomChoice = function(array) {
    choiceIdx = Math.floor(Math.random() * array.length);
    return array[choiceIdx];
}

let randomInit = function (graph, parcelCount=5) {
    let parcels = [];
    for (let i=0; i< parcelCount; i++) {
        let place = randomChoice(Object.keys(graph));
        let dest;
        do {
            dest = randomChoice(Object.keys(graph)); 
        } while (place == dest);
        parcels.push({place, dest});
    }
    let place = randomChoice(Object.keys(graph));

    return new villageState(place, parcels);
}

module.exports = {
    villageState,
    randomInit
}