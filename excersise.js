// // let arr = [1, 2, 3]
// // let arr2 = [4, 5, 6]
// // let arrCloned = [...arr2, ...arr, ...arr2, ...arr]
// // console.log(arrCloned);


// // let p = { name: "daniel" };
// // let z = { name: "moshe" };
// // let c = { age: 30, lala: "papa" }
// // let q = { ...p, ...z, ...c }
// // console.log(q);


// let arr = [1, 2, 3]

// let arr2 = [4, 5, 6]

// let arr3 = [[...arr]]



// arr3[0][0] = 2

// console.log(arr);
// console.log(arr3);

let a = [1, 2, 3, 4]

let removedElements = a.splice(1, 1, 10)

console.log(removedElements);
console.log(a);