const sym = Symbol("key")

const JsUser  = {
    name: "Abhishek",
    age: 18,
    [sym]: "mysymbol",
    password: "Abhishek1",
    loggedIn: true
}

console.log(JsUser.name);
console.log(typeof JsUser[sym]);
