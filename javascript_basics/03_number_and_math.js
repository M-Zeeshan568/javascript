const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.53423

console.log(otherNumber.toPrecision(4));



//      Math_Method

console.log(Math);
console.log(Math.floor(4.7));
console.log(Math.min(4.7, 3, 3, 5));
console.log(Math.max(4.7, 3, 3, 5));
console.log(Math.ceil(4.7));
console.log(Math.round(4.7));
console.log(Math.abs(-4.7));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


