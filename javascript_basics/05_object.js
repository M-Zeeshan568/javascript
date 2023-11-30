const mySym = Symbol('key1')

const objectUser = {

    name: 'Zeeshan',
    age: 23,
    [mySym] : 'mykey1',
    email: 'zeeshan@gmail.com',
    'location': 'fsd'
}


// console.log(objectUser.age);
// console.log(objectUser[mySym]);
// console.log(objectUser['location']);

objectUser.age = 20
// Object.freeze(objectUser);
objectUser.email = 'javaid@gmail.com'
// console.log(objectUser);


objectUser.addfunc = function(){
    console.log('Hello world.');
}

objectUser.addfuncTwo = function(){
    console.log(`Hello world. ${this.name}`);
} 

// console.log(objectUser);
// console.log(objectUser.addfunc());
// console.log(objectUser.addfuncTwo());



// Singleton => using by constructor method

const singletonObject = new Object();

singletonObject.id = 1;
singletonObject.name = 'Zeeshan Javed';

// console.log(singletonObject);


const nestedObject = {
    name: 'Zeeshan',
    age: 23,
    data: {
        location: 'wertsf wrew',
        city: 'fsd',
        personalInfo: {
            family: 'Huge family',
            
        }
    }
}


// console.log(nestedObject);
// console.log(nestedObject.data.location);
// console.log(nestedObject.data.personalInfo);

 
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
const obj3 = {5: 'a', 6: 'b'}


const result = Object.assign(obj1, obj2)
const result2 = Object.assign({}, obj1, obj2, obj3)
                            //   4:12 time in hitesh video
const result3 = {...obj1, ...obj2, ...obj3}                            

// console.table([result, result2, result3]);
// console.log(result);
// console.log(result2);
// console.log(result3);

const arrayOfObject = [
    {name: 'a', email: 'b@gmail.com'},
    {name: 'a', email: 'b'},
    {name: 'a', email: 'b'},
    {name: 'a', email: 'b'},
    {name: 'a', email: 'b'},

]

// console.log(arrayOfObject);
// console.log(arrayOfObject[1].email);


const obj4 = {1: 'a', 2: 'b'}

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

console.log(obj4.hasOwnProperty('email'));











