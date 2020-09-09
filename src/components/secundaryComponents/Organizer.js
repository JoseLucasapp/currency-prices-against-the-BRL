import React from 'react';

export default ({title, items}) =>{
    return(
        <div>
            <h3>{title}</h3>
            <div>
                {items.map((item,key)=>(
                    <div key={key}>{item.code}</div>
                ))}
            </div>
        </div>
    )
}