const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.querySelector(".img");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const surprise = document.querySelector(".surprise-btn");

const reviews = [
    {name: "isha shah",
     job: "b-pharm",
     img: "Images/portfolio-1.jpeg",
     info: "I Isha Shah hfjudu fhuuhrwiov vruhvefh erkgvhefgnvte gvetigjjf jjirjfb jf fjffr hi qosidt o bgbgijv hhiqvxal vjeo gujbbe biebf viwge"},
     {name: "sherlock holmes",
     job: "detective",
     img: "Images/portfolio-2.jpeg",
     info: "I Sherlock Holmes hfjudu fhuuhrwiov vruhvefh erkgvhefgnvte gvetigjjf jjirjfb jf fjffr hi qosidt o bgbgijv hhiqvxal vjeo gujbbe biebf viwge"},
     {name: "harry",
     job: "web-designer",
     img: "Images/portfolio-3.jpeg",
     info: "I Harry hfjudu fhuuhrwiov vruhvefh erkgvhefgnvte gvetigjjf jjirjfb jf fjffr hi qosidt o bgbgijv hhiqvxal vjeo gujbbe biebf viwge"},
     {name: "peter",
     job: "android-developer",
     img: "Images/portfolio-4.jpeg",
     info: "I Peter hfjudu fhuuhrwiov vruhvefh erkgvhefgnvte gvetigjjf jjirjfb jf fjffr hi qosidt o bgbgijv hhiqvxal vjeo gujbbe biebf viwge"}
];

function changePage(person)
{
   name.textContent = reviews[person].name;
   job.textContent = reviews[person].job;
   info.textContent = reviews[person].info;
   img.src = reviews[person].img;
}

let currVar=0;

prev.addEventListener("click",function(){
   currVar--;

   if(currVar < 0)
   {
      currVar=3;
   }
   changePage(currVar);
});
next.addEventListener("click",function(){
   currVar++;

   if(currVar > 3)
   {
      currVar=0;
   }
   changePage(currVar);
});
surprise.addEventListener("click",function(){
   currVar = Math.floor(Math.random()*3);
   changePage(currVar);
})