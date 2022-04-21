
console.log(false || 0 || NaN || 'daniel'); // will look for the first truethy and if not exist will take the last one

console.log(true && 1 && 2 && false && 1); // will look for the first falsy and if not exist will take the last one 
