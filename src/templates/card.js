import React from "react";
import './styles/card.css';

const Card = ({item, key})=>{
    const color = item.varBid[0] === '-'? 'red':'green';
    return(
        <div key={key} className="root">
            <p><b>Nome:</b> {(item.name).replace('/Real Brasileiro', '')}</p>
            <p><b>Compra:</b> R$ {((item.bid*1).toFixed(2)).replace(".", ",")}</p>
            <p><b>Venda:</b> R$ {(item.ask).replace(".", ",")}</p>
                <p><b>Variação: </b><span style={{color: color}}>R${((item.varBid*1).toFixed(2)).replace(".", ",")}</span></p>
            <p><b>% de Variação:</b><span style={{color: color}}> {(item.pctChange*100).toFixed(2)}%</span></p>
            <p><b>Preço maxímo:</b> R$ {(item.high).replace(".", ",")}</p>
            <p><b>Preço mínimo:</b> R$ {(item.low).replace(".", ",")}</p>
        </div>
    )
}

export default Card;