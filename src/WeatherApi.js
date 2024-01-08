import React, {useState} from "react";
import { Axios } from "axios";


export default function WeatherApi() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState(null);

function displayWeather(response){
setloaded(true);
setWeather({
temperature : response.data.main.temp,
wind:response.data. wind.speed,
humditiy:response.data.main.humidity,
icon: " https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png",
description: response.data.weather[0].description
} );}


    function handleSubmit(event){
        event.preventDefault();
        let apiKey = "0baf0dab3ca4e1359t8bb81651943o3d";
        let units = "metric";
        let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}
            &key=${apiKey}&units=${units}`;
            axios.get(apiUrl).then (displayWeather);
    }

    function updateCity(event){
    setCity(event.target.value);
    }

let form =  <form onSubmit={handleSubmit}>
<input
  type="search"
  placeholder="Search for a city"
  onChange={changeCity}
/>
<input type="button" value="Search" />
</form> ;


    if(loaded){
        return (
            <div> {form}
            <ul>
         <li> Temperature: {Math.round(weather.temperature)} C </li>
         <li> Description:{weather.description} </li>
         <li> Wind: {weather.wind} km/h</li>  
         <li> Humditiy: {weather.humditiy} % </li>
         <li><img src={weather.icon} alt="Weather Icon" /></li>
            </ul>
            </div>
        );
       }   
       
       else{
   return form;
  
}
    }