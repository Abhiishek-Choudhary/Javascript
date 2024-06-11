const user = {
    username: "Abhishek",
    price: 100,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the program`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai() {
//     let username = "Abhishek";
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "Abhishek";
//     console.log(this.username);
// }

// chai()

//arrow function with explicit return 
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

//arrow function can be used as: Implicit return
// const addTwo = (num1,num2) => (num1+num2);

const addTwo = (num1,num2) => ({username: "Abhishek"});

console.log(addTwo(2,9));

