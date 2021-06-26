/* -------------   Selecting Items   -------------- */
const input = document.querySelector(".input-item");
const submitBtn = document.querySelector(".submit-btn");
const form = document.querySelector(".form");
const clearBtn = document.querySelector(".clear-btn");
const alert = document.querySelector(".alert");
const groceryContainer = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");

/* edit option */ 
let editElement;
let editFlag = false;
let editId = "";

let c=0;


/* -------------   Functions   -------------- */
form.addEventListener("submit", function(e){
    e.preventDefault();
    let value = input.value;
    const id = new Date().getTime().toString();  // It is used to give unique id to every added item.

    if(value!="" && editFlag==false)
    {
        const newElement = document.createElement("div");
        newElement.classList.add("grocery-item");
        const atrr = document.createAttribute("data-id");
        atrr.value = id;
        newElement.setAttributeNode(atrr);
        newElement.innerHTML = `<p class="item-name">${value}</p>
        <div class=btn-container>
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`;
        const deleteBtn = newElement.querySelector(".delete-btn");
        const editBtn = newElement.querySelector(".edit-btn");
        deleteBtn.addEventListener("click",deleteItem);
        editBtn.addEventListener("click",editItem);

        groceryList.appendChild(newElement);
        groceryContainer.classList.add("show-container");
        alertFunc("Item Is Added","success");
        c++;
        addToLocalStorage(id,value);
        input.value = "";
    }
    else if(value!="" && editFlag==true)
    {
        editElement.textContent = input.value;
        editLocalStorage(editId,value);
        input.value=""
        submitBtn.textContent = "submit";
        editFlag = false;   
    }
    else
    {
        alertFunc("Please Enter The Item","danger");
    }
});
function alertFunc(text,type)
{
    alert.textContent = text;
    alert.classList.add(type);

    setTimeout(function(){
    alert.textContent = "";
    alert.classList.remove(type);
    },1500);
}

clearBtn.addEventListener("click", function(e){
    const allElements = document.querySelectorAll(".grocery-item");

    allElements.forEach(function(element){
        groceryList.removeChild(element);
    });
    groceryContainer.classList.remove("show-container");
    alertFunc("All Items Deleted","danger");
    localStorage.removeItem("items");  
    input.value="";
    editFlag = false;
});

function deleteItem(e)
{
    c--;
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    groceryList.removeChild(element);
    if(c==0)
    {
        groceryContainer.classList.remove("show-container");
    }
    alertFunc("Item Deleted","danger");
    removeFromLocalStorage(id);
    input.value = "";
    editFlag = false;
}

function editItem(e)
{
    const element = e.currentTarget.parentElement.parentElement;
    editId = element.dataset.id;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    input.value = editElement.textContent;
    submitBtn.textContent = "edit";
    editFlag = true;
}

/* -------------   Local Storage   -------------- */
function addToLocalStorage(id,value)
{
    
    if(localStorage.getItem("items"))
    {
        list = JSON.parse(localStorage.getItem("items"))
    }
    else  
    {
        list = [];
    }
    const grocery = {id: id, value: value};
    list.push(grocery);
    localStorage.setItem("items", JSON.stringify(list));
}

function removeFromLocalStorage(id)
{
    list = JSON.parse(localStorage.getItem("items"));

    const items = list.filter(function(item){
        if(item.id !== id)
        {
            return item;
        }
    });
    localStorage.setItem("items", JSON.stringify(items));
}

function editLocalStorage(id,value)
{
    list = JSON.parse(localStorage.getItem("items"));

    const items = list.map(function(item){
        if(item.id === id)
        {
            item.value = input.value;
        }
        return item;
    });
    localStorage.setItem("items",JSON.stringify(items));
}


/* -------------   Set Items   -------------- */
window.addEventListener("DOMContentLoaded", function(){
    list = JSON.parse(localStorage.getItem("items"));

    list.forEach(function(item){

    const newElement = document.createElement("div");
    newElement.classList.add("grocery-item");
    const atrr = document.createAttribute("data-id");
    atrr.value = item.id;
    newElement.setAttributeNode(atrr);
    newElement.innerHTML = `<p class="item-name">${item.value}</p>
    <div class=btn-container>
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
    </div>`;
    const deleteBtn = newElement.querySelector(".delete-btn");
    const editBtn = newElement.querySelector(".edit-btn");
    deleteBtn.addEventListener("click",deleteItem);
    editBtn.addEventListener("click",editItem);
    c++;
    groceryList.appendChild(newElement);
    });
    
    if(list.length > 0)
    {
        groceryContainer.classList.add("show-container");
    }
});