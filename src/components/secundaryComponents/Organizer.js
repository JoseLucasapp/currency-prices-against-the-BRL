import React from 'react';
import Card from '../../templates/card';
import Title from '../../templates/title';
import '../styles/Organizer.css';

export default ({title, items}) =>{
    return(
        <div className="currencymain">
            <Title title={title}/>
            <div className="currencyrow">
                {items.map((item,key)=>(
                    <Card item={item} />
                ))}
            </div>
        </div>
    )
}