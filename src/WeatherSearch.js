import React, { useState } from "react";
import Axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    console.log(apiUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is {Math.round temperature} degrees in ${city}`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  if (temperature !== null) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a city"
            onChange={changeCity}
          />
          <input type="button" value="Search" />
        </form>

        <h2> {message} </h2>
      </div>
    );
  } else {
    let apiKey = "0baf0dab3ca4e1359t8bb81651943o3d";
    let units = "metric";
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}
        &key=${apiKey}&units=${units}`;
    Axios.get(apiurl).then(showTemperture);
    return <h2> Loading temperature for ${city} ...</h2>;
  }
}
