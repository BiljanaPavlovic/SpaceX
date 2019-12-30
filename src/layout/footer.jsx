import React, { useState, useEffect } from 'react';
import { getFooterInfo } from "../utility/space-x-service"


export const Footer = (props) =>{
    const [data,setData]=useState([])
    const [displayData,setDisplayData]= useState([])
    useEffect(() => {
        getFooterInfo()
        .then(data=>{
           setData(data);
           setDisplayData(data);
         })
    })
    return (
        <>
        <footer>
        <p>{data.name}<br/>{data.orbit_type}<br/>{data.details}</p>
        </footer>
        </>
    )
    
}

