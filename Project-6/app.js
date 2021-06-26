const btns = document.querySelectorAll(".btn");

let currVar=0;
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        if(e.currentTarget.classList.contains("plus-btn"))
        {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "inline";
            e.currentTarget.parentElement.parentElement.nextElementSibling.style.display = "block";
        }
        else
        {
            e.currentTarget.style.display = "none";
            e.currentTarget.previousElementSibling.style.display = "inline";
            e.currentTarget.parentElement.parentElement.nextElementSibling.style.display = "none";
        }
    });
});

             /*   DO AGAIN   */