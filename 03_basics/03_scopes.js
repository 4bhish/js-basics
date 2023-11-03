

if(true){
    let a = 10;
    const b = 100;
    var c = 1000;
}

// console.log(c);

function parentFunc(){
    const username ='abhishek';

    function childFunc(){
        const name = 'yoabhish';
        console.log(username)
    }

    console.log(name)

    childFunc()
}


// Mini Hoisting


function addtwonums(a,b){
    console.log(a + b)
}

// addTwoNums(3,7)

const addTwoNums = function addtwoNums(a,b){
    console.log(a+b)
}


