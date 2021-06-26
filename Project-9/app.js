// -------------    Set Date    ------------
const date = document.querySelector(".date");
date.textContent = new Date().getFullYear();



// -------------    Close links    ------------
const toggleBtn = document.querySelector(".toggle-btn");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function(){
    // linksContainer.classList.add("show-links");  -->> try this and feel the difference.
    // linksContainer.classList.toggle("show-links");

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0)
    {
        linksContainer.style.height = `${linksHeight}px`;
    }
    else
    {   
        linksContainer.style.height = 0;
    }
});


// -------------    Fixed navbar    ------------
const navbar = document.querySelector(".navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    // console.log(scrollHeight);
    const navbarHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navbarHeight)
    {
        navbar.classList.add("fixed-nav");
    }
    else
    {
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 700)
    {
        topLink.classList.add("show-top-link");
    }
    else
    {
        topLink.classList.remove("show-top-link");
    }
});


// -------------    Smooth scroll    -------------
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){
         e.preventDefault();  // -->> without doing so we can not scroll somewhere where we actually want to reach.

        // Navigate to specific spot.
        const id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id);
        const element = document.getElementById(id);
        console.log(element);

        // Calculate the heights
        const navbarHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navbarHeight;
        const fixedNav = navbar.classList.contains("fixed-nav");

        if(!fixedNav)
        {
            position = position - navbarHeight;
        }
        if(navbarHeight > 82)
        {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,          
            top: position,
        });

        linksContainer.style.height = 0;
    });
});
