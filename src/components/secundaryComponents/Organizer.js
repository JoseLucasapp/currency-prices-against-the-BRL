import React from 'react';
import '../styles/Organizer.css';

export default ({title, items}) =>{
    return(
        <div className="main">
            <div className="currencymain">
                <h3>{title}</h3>
                <div className="currencyrowarea">
                    <div className="currencyrow">
                        {items.map((item,key)=>(
                            <div key={key} className="currency">
                                <p>{item.codein} to {item.code}</p>
                                <p>Compra: {item.bid}</p>
                                <p>Venda: {item.ask}</p>
                                <p>Venda: {item.ask}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}