const array = [1,2,3,4,5]

//for loop
for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

const myarray = [
    {
        name: "Abhishek",
        id: 2345
    },
    {
        name: "Shivam",
        id: 1234
    },{
        name: "Abhinav",
        id: 9876
    }
]

// for (let i = 0; i < myarray.length; i++) {
//     const name = myarray[i].name
//     console.log(name);
// }

//for off loop

// for (const i of  array) {
//     console.log(array[i]);
// }

//for in loop

for (const key in array) {
    console.log(array[key]);
}
