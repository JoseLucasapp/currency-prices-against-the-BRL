import React from 'react';
import '../styles/Organizer.css';

export default ({title, items}) =>{
    return(
        <div>
            <div className="currencymain">
                <h3>{title}</h3>
                <div className="currencyrowarea">
                    <div className="currencyrow">
                        {items.map((item,key)=>(
                            <div key={key} className="currency">
                                <p>Compra: {item.bid}</p>
                                <p>Venda: {item.ask}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}