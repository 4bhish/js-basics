const user ={
    userName : 'Abhishek',
    age:22,
    welcomeMsg : function (){
        console.log(`Welcome Mr. ${userName}`)
    }
}

// user.welcomeMsg()



const printMyName = () => {
    console.log(this)
}

printMyName()
