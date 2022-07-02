// let arr = [1, 2, 3, 4, 5, 6]


// arr.forEach(val => {
//     console.log(val);
// })


// Timers setTimeout(cb, MS), setInterval(cb, MS)

// for (let i = 0; i < 99999; i++) {
//     console.log(i);

// }

// setTimeout(() => {
//     console.log('finished to wait');
// }, 5000)

// console.log('hi!!!');


// setInterval(() => {
//     console.log('2 seconds passed');
// }, 500);


// for (let i = 0; i < 99999; i++) {
//     console.log(i); 

// }








// // WITH CALLBACK

// setTimeout(() => {
//     console.log(`finished get your account`);
//     // code ...
//     //     // code ...
//     // 
//     // code ...
//     setTimeout(() => {
//         // code ...
//         // 
//         // code ...
//         console.log(`finished get your bank amount`);
//         setTimeout(() => {
//             // code ...
//             // 
//             // code ...
//             // 
//             // code ...
//             console.log(`finished register to the service`);
//         }, 4000);
//     }, 3000);
// }, 2000);








const promiseSetTimeout = (timeout) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeout);
    })
}



promiseSetTimeout(2000).then(() => {
    console.log(`finished get your account`);

    promiseSetTimeout(3000).then(() => {
        console.log(`finished get your bank amount`);

        promiseSetTimeout(4000).then(() => {
            console.log(`finished register to the service`);
        })
    })
})




