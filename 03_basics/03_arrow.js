const user ={
    userName : 'Abhishek',
    age:22,
    welcomeMsg : function (){
        console.log(`Welcome Mr. ${this.userName}`)
    }
}

user.welcomeMsg()