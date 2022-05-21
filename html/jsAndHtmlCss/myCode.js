const startButton = document.getElementById('start')
const userChoose = document.getElementById('chosenNumber')
const randomNumberH2 = document.getElementById('randomNumber')
const resultH1 = document.getElementById('result')
const counter = document.getElementById("counter")
let attempts = 0

startButton.addEventListener('click', () => {
    const userInput = userChoose.value;
    const randomNumber = Math.floor(Math.random() * 10) + 1
    attempts += 1
    randomNumberH2.innerHTML = randomNumber


    if (randomNumber === Number(userInput)) {
        resultH1.style.color = 'green'
        resultH1.innerHTML = 'you win'
        attempts = 1
        counter.innerHTML = attempts
    } else {
        resultH1.style.color = 'red'
        resultH1.innerHTML = 'you lose'
        counter.innerHTML = attempts
    }

})



userChoose.addEventListener('dblclick', () => {
    console.log(`input clicked!`);
})