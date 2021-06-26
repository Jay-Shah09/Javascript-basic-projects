const menuCard = [
    {name: "buttermilk pancakes",price:"$15",category: "breakfast"},
    {name: "dinner double",price:"$20", category: "lunch"},
    {name: "american chopsy",price:"$45", category: "lunch"},
    {name: "cheese sandwich",price:"$10", category: "shakes"},
    {name: "our special",price:"$35", category: "breakfast"},
    {name: "thick shake",price:"$25", category: "shakes"},
    {name: "chinese sizler",price:"$50", category: "breakfast"},
    {name: "stake dine",price:"$50", category: "dinner"},
    {name: "maxican platter",price:"$45", category: "lunch"}
];

const mainContainer = document.querySelector(".main-container");
const buttons = document.querySelector(".buttons");

window.addEventListener("DOMContentLoaded",function(){
    display(menuCard);
    
    const categoryList = menuCard.reduce(function(category,item){
        if(!category.includes(item.category))
        {
            category.push(item.category);
        }
        return category;
    },["all"]);
    
    const Buttons = categoryList.map(function(button){
        return ` <button class="filter-btn" data-hmm=${button}>${button}</button>`
    });
    // console.log(Buttons);
    // console.log(Buttons.join(""));
    buttons.innerHTML = Buttons.join("");
    
    const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const btnDataset = e.currentTarget.dataset.hmm;
        
        const items = menuCard.filter(function(item){
            if(item.category === btnDataset)
            {
                return item;
            }
        });
        if(btnDataset === "all")
        {
            display(menuCard);
        }
        else
        {
            display(items);
        }
    });
});

});


function display(menu)
{
    let items = menu.map(function(item){
        return ` <div class="item">
        <div class="img-container">
        <img src="portfolio-3.jpeg" class="img"/>
        </div>
        <div class="item-info">
        <div class="item-info-header">
        <h4 id="name">${item.name}</h4>
        <h4 id="price">${item.price}</h4>
        </div>
        <div class="underline-2"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aspernatur autem illo eum perspiciatis molestias optio reiciendis consequuntur commodi fugiat?</p>
        </div>
        </div>`
    });
    mainContainer.innerHTML = items.join("");
}


