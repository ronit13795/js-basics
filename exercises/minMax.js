let arrayFromRange = (min, max) => {
    let arr = []
    for (let i = 0; i <= max - min; i++) {
        arr.push(min + i)
    }
    return arr
}




// let arrayFromRange = (min, max) => {
//     let arr = []
//     for (let i = min; i <= max; i++) {
//         arr.push(i)
//     }
//     return arr
// }


const numbers = arrayFromRange(-10, -4)
console.log(numbers);