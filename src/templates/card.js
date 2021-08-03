import React from "react";
import './styles/card.css';

const Card = ({item})=>{
    return(
        <div className="root">
            <p><b>Nome:</b> {item.name}</p>
            <p><b>Compra:</b> R$ {((item.bid*1).toFixed(2)).replace(".", ",")}</p>
            <p><b>Venda:</b> R$ {(item.ask).replace(".", ",")}</p>
            <p><b>Variação:</b> R$ {(item.varBid).replace(".", ",")}</p>
            <p><b>% de Variação:</b> {(item.pctChange*100).toFixed(2)}%</p>
            <p><b>Preço maxímo:</b> R$ {(item.high).replace(".", ",")}</p>
            <p><b>Preço mínimo:</b> R$ {(item.low).replace(".", ",")}</p>
        </div>
    )
}

export default Card;