import React from 'react';
import '../styles/Footer.css';

export default () => {
    return(
        <div className="root-footer">
            <div className="mydata-footer">
                <h3>Github: <span><a href="https://github.com/JoseLucasapp">JoseLucasapp</a></span></h3>
                <h3>/ Instagram: <span><a href="https://www.instagram.com/jlucasgf/?hl=pt-br">jlucasgf</a></span></h3>
            </div>
            <div className="data-footer">
                <h3>fonte: <span><a href="https://docs.awesomeapi.com.br/api-de-moedas">Api de moedas</a></span></h3>
            </div>
        </div>
    )
}