let weather = {
    apiKey: "61abffbddb06219aea49d129f6392ca0",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city + 
            "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
        fetch(
            "https://api.openweathermap.org/data/2.5/forecast?q="
             + city + 
             "&units=imperial&appid="
             + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayForecast_one(data))
        fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q="
                 + city + 
                 "&units=imperial&appid="
                 + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayForecast_two(data))
        fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q="
                 + city + 
                 "&units=imperial&appid="
                 + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayForecast_three(data))
        fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q="
                 + city + 
                 "&units=imperial&appid="
                 + this.apiKey
            )
            .then((response) => response.json())
            .then((data) => this.displayForecast_four(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp,humidity } = data.main;
        const { speed } = data.wind;
        const {temp_min, temp_max} = data.main;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        if (Math.round(temp) >= 80){
            document.querySelector(".temp").style.color = "red";
        }else{
            document.querySelector(".temp").style.color = "white"
        }
        if (Math.round(temp) <= 45){
            document.querySelector(".temp").style.color = "blue";
        }else{
            document.querySelector(".temp").style.color = "white"
        }
        document.querySelector(".temp").innerHTML = Math.round(temp)+"°F";
        document.querySelector(".min").innerHTML = "min: "+ Math.round(temp_min)+"°F ";
        document.querySelector(".max").innerHTML = "max: "+ Math.round(temp_max)+"°F";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"; 
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h";
        document.querySelector(".day").innerHTML = day;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name +"')"
    },

    displayForecast_one: function(data){
        const { temp, humidity } = data.list[3].main;
        const { icon, description } = data.list[3].weather[0];
        document.querySelector("#temp_one").innerHTML = "Temp: " + Math.round(temp) + "°F ";
        document.querySelector("#minmax_one").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector("#description_one").innerHTML = description;
        document.querySelector("#icon_one").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"; 
    },
    displayForecast_two: function(data){
        const { temp, humidity } = data.list[11].main;
        const { icon, description } = data.list[11].weather[0];
        document.querySelector("#temp_two").innerHTML = "Temp: " + Math.round(temp) + "°F ";
        document.querySelector("#minmax_two").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector("#description_two").innerHTML = description;
        document.querySelector("#icon_two").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"; 
    },
    displayForecast_three: function(data){
        const { temp, humidity } = data.list[19].main;
        const { icon, description } = data.list[19].weather[0];
        document.querySelector("#temp_three").innerHTML = "Temp: " + Math.round(temp) + "°F ";
        document.querySelector("#minmax_three").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector("#description_three").innerHTML = description;
        document.querySelector("#icon_three").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"; 
    },
    displayForecast_four: function(data){
        const { temp, humidity } = data.list[27].main;
        const { icon, description } = data.list[27].weather[0];
        document.querySelector("#temp_four").innerHTML = "Temp: " + Math.round(temp) + "°F ";
        document.querySelector("#minmax_four").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector("#description_four").innerHTML = description;
        document.querySelector("#icon_four").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png"; 
    },
    search: function(){
        //if (document.querySelector(".search-bar").value = "LA"){
            //document.querySelector(".search-bar").value = "Los Angeles"
        //} 
       this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})
let d = new Date();
let day = d.getDay();
console.log(day);

switch(day){
    case 0:
        day = "Sunday";
        document.querySelector("#one").innerHTML = "Monday"
        document.querySelector("#two").innerHTML = "Tuesday"
        document.querySelector("#three").innerHTML = "Wednesday"
        document.querySelector("#four").innerHTML = "Thursday"
        break;
    case 1: 
        day = "Monday";
        document.querySelector("#one").innerHTML = "Tuesday"
        document.querySelector("#two").innerHTML = "Wednesday"
        document.querySelector("#three").innerHTML = "Thursday"
        document.querySelector("#four").innerHTML = "Friday"
        break;
    case 2: 
        day = "Tuesday";
        document.querySelector("#one").innerHTML = "Wednesday"
        document.querySelector("#two").innerHTML = "Thursday"
        document.querySelector("#three").innerHTML = "Friday"
        document.querySelector("#four").innerHTML = "Saturday"
        break;
    case 3: 
        day = "Wednesday";
        document.querySelector("#one").innerHTML = "Thursday"
        document.querySelector("#two").innerHTML = "Friday"
        document.querySelector("#three").innerHTML = "Saturday"
        document.querySelector("#four").innerHTML = "Sunday"
        break;
    case 4: 
        day = "Thursday";
        document.querySelector("#one").innerHTML = "Friday"
        document.querySelector("#two").innerHTML = "Saturday"
        document.querySelector("#three").innerHTML = "Sunday"
        document.querySelector("#four").innerHTML = "Monday"
        break;
    case 5: 
        day = "Friday";
        document.querySelector("#one").innerHTML = "Saturday"
        document.querySelector("#two").innerHTML = "Sunday"
        document.querySelector("#three").innerHTML = "Monday"
        document.querySelector("#four").innerHTML = "Tuesday"
        break;
    case 6: 
        day = "Saturday";
        document.querySelector("#one").innerHTML = "Sunday"
        document.querySelector("#two").innerHTML = "Monday"
        document.querySelector("#three").innerHTML = "Tuesday"
        document.querySelector("#four").innerHTML = "Wednesday"
        break;
}
weather.fetchWeather("Lathrop");
