import React from 'react';
import WeeklyWeatherCard from './WeeklyWeatherCard';
import CurrentWeatherCard from './CurrentWeatherCard';

export default function WeatherCard({ city, lat, lon }) {

   return (

      <div className="weather-card">
         <div className="weather-card-inner">
         <CurrentWeatherCard city={city} />
         <WeeklyWeatherCard lat={lat} lon={lon} />
         </div>
      </div>
   );
}



