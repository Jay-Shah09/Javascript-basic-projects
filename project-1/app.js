const btn = document.getElementById("button");
const color = document.querySelector(".color");
const mains = document.querySelector(".main");

const colors = ["Red","Green","Blue","#F15025","rgb(133,122,200)"];

btn.addEventListener("click",function(){
        
    const randomNumber = Math.floor(Math.random()*5);
    mains.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});