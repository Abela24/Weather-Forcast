var searchBtn = document.getElementById("searchbutton");
var inputCity = document.getElementById("inputcity");
var search = "";
var APIkey = "82ed5f593f985c5201f4d33337e8f934";
 
alert("this is working")











searchBtn.click(function(){
    console.log("button was clicked");
    inputCity= $("#inputCity").val().trim();
    console.log(inputCity)
    getlocation(inputCity)
})



    
    
   
    
function getlocation(inputCity) {
    console.logs(inputCity)
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + inputCity + "&appid=" + APIkey )
    .then(response => response.json())
	.then(data =>{
        // id = name 
        console.log(data)
            //linking api within html as an aray
            //api data as an element 
        document.getElementById('name-of-cocktail').textContent = response.drinks[0].strDrink
        document.getElementById('cocktail-image').setAttribute('src', response.drinks[0].strDrinkThumb); 
        document.getElementById('name-of-ingredients').textContent = `${response.drinks[0].strIngredient1}'${response.drinks[0].strIngredient2} ${response.drinks[0].strIngredient3} ${response.drinks[0].strIngredient4}${response.drinks[0].strIngredient5}`
        document.getElementById(`mesurments`).textContent = `${response.drinks[0].strMeasure1} ${response.drinks[0].strMeasure2}`
        document.getElementById('instruction').textContent = `${response.drinks[0].strInstructions}`


    })
	.catch(err => console.error(err));

}

