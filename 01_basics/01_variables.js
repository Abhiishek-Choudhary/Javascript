const accountId = 12324
let accountEmail = "akc534@gmail.com"
var accountPassword = "123423"
accountCity = "Delhi"

// accountId = 2 cannot be modified

accountEmail = "h1@gmail.com"
accountPassword = "1234"
accountCity = "Raipur"

/* 
prefer not to use var because of the issue in block scope and functional scope
*/

console.log(accountId);

console.log([accountId,accountEmail,accountPassword,accountCity]);