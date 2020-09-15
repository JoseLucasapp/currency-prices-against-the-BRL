import React from 'react';
import '../styles/Organizer.css';

export default ({title, items}) =>{
    return(
        <div className="main-organizer">
            <div className="currencymain">
                <h3>{title}</h3>
                <div className="currencyrowarea">
                    <div className="currencyrow">
                        {items.map((item,key)=>(
                            <div key={key} className="currency">
                                <p><b>Nome:</b> {item.name}</p>
                                <p><b>Compra:</b> {item.bid}</p>
                                <div className="moretext">
                                    <p>Passe o Mouse para mais dados ...</p>
                                </div>
                                <p><b>Venda:</b> {item.ask}</p>
                                <p><b>Variação:</b> {item.varBid}</p>
                                <p><b>% de Variação:</b> {(item.pctChange*100).toFixed(2)}%</p>
                                <p><b>Preço maxímo:</b> {item.high}</p>
                                <p><b>Preço mínimo:</b> {item.low}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}