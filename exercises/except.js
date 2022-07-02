const countOccurrences = (array, searchElement) => {
    let counter = 0
    for (let value of array) {
        if (value === searchElement) {
            counter += 1
        }



    }
    return counter
}

console.log(countOccurrences([1, 2, 3, 1], 1))