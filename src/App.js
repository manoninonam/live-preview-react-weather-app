import "./App.css";
import React from "react";
import WeatherOverview from "./components/WeatherOverview";

/*
alle logica voor day night mode 
loading state hier plaatse 
apis naar hier verplaatsen wel in losse component

*/

function App() {
  return (
    <div className="App">
      <h1 className="title">React Weather App</h1>
      <WeatherOverview />
    </div>
  )
}

export default App
