
const user = {
    userName: 'Zeeshan',
    price: '999',
    objectFunction: function(){
        console.log(`user name is ${this.userName} and price is ${this.price}.`);
        // console.log(this);

    }
}
// console.log(this);
// user.objectFunction();


function testingThisMethod(){
    let userName = 'Javed'
    console.log(this.userName);
}

// testingThisMethod();


// ============Arrow-Function=============

const arrow = (a, b) =>{
    return a + b
}
console.log(arrow(3, 9));

const arrowMethod2 = (a, b) =>  a - b
console.log(arrowMethod2(3, 7));

const arrowMethod3 = (a, b) => (a + b)
console.log(arrowMethod3(89, 90));

const arrowObjectMethod = () => ({ name: 'Zeeshan Javed'})
console.log(arrowObjectMethod());


