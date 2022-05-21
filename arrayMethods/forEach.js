let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// option 1 - write the function inside the params
// count the odd numbers
let oddCounter = 0;

a.forEach((value) => {
    if (value % 2 === 1) {
        oddCounter += 1; // oddCounter = oddCounter + 1;
    }
})

console.log(oddCounter);

// option 2 - save the function to variable and send the variable


let evenCounter = 0

let funEven = (value) => { if (value % 2 === 0) { evenCounter += 1 } }

a.forEach(funEven)

console.log(evenCounter)