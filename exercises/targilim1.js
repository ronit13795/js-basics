let squerSize = radius(10)

function radius(value) {
    return value * 3.14 + ' cm'
}

console.log(squerSize)


function average(a, b) {
    return (a + b) / 2
}

console.log(average(5, 4))


function grade(x, y) {
    let m = x * 0.8 + y * 0.2
    return m

}

let result = grade(100, 80)
console.log(result)


let time = outcome(10, 200)


function outcome(speed, distance) {
    let hour = distance / speed
    const minutes = hour * 60

    return hour + ' ' + 'hour' + '  ' + minutes + ' ' + 'minutes'
}


console.log(time)