
// n times
{  /*CODE*/ }

// loop must have stop condition

// example with while 1 - 100

// let i = 1;

// while (i < 100) {

//     if (i % 2 === 0) {
//         console.log(i);
//     }

//     i++
// }


// example with for

// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




// let amazonProducts = [
//     { name: 'toy1', price: 1000 },
//     { name: 'toy2', price: 500 },
//     { name: 'toy3', price: 200 },
//     { name: 'toy4', price: 1400 },
//     { name: 'toy5', price: 35 },
//     { name: 'toy6', price: 86 },
//     { name: 'toy7', price: 350 },
//     { name: 'toy8', price: 259 }
// ]

// let buyMeProducts = []

// for (let i = 0; i < amazonProducts.length; i++) {

//     let buymePrice = amazonProducts[i].price * 1.3;
//     let buymeName = amazonProducts[i].name + '- buyMe';

//     let buymeObj = { name: buymeName, price: buymePrice }

//     buyMeProducts.push(buymeObj)

// }

// console.log(buyMeProducts);





// 153

function culculete(number) {
    for (let i = 1; i <= number; i++) {
        if (i < 10) {
            if (i ** 3 === i) {
                console.log(i)
            }
        }
        if (i < 100 && i > 9) {

            const unit = i % 10;
            const dozens = Math.floor(i / 10);

            if (unit ** 3 + dozens ** 3 === i) {
                console.log(i)
            }
        }
        if (i > 99 && i < 1000) {

            const unit = i % 10;
            const dozens = Math.floor(i / 10) % 10;
            const hundreds = Math.floor(i / 100);

            if (unit ** 3 + dozens ** 3 + hundreds ** 3 === i) {
                console.log(i);
            }
        }
    }

}
culculete(999)





