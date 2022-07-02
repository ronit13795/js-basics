const getMax = (array) => {
    if (array.length === 0) {
        return undefined
    }
    let maxNum = array[0]
    array.forEach((value) => {
        if (value > maxNum) {
            maxNum = value
        }
    });
    return maxNum
}

console.log(getMax([-10, 0, 8]))