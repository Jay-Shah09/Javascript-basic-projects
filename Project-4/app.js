const navBtn = document.getElementById("nav-btn");
const navLinks = document.querySelector(".nav-links");
const toggle = document.getElementById("toggle-logo");

toggle.addEventListener("click",function(e){
    if(toggle.className === "fas fa-times")
    {
        navLinks.style.display = "none";
        toggle.className = "fas fa-bars";
        toggle.style.color = "skyblue";
    }
    else
    {
        navLinks.style.display = "inherit";
        toggle.className = "fas fa-times";
        toggle.style.color = "red";
    }
});

             /*  DO AGAIN  */