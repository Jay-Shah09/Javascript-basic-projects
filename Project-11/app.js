const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const giveaway = document.querySelector(".giveaway");
const variables = document.querySelectorAll(".deadline-info h1");
const deadlineContainer = document.querySelector(".deadline-container");

// const futureDate = new Date(2021,2,4,20,0,0);  // setting future date in static way.
const todaysDate = new Date();
const todaysYear = todaysDate.getFullYear();
const todaysMonth = todaysDate.getMonth();
const todaysDay = todaysDate.getDate();

const futureDate = new Date(todaysYear,todaysMonth+1,todaysDay+5,20,0,0);
// By above way we can set future date dynamically.

const day = days[futureDate.getDay()];
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day} ${month} ${date} ${year}, ${hour}:${min}`;

function getRemainingTime()  // Here function is required to display reducing seconds on the browser.
{
/* future time in ms
1s = 1000ms
1m = 60s
1hr = 60m
1d = 24hr
*/

const today = new Date().getTime();
// console.log(today);
const futureTime = futureDate.getTime();
// console.log(futureTime);
const t = futureTime - today;
// console.log(t);

const dd = Math.floor(t/(24*60*60*1000));
const hh = Math.floor((t % (24*60*60*1000)) / (60*60*1000));
const mm = Math.floor((t % (60*60*1000)) / (60*1000));
const ss = Math.floor((t % (60*1000)) / 1000);

const arr = [dd,hh,mm,ss];

function hii(hello)
{
    if(hello < 10)
    {
        return `0${hello}`;
    }
    else
    {
        return hello;
    }
}

variables.forEach(function(variable,index){
    variable.textContent = hii(arr[index]);

    if(t<0)
    {
        clearInterval(countdown);
        deadlineContainer.style.display = "block";
        deadlineContainer.innerHTML = "<h3>Sorry, this giveaway has expired.</h3>";
    }
});
}

// Countdown
 const countdown = setInterval(getRemainingTime,1000);
 console.log(countdown);
//  getRemainingTime(); // uncomment this line observe the difference. Reason is setInterval() function which passes getRemainingTime as call back function and calls it after every 1000ms.
 

