

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let interval;

const startChangingcolor = function(){
    let bgChange = function(){ document.body.style.backgroundColor = randomColor() }
    if(!interval){
    interval = setInterval(bgChange, 1000)
    }
}

const stopChangingcolor = function(){
    clearInterval(interval)
    interval = null
}

document.querySelector("#start").addEventListener('click', startChangingcolor)

document.querySelector("#stop").addEventListener('click', stopChangingcolor)
