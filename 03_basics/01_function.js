// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    const result = number1+number2;
    return result;
    console.log("Abhishek");
}

const result = addTwoNumbers(2,3);

// console.log("Result: ",result);

function loggedIn(username){
    return `${username} just logged in`;
}

// console.log(loggedIn("Abhishek"));

//rest Operator

function calculatecartItems(...num1){
    return num1;
}

// console.log(calculatecartItems(200,300,400));

const user={
    username: "Abhishek",
    price: 100
}

function myUser(anyuser){
   return `username is ${anyuser.username} and price is ${anyuser.price}`;
}

console.log(myUser(user));