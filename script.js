let keyyy=document.querySelector(".degree");
let uniq=document.querySelector(".uniq");
let uniq2=document.querySelector(".uniq2");

async function api(city){
    let key="0dae5ec1755e4a4d4532037ddceca4ee"
let url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
let res= await url.json();

console.log(Math.round(res.main.temp-273.15));
keyyy.innerHTML=Math.round(res.main.temp-273.15)+" °C"
console.log(res);
console.log(res.wind.speed);
uniq2.innerHTML=`${res.wind.speed}`;

uniq.innerHTML=`${res.main.humidity}%`;

    }

    let button=document.querySelector("button");
    
    button.addEventListener("click",()=>{
        let value=document.querySelector(".search").value;
        api(value);

    })