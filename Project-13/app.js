const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");

slides.forEach(function(slide,index){
   slide.style.transform = `translateX(${index * 100}%)`;
});

let counter = 0;
prev.addEventListener("click", function(){
    counter--;

    moveSlide(); 
});

next.addEventListener("click", function(){
    counter++;
     
    moveSlide();
});

function moveSlide()
{

    if(counter < 0)
    {
        counter = slides.length - 1;
    }  
    if(counter > (slides.length - 1))
    {
        counter = 0;
    } 

    // if(counter === (slides.length - 1) )
    // {
    //     prev.style.display = "block";
    //     next.style.display = "none";
    // }
    // if(counter === 0 )
    // {
    //     prev.style.display = "none";
    //     next.style.display = "block";   
    // }


    slides.forEach(function(slide){
        slide.style.left = `-${counter * 100}%`;
    });
}
// prev.style.display = "none";

