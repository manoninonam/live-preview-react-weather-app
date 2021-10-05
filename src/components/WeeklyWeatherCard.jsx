



import React, { useState, useEffect } from 'react';
import weathercardbackground from '../images/weathercardbackground.png'
import IconConverter from './tools/IconConverter'
import { convertDate } from '../utilities/convertDate'

export default function WeeklyWeatherCard({ lat, lon }) {

  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeeklyData(result);
      });
  },
    [lat, lon]);

    //set state accordeon
    const [clicked, setClicked] = useState(null);
    const toggle = i => {
        if (clicked === i){
            return setClicked(null)
        }
        setClicked(i)
    }

    //array to map
    const dailyArray = weeklyData.daily

  return (
    <div className="weekly-weather-card weather-card-back">
      {typeof weeklyData.daily != "undefined" ? (

        <div>
            <div className="weather-card-container">
              <img className="background-image" src={weathercardbackground} alt="background" />

              <div className="weather-card-info">

                <div className="accordion-wrapper">
                {dailyArray.map((item, i) => (
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => toggle(i) }>
                            {/* <p><DateConverter index={item} /></p> */}
                            <p>{convertDate(item.dt)}</p>
                            <p><IconConverter iconId={item.weather[0].id} /></p>
                            <p><span>{item.temp.min.toFixed(0)}/{item.temp.max.toFixed(0)}°C</span></p>
                            <p>{clicked === i ? "-" : "+" }</p>
                        </div>
                        <div className={clicked === i ? "accordion-content open" : "accordion-content"}>
                            <table className="accordion-table">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>Ochtend</th>
                                    <th>Middag</th>
                                    <th>Avond</th>
                                    <th>Nacht</th>
                                </tr>
                                <tr>
                                    <td>Temp</td>
                                    <td>{item.temp.morn.toFixed(1)}°C</td>
                                    <td>{item.temp.day.toFixed(1)}°C</td>
                                    <td>{item.temp.eve.toFixed(1)}°C</td>
                                    <td>{item.temp.night.toFixed(1)}°C</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
                </div>
              </div>
            </div>
        </div>  
      ) : (
        <div></div>
    )}
</div>
);
}


// import React, { useState, useEffect } from 'react';
// import WeeklyWeatherAccordion from './WeeklyWeatherAccordion';
// import weathercardbackground from '../images/weathercardbackground.png'

// export default function WeeklyWeatherCard({ lat, lon }) {

//   const [weeklyData, setWeeklyData] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${process.env.REACT_APP_API_KEY}&units=metric`
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         setWeeklyData(result);
//       });
//   },
//     [lat, lon]);

//   //array to map
//   const dailyArray = weeklyData.daily

//   return (
//     <div className="weekly-weather-card">
//       <div className="weather-card-container">
//         <img className="background-image" src={weathercardbackground} alt="background" />
        
//         {typeof weeklyData.daily != "undefined" ? (
//           <div className="weather-card-info">
//             <div className="accordion-wrapper">
//               {dailyArray.map((item, i) => (<WeeklyWeatherAccordion index={i} item={item} />))}
//             </div>
//           </div>

//       ) : (

//       <div></div>

//       )}
//     </div>
// </div >
// );
// }

         


