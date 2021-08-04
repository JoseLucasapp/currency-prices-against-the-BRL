import React, { useEffect, useState } from 'react';
import Req from './Req';
import Header from './secundaryComponents/Header';
import Organizer from './secundaryComponents/Organizer';
import Footer from './secundaryComponents/Footer';
import './/styles/App.css';

export default () => {

    const [currency, setCurrency] = useState([]);

    useEffect(()=>{
        const loadAll = async()=>{
            let data = await Req.getConverter();
            document.getElementById('section').style.visibility = 'hidden';
            if(data){
                document.getElementById('carregando').style.visibility = 'hidden';
                document.getElementById('section').style.visibility = 'visible';
                document.getElementById('carregando').style.position = 'absolute';
            }
            setCurrency(data);
        }
        loadAll();
    },[]);
    return(
        <div>
            <div className="main-root">
                <Header/>
                <div>
                    <section id='section' className="cards">
                        {currency.map((item,key)=>(
                            <div>
                                <Organizer key={key} title={item.title} items={item.items}/>
                            </div>
                        ))}
                    </section>
                    <section id='carregando'>
                        <div className="spinner">
                            <div className="rect1"></div>
                            <div className="rect2"></div>
                            <div className="rect3"></div>
                            <div className="rect4"></div>
                            <div className="rect5"></div>
                            <p>Carregando</p>
                        </div>
                    </section>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}