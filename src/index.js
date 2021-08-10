const ticketPrice = 4;
const rentPrice = 2;
const Netflix = 4.2;
const Amazon = 3.7;
const Hbo = 3.5;
const Disney = 6;

const streaming = {
    Netflix: 4.2,
    Amazon: 3.7,
    Hbo: 3.5,
    Disney: 6,
};


function calculateCinema (movies, cost) {
    const resultCinema = movies * cost;
    return resultCinema;
};

function calculateStreaming () {
    if(true){
        A = Netflix;
    } else {
        A = 0;
    };
    if(true){
        B = Amazon;
    } else {
        B = 0;
    };
    if(true){
        C = Hbo;
    } else {
        C = 0;
    };
    if(true){
        D = Disney;
    } else {
        D = 0;
    };
    const resultStreaming = A + B + C + D;
    return resultStreaming;
};

function compareStreaming() {
    const resultCinema = calculateCinema (2, ticketPrice);
    const resultStreaming = calculateStreaming();
    const resultCompare = resultCinema - resultStreaming;
    if(resultCompare > 0){
        return "It's cheaper pay the Streaming Platforms"
    } else {
        return "It's better go to the Cinema"
    };
};


console.log(compareStreaming());
console.log(streaming);