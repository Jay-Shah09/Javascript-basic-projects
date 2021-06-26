const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const innerMainContent = document.querySelector(".inner-main-content");
const mainContent = document.querySelector(".main-content");
const img = document.querySelector(".img");

modalBtn.addEventListener("click",function(){
    innerMainContent.style.visibility = "visible";
    mainContent.style.backgroundColor = "skyblue";
    img.style.opacity = "0.6";
})
closeBtn.addEventListener("click",function(){
    innerMainContent.style.visibility = "hidden";
    mainContent.style.backgroundColor = "white";
    img.style.opacity = "1";
})