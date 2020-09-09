import React from 'react';

export default ({title, items}) =>{
    return(
        <div>
            <h2>{title}</h2>
            <div>
                {items.map((item,key)=>(
                    <div key={key}>{item.code}</div>
                ))}
            </div>
        </div>
    )
}