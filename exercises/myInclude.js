// write array.include() function by your own


const numbers = [1, 2, 3, 4]

const includes = (array, searchElements) => {
    let num = false

    array.forEach(value => {
        if (value === searchElements) {
            num = true
        }
    })

    return num
}



const includes1 = (array, searchElements) => {
    return !!array.filter((value) => value === searchElements).length
}


console.log(includes(numbers, 5));









