// we can use await keyword only inside async function
// to say function is async - we need to add async keyword before its name:
// e.g. "async function yay(params) {return 1}"  or with arrow function: const fu = async () => { return 1 }
// when we specify function with async keyword - the function will always return a promise
// if we want to reject like in promises we have to throw error




const f1 = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`finished after ${ms}`);
            resolve(true)
        }, ms);
    })
}



// "async" "await"

async function fu() {
    const ans = await f1(500);
    const ans2 = await f1(500);
    // const ans3 = await f1(2000);

    console.log(ans, ans2);

    // with then
    // f1(2000)
    //     .then(() => {
    //         return f1(2000)
    //     }).then(() => {
    //         f1(2000)
    //     })
}

fu()
