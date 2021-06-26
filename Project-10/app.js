 const btns = document.querySelectorAll(".btn");
const titleText = document.querySelector(".title-text");
const paraText = document.querySelector(".para-text");
const active = document.querySelector(".active");

const tabInfo = [
    {button:"History",para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, necessitatibus amet? Voluptatum voluptate accusamus dolores repellendus, iure obcaecati quis autem numquam quisquam laborum esse tempora, cupiditate eveniet, exercitationem dolorem earum eaque fuga excepturi dicta soluta est error aut? Vero quidem officia quae sit cum veritatis, est natus necessitatibus, nemo temporibus tempora excepturi id veniam quo, debitis officiis consequatur. Iure, illum."},
    {button:"Vision",para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, necessitatibus amet? Voluptatum voluptate accusamus dolores repellendus, iure obcaecati quis autem numquam quisquam laborum esse tempora, cupiditate eveniet, exercitationem dolorem earum eaque fuga excepturi dicta soluta est error aut? Vero quidem officia quae sit cum veritatis, est natus necessitatibus, nemo temporibus tempora excepturi id veniam quo, debitis officiis consequatur. Iure, illum.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit."},
    {button:"Goals",para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, necessitatibus amet? Voluptatum voluptate accusamus dolores repellendus, iure obcaecati quis autem numquam quisquam laborum esse tempora, cupiditate eveniet, exercitationem dolorem earum eaque fuga excepturi dicta soluta est error aut? Vero quidem officia quae sit cum veritatis, est natus necessitatibus, nemo temporibus tempora."}
];

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        active.style.display = "block";
        const btnName = e.currentTarget.dataset.id;
        titleText.textContent = btnName;
        
       tabInfo.forEach(function(item){

            if(btnName === item.button)
            {
               paraText.textContent = item.para;
            }
        });
    });
});  

// const btns = document.querySelectorAll(".btn");
// const mainContainer = document.querySelector(".main-container");

// mainContainer.addEventListener("click", function(e){
//      const jay = e.target.dataset.id;
//      if(jay)
//      {
         
//      }
// });

