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
            <div>
                <Header/>
                <div>
                    <section id='section'>
                        {currency.map((item,key)=>(
                            <div>
                                <Organizer key={key} title={item.title} items={item.items}/>
                            </div>
                        ))}
                    </section>
                    <section id='carregando'>
                        <div class="spinner">
                            <div class="rect1"></div>
                            <div class="rect2"></div>
                            <div class="rect3"></div>
                            <div class="rect4"></div>
                            <div class="rect5"></div>
                            <p>Carregando</p>
                        </div>
                    </section>
                </div>
                <footer className="footer">
                    <Footer/>
                </footer>
            </div>
        </div>
    );
}