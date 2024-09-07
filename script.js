
const apikey="52371a07e6b73878121d70aeae92704c";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const weatherIcon=document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    var data=await response.json();
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        console.log(data);
        console.log("Name :"+data.name);
        console.log("Humidity :"+data.main.humidity);
        console.log("Temp :"+data.main.temp);
        console.log("Wind Speed :"+data.wind.speed);
        console.log("Weather :"+data.weather[0].main);
        
        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" Km/h";
           
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png"
        }
        else if (data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="images/snow.png"
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
    
}


searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value)})

;