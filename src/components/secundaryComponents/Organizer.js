import React from 'react';
import '../styles/Organizer.css';

export default ({items}) =>{
    return(
        <div className="main-organizer">
            <div className="currencymain">
                <div className="currencyrowarea">
                    <div className="currencyrow">
                        {items.map((item,key)=>(
                            <div key={key} className="currency">
                                <p>Nome: {item.name}</p>
                                <p>Compra: {item.bid}</p>
                                <div className="moretext">
                                    <p>Passe o Mouse para mais dados ...</p>
                                </div>
                                <p>Venda: {item.ask}</p>
                                <p>Variação: {item.varBid}</p>
                                <p>% de Variação: {(item.pctChange*100).toFixed(2)}%</p>
                                <p>Preço maxímo: {item.high}</p>
                                <p>Preço mínimo: {item.low}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}