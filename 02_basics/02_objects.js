const obj1 = {
    name:"abhishek",
    age:23
}

obj1.greeting = function(){
    console.log("hello worlds")
}

obj1.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}

const newObj = Object.assign({},obj1,{city:"solapur"},{state:"maharashtra"})

// console.log(newObj);

const onlyKeysArr = Object.keys(newObj)
// console.log(onlyKeysArr);

const onlyValuesArr = Object.values(newObj)
// console.log(onlyValuesArr);

const entriesObj = Object.entries(newObj)

console.log(entriesObj)
