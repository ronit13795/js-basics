
function high(value) {
    const meter = Math.floor(value / 100)
    const cm = value - meter * 100;
    return meter + ' m ' + cm + ' cm'
}

const highMeter = high(183)
console.log(highMeter)


function operators(x, y) {
    const a = x + y;
    const b = x - y;
    const c = x * y;
    return (a + ', ' + b + ', ' + c)
}

console.log(operators(5, 6))


function triangular(rib1, rib2) {
    return rib1 * rib2 / 2
}

const result = triangular(5, 6)
console.log(result)


function salary(HourlyWage, workHours) {
    return HourlyWage * workHours * 0.66
}
const neto = salary(60, 186)
console.log(neto)


function distance(speed, hours) {
    return speed * hours
}

function calcDistance(speed1, time1, speed2, time2) {
    return distance(speed1, time1) + distance(speed2, time2);
}

console.log(calcDistance(50, 5, 60, 5))



function products(amountOfYogurts, quantityInCartons) {
    if (amountOfYogurts % quantityInCartons === 0) {
        return (amountOfYogurts / quantityInCartons + ' ' + 'ארגזים')
    }
    let roundof = Math.floor(amountOfYogurts / quantityInCartons);
    return roundof + '  box  ' + (amountOfYogurts - (roundof * quantityInCartons)) + '   yogurtes  on  the  last  box'

}

console.log(products(100, 12))



function dProducts(cups, packCapacity) {
    const fullPacks = Math.floor(cups / packCapacity);
    const lastPackAmount = cups - fullPacks * packCapacity

    return 'full packs = ' + fullPacks + ' last pack amount = ' + lastPackAmount;

}

console.log(dProducts(100, 50));

