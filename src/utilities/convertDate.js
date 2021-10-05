// import React from 'react'

// export default function DateConverter({ index }) {

//         const unixTime = index.dt;
//         const date = new Date(unixTime * 1000);
        
//     return date.toLocaleDateString()
    
// }

export const convertDate = (unixTime) => {
    const date = new Date(unixTime * 1000);
    
return date.toLocaleDateString()
}

  

