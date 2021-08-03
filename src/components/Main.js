import React, { useEffect, useState } from 'react';
import Card from '../templates/card';
import Req from './Req';

const Main = ()=>{
    const [currencyData, setCurrencyData] = useState([]);

    useEffect(()=>{
        setCurrencyData(Req.getConverter())
        console.log(currencyData)
    },[])
    
    return(
        <div>
            olá
        </div>
    )
}

export default Main;