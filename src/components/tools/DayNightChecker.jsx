import React, { useState, useEffect } from 'react'

export default function DayNightChecker({ localTime }) {
  const [viewMode, setViewMode] = useState('')

    const unixTime = localTime;
    const date = new Date(unixTime * 1000);
    const currentHour = date.getHours();
    
  useEffect(() => {  
        if (currentHour >= 6 && currentHour <= 18) {
            setViewMode("day");
        } else if (currentHour > 18 && currentHour < 6) {
            setViewMode("night")
        }
    }, []);


    return viewMode 
}


// logica uit component in app.js zetten 








