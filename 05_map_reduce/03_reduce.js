const myNum = [1,2,3]

// const mytot = myNum.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and curr: ${currval}`); 
//     return acc+currval;
// },0)

// const mytot = myNum.reduce((acc,curr) => acc+curr , 0)

// console.log(mytot);

shoppingCart = [
    {
        itemname: "javascript Course",
        price: 2999
    },
    {
        itemname: "Mobile Dev Course",
        price: 4999
    },
    {
        itemname: "Fullstack web dev Course",
        price: 3999
    },
    {
        itemname: "Python Course",
        price: 1999
    },
];

const value = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(value);