var searchBtn = $("#searchbutton");
var inputCity = $("#inputcity");
var search = "";
var APIkey = "82ed5f593f985c5201f4d33337e8f934";
 



searchBtn.click(function(){
    console.log("button was clicked");
    var City = inputCity.val();
    console.log(City)
    getlocation(City)
})


    
   
    
function getlocation(City) {
    console.log(City)
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + City + "&appid=" + APIkey )
    .then(response => response.json())
	.then(data =>{
        // id = name 
        console.log(data)
        var lon = data[0].lon;
        var lat = data[0].lat;
        var cityName = $("#cityName");
        cityName = data[0].name;
        getweather(lon, lat)
        
            //linking api within html as an aray
            //api data as an element 
        //document.getElementById('name-of-cocktail').textContent = response.drinks[0].strDrink
        // document.getElementById('cocktail-image').setAttribute('src', response.drinks[0].strDrinkThumb); 
        // document.getElementById('name-of-ingredients').textContent = `${response.drinks[0].strIngredient1}'${response.drinks[0].strIngredient2} ${response.drinks[0].strIngredient3} ${response.drinks[0].strIngredient4}${response.drinks[0].strIngredient5}`
        // document.getElementById(`mesurments`).textContent = `${response.drinks[0].strMeasure1} ${response.drinks[0].strMeasure2}`
        // document.getElementById('instruction').textContent = `${response.drinks[0].strInstructions}`


    })
	

}

function getweather(lon, lat){
    console.log (lon);
    console.log(lat);
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + APIkey)
    .then(response => response.json())
    .then(data => {
       
        //current weather

        console.log(data)
        var currenttemp = $("#currentTemp")
        currenttemp.text(data.list[0].main.temp_max)

        var currentwind =$("#currentwind")
        currentwind.text(data.list[0].wind.speed)

        var currentHumidity = $("#currenthuminity")
        currentHumidity.text(data.list[0].main.huminity)

        //Day 1 weather forecast

        console.log(data)

        var day1Temp = $("#day-1-Temp")
        day1Temp.text(data.list[1].main.temp_max)

        var day1wind = $("#day-1-wind")
        day1wind.text(data.list[1].wind.speed)

        var day1Humidity = $("#day-1-huminity")
        day1Humidity.text(data.list[1].main.huminity)

        //Day-2 forecast
        var day2Temp = $("#day-2-Temp")
        day2Temp.text(data.list[2].main.temp_max)

        var day2wind = $("#day-2-wind")
        day2wind.text(data.list[2].wind.speed)

        var day2Humidity = $("#day-2-huminity")
        day2Humidity.text(data.list[2].main.huminity)


        //day 3

        var day3Temp = $("#day-3-Temp")
        day3Temp.text(data.list[3].main.temp_max)

        var day3wind = $("#day-3-wind")
        day3wind.text(data.list[3].wind.speed)

        var day3Humidity = $("#day-3-huminity")
        day3Humidity.text(data.list[3].main.huminity)

        //day 4

        var day4Temp = $("#day-4-Temp")
        day4Temp.text(data.list[4].main.temp_max)

        var day4wind = $("#day-4-wind")
        day4wind.text(data.list[4].wind.speed)

        var day4Humidity = $("#day-4-huminity")
        day4Humidity.text(data.list[4].main.huminity)

            //day5

            var day5Temp = $("#day-5-Temp")
        day5Temp.text(data.list[5].main.temp_max)

        var day5wind = $("#day-5-wind")
        day5wind.text(data.list[5].wind.speed)

        var day5Humidity = $("#day-5-huminity")
        day5Humidity.text(data.list[5].main.huminity)
        
    })
}

// //var currentTempEl = $("#todaytemp");
// currentTempEl.text(data.current.temp);
// var currentWindEl = $("#todaywind");
//     currentWindEl.text(data.current.wind_speed);
// var currentHumidityEl = $("#todayhumidity");
//     currentHumidityEl.text(data.current.humidity);

