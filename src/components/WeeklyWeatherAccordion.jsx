import React, { useState } from 'react'
import { convertDate } from '../utilities/convertDate'
import IconConverter from './tools/IconConverter'

export default function WeeklyWeatherAccordion({ item, i }) {

    const [clicked, setClicked] = useState(null);
    const toggle = i => {
        if (clicked === i) {
            return setClicked(null)
        }
        setClicked(i)
    }

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => toggle(i)}>
                <p>{convertDate(item)}</p>
                <p><IconConverter iconId={item.weather[0].id} /></p>
                <p><span>{item.temp.min.toFixed(0)}/{item.temp.max.toFixed(0)}°C</span></p>
                <p>{clicked === i ? "-" : "+"}</p>
            </div>
            <div className={clicked === i ? "accordion-content open" : "accordion-content"}>
                <table className="accordion-table">
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
                </table>
            </div>
        </div>
    )
}