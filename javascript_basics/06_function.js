

function meet(){
    console.log('Hello');
}

// meet()
// const result = meet();
// console.log(result);

function meet2(number1 = 5, number2 = 7){
    console.log('Hi...')
    return number1 + number2
    console.log('Hi...')
}

// const result2 = meet2(3, 7)
// console.log(result2);

function meet3(username){
    return `${username}, Please login`
}
// meet3('Javed')
// console.log(meet3('javed'));
const result4 = meet3('Bilal')
// console.log(result4);



function calculateUserPrice(val1, val2, ...num){
                        //  ... is called reset operator
    return num
}

// console.log(calculateUserPrice(100, 300, 700, 900, 55, 23));



 const user = {
    name: 'Zeeshan',
    price: '9900'
 }

 function handleObject(userData){
    return `User name is ${userData.name} and User price is ${userData.price}.`
 }

 const userRestul = handleObject(user);
// console.log(userRestul);

const userNewArray = [300, 700, 500]

function handleArray(getArrayValues){
    return getArrayValues[2]
}
const arrayRestul = handleArray(userNewArray);
console.log(arrayRestul);