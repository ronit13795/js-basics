let numbers = [1, 3, 4, '']


function evenNumbers(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            if (array[i] % 2 === 0) {
                counter++
            }
        }
    }
    return counter
}

let result = evenNumbers(numbers)
console.log(result);


