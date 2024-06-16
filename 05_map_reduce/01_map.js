const coding = ["javascript","c","cpp","python"]

const values = coding.forEach((item) => {
    //  console.log(item);
    return item;
});

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//         return num>4;
// })

//Another method
// const newNums = []

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);


const books = [
    {title: "book1", genre: "Fiction", publish: 1981, edition: 2004},
    {title: "book2", genre: "Non-Fiction", publish: 1984, edition: 2003},
    {title: "book3", genre: "Horror", publish: 1982, edition: 2005},
    {title: "book4", genre: "Fiction", publish: 1985, edition: 2007},
    {title: "book5", genre: "Non-Fiction", publish: 1988, edition: 2006},
    {title: "book6", genre: "Horror", publish: 1989, edition: 2009},
];

// const mybooks = books.filter((book) => {
//         return book.genre === "Horror"
// })


const mybooks = books.filter((book) => {
    return book.publish >= 1985
})

console.log(mybooks);

