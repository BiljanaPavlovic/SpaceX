import React, { useState, useEffect } from 'react';
import { getHeaderInfo } from '../utility/space-x-service';


export const Header = (props) =>{
    const [data,setData]=useState([])
    const [displayData,setDisplayData]= useState([])
    useEffect(() => {
        getHeaderInfo()
        .then(data=>{
           setData(data);
           setDisplayData(data);
         })
    })
    return (
        <>
        <header>
        <p><h1>{data.name}</h1><br/>Founder: {data.founder}<br/>CEO: {data.ceo}<br/>{data.summary}</p>
        </header>
        </>
    )
    
}

