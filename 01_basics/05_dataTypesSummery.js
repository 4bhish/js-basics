// dataTypes

// String,Number,Boolean,null,Undefined,Symbol ,BigInt

const uniqueId = Symbol(124)
const anotherUniqueId = Symbol(124)

// console.log(uniqueId === anotherUniqueId);

const bigIntExample = 23532222222222222222222222222222222n;

// console.log(typeof bigIntExample);

const myFunc = function(){
    console.log('Abhishek');
}

console.log(typeof myFunc)

let arr = ['helo','bitch','world']

// console.log(typeof arr);

// Stack and Heap Memory

// Stack (primitive)
let userId = 1245;
let anotherId = userId;

anotherId = 223
// console.log(userId);

// Heap (Non-Primitive)

let userOne = {
    name:'satyapal',
    age:23
}

let userTwo = userOne
userTwo.name = "abhishek";

console.log(userOne);