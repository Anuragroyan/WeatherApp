let weather = {
    apikey:"490d87c2f138c1a552d37a9b86bf53d4",
    fetchweather: function(city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&APPID="
            + this.apikey
            )
             .then((response) => response.json())
             .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
       const { name } = data;
       const { icon, description } = data.weather[0];
       const { temp, humidity } = data.main;
       const { speed } = data.wind;
       console.log(name,icon,description,temp,humidity,speed);
       document.querySelector(".city").innerHTML = "Weather in " + name;
       document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png";
       document.querySelector(".description").innerHTML = description;
       document.querySelector(".temp").innerHTML = temp + "°C";
       document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
       document.querySelector(".wind").innerHTML = "Speed: " + speed + "km/h";
       document.querySelector(".weather").classList.remove("loading");
       document.body.style.backgroundImage = "url('https://source.unsplash.com/3000x2000/?"+ name +"')";
    },
    search:function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter"){
        weather.search();
    }
})

weather.fetchweather("Banglore");