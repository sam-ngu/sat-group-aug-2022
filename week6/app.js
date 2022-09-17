

const apiKey = 'byoapikey';
function getSearchedCities(){

  return JSON.parse(localStorage.getItem('cities')) || [];
}


$(function(){
  
  // user lands on this page
  // get the last item in the history
  const lastCitySearched = getSearchedCities().slice(-1)[0];
  // display the weather data 
  if(!lastCitySearched){
    return;
  }
  showWeather(lastCitySearched);

});


function getWeatherApi(city){

  // call the current api to get the lon and lat
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(function(response){
      return response.json()
    })
    .then(function(result){
      
      return {
        lon: result.coord.lon,
        lat: result.coord.lat,
      }
    })
    .then(function(result){
      
      // call the onecall api to get the rest of the info
      return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.lat}&lon=${result.lon}&appid=${apiKey}`)

    })
    .then(function(result){
      return result.json();
    });
}



function showWeather(city){

  getWeatherApi(city)
    .then(function(result){

      // show todays weather
      result.current
    
    
    
      // show forecast


    })


}





// when user entered a city
// display the city weather data

// if the city is valid,
// add the city to the history

// add the city to the sidebar list

// when user type in duplicated city,
// reorder the ranking, and move the searched city to the first