


function div5(limit) {
    const DIVIDER = 5;
    let counterThree = 0;
    let divThree = Math.floor(limit / DIVIDER);
    for (let i = 0; i <= divThree; i++) {
        counterThree = counterThree + DIVIDER * i;
    }
    return counterThree;
}

function div3(limit) {
    const DIVIDER = 3;
    let counterThree = 0;
    let divThree = Math.floor(limit / DIVIDER);
    for (let i = 0; i <= divThree; i++) {
        counterThree = counterThree + DIVIDER * i;
    }
    return counterThree;
}

function sum(limit) {
    return div5(limit) + div3(limit)
}

console.log(sum(10));




// TODO - add with 5