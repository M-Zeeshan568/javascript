
const arry = [1, 2,3,4,5]

// arry.push(7); 
// arry.pop();

// arry.unshift(4);
// arry.shift();

// console.log(arry.includes(9));
// console.log(arry.indexOf(9));

// const newArry = arry.join()

// console.log(arry);

// slice()
// splice()



const marvel_heros = ['thor', 'captain america', 'zeeshan']

const heros = ['akshay', 'govenda', 'heritak']

// marvel_heros.push(heros);
// const all_heros = marvel_heros.concat(heros);
const all_new_heros = [...marvel_heros, ...heros]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(all_new_heros);

const nestedArry =[1,2,3,[1,2,3],7,9,[4,5,6,[9,0,4]]]

// console.log(nestedArry.flat(Infinity));
// console.log(nestedArry);
// console.log(nestedArry.flat(3));


// console.log(Array.isArray('Zeeshan'));
// console.log(Array.from('Zeeshan'));
// console.log(Array.from({name: 'Zeeshan'}));



let value1 = 300
let value2 = 500
let value3 = 700

console.log(Array.of(value1, value2, value3));







