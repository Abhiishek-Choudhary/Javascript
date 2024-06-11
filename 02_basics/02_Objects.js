//singleton user
const tinderUser = new Object ();
//normal object
//const tinderUser = {}

tinderUser.name="Abhishek";
tinderUser.id="1234";
tinderUser.password="Abh123"
// console.log(tinderUser);

const newUser = {
    name: "Abhishek",
    firstname: {
        name: "Abhishek",
        id: "123",
        lastname: {
          lastname: "Choudhary"
        }
    }
}

// console.log(newUser.firstname.lastname.lastname);

//merge 2 objects 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

const obj3 = {...obj1,...obj2};
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

const course = {
    name: "js in hindi",
    price: "10000",
    couserInstructor: "Abhishek"
}

const {couserInstructor: instructor} = course

console.log(instructor);