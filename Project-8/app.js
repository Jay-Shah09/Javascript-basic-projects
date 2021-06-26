/* const switchBtn = document.querySelector(".switch-btn");
const switchSpan = document.querySelector(".switch");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");


play.addEventListener("click",function(){
    switchSpan.style.transform = "translateX(0%)";
    switchSpan.style.transition = "0.3s";
});
pause.addEventListener("click",function(){
    switchSpan.style.transform = "translateX(100%)";
    switchSpan.style.transition = "0.3s";
});  */

const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

switchBtn.addEventListener("click",function(){
    if(switchBtn.classList.contains("slide"))
    {
        switchBtn.classList.remove("slide");
        video.play();
    }
    else
    {
        switchBtn.classList.add("slide");
        video.pause();
    }
});