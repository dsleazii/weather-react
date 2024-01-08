import logo from "./logo.svg";
import React from "react";
import "./App.css";

import WeatherApi from "./WeatherApi";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />{" "}
    </div>
  );
}

export default App;
