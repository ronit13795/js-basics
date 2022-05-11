function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) { console.log(i + " EVEN") };
        if (i % 2 !== 0) { console.log(i + ' ODD') }

    }
}
showNumbers(1000)




// function showNumbers(limit) {
//     let result = '';
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) { result = result + ' ' + i + " EVEN" };
//         if (i % 2 !== 0) { result = result + ' ' + i + " ODD" };

//     }
//     return result
// }
// console.log(showNumbers(7));