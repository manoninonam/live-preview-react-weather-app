import React from 'react'
import WeatherIcon from 'react-icons-weather'

export default function IconConverter({ iconId }) {

    return (
        <WeatherIcon name="owm" iconId={iconId} flip="horizontal" rotate="90" />    
    )
}
