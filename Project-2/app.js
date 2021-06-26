/*
const decBtn = document.querySelector(".dec-btn");
const incBtn = document.querySelector(".inc-btn");
const resetBtn = document.querySelector(".reset-btn");
const counter = document.querySelector(".counter");

let counterVar=0;
decBtn.addEventListener("click",function(){
    counterVar--;
    if(counterVar<0)
    {
        counter.style.color = "red";
    }
    else if(counterVar==0)
    {
        counter.style.color = "black";
    }
    counter.textContent = `${counterVar}`;
});
incBtn.addEventListener("click",function(){
    counterVar++;
    if(counterVar>0)
    {
        counter.style.color = "green";
    }
    else if(counterVar==0)
    {
        counter.style.color = "black";
    }
    counter.textContent = `${counterVar}`;
});
resetBtn.addEventListener("click",function(){
    counterVar=0;
    counter.textContent = `${counterVar}`;
    counter.style.color = "black";
});   */



const btns = document.querySelectorAll(".btn");
const counter = document.querySelector('.counter');

let counterVar=0;
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const curr = e.currentTarget.classList;
        
        if(curr.contains("dec-btn"))
        {
            counterVar--;
        }
        else if(curr.contains("inc-btn"))
        {
            counterVar++;
        }
        else
        {
            counterVar=0;
        }
        if(counterVar > 0)
        {
            counter.style.color = "green";
        }
        else if(counterVar < 0)
        {
            counter.style.color = "red";
        }
        else
        {
            counter.style.color = "black";
        }
        counter.textContent = counterVar;
    });
   
});