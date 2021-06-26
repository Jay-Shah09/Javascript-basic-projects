const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const color = document.querySelector(".color");
const btn = document.getElementById("button");
const main = document.querySelector(".main");

btn.addEventListener("click",function(){
   /* const r1 = Math.floor(Math.random()*15);
    const r2 = Math.floor(Math.random()*15);
    const r3 = Math.floor(Math.random()*15);
    const r4 = Math.floor(Math.random()*15);
    const r5 = Math.floor(Math.random()*15);
    const r6 = Math.floor(Math.random()*15);

    const hexColor = `#${colors[r1]}${colors[r2]}${colors[r3]}${colors[r4]}${colors[r5]}${colors[r6]}`; */

    let hexColor = "#";
    for(let i=0;i<6;i++)
    {
        hexColor = hexColor + colors[Math.floor(Math.random()*15)];
    }

    main.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    color.style.color = hexColor;
}); 