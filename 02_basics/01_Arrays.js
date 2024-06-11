const arr = [1,2,3,4];

const arr2 = ["abhishek","hitesh","soni"]

const arr3 = new Array(1,2,3,4);
// console.log(arr3);

const newArr = arr.join();

// console.log(arr);
// console.log(typeof newArr);


console.log(arr);
console.log("A ", arr.slice(1,2));

//changes the original array
console.log("B ", arr.splice(1,2));
console.log(arr);