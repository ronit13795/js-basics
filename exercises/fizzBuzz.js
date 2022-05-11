let output = fizzBuzz('hi')
console.log(output)

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN
    }
    if (input % 5 === 0 && input % 3 === 0) {
        return 'Fizzbuzz'
    }
    if (input % 3 === 0) {
        return 'Fizz'
    }
    if (input % 5 === 0) {
        return 'Bazz'
    }
    return input
}




