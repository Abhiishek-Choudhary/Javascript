var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(c);

function one() {
    const username = "Abhishek"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()
     
}

one()

function addone(num) {
    return num+1;
}

const addTwo = function (num){
     return num+2;
}

console.log(addTwo(8));