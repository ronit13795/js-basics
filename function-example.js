// declare function way 1
function f1() {

}
// declare function way 2
let f2 = function () {

}


function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('ronit', 'cohen')

function multiple(number, number2) {
    return number * number2
}

let answer1 = multiple(5, 9);
let answer2 = multiple(2, 4);
console.log(answer1 + ' ' + answer2);

function minus(number1, number2) {
    return (number1 - number2)

}
let answer = minus(3, 2);
console.log(answer);


function strings(text1, text2) {
    return (text1 + " " + text2)
}
let sentence = strings('aba', 'ama');
console.log(sentence);



console.log(31 % 2); // modulu example

// check if number is odd - return true for odd otherwise return false
function isOdd(number) {
    return !!(number % 2)
}

console.log(isOdd(17))













