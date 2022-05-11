function countTruthy(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            counter++
        }
    }
    return counter

}

let b = countTruthy([1, 2, 3])
console.log(b)
