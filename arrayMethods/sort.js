let a = [50, 20, 30, 15, 1, 5, 100, 17, 2, 90];

let b = [...a]

b.sort((a, b) => { // acending
    if (a % 2 === 0 && b % 2 === 1) {
        return -1; // lower then 0 then sort b before a
    }
    if (a % 2 === 1 && b % 2 === 0) {
        return 1; // greater then 0 then sort a before b
    }
    // a must be equal to b
    return 0;
})

console.log(b);


// // "dmac"
// let a = 'dmac'
// let array = a.split("m").join("++++++++")

// let charsArray = ['d', 'm', 'a', 'c']


// console.log(array);











//  daniel solution without sort
// let evenArray = a.map((value) => {
//     if (value % 2 === 0) {
//         return value
//     }
// }).filter((value) => value)



// let oddArray = a.map((value) => {
//     if (value % 2 === 1) {
//         return value
//     }
// }).filter((value) => value)



// let newArray = [...evenArray, ...oddArray]

// console.log(newArray);