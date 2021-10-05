import React from "react";
import WeatherCard from "./WeatherCard";


export default function WeatherOverview() {

  return (
    <div className="weather-overview">
    <WeatherCard city="Amsterdam" lat="52.374" lon="4.8897"/>
    <WeatherCard city="Nijmegen" lat="51.8333" lon="5.85" />
    </div>
  );
}

