import React, { useEffect, useState } from 'react';
import Req from './Req';
import Header from './secundaryComponents/Header';
import Organizer from './secundaryComponents/Organizer';
import './/styles/App.css';

export default () => {

    const [currency, setCurrency] = useState([]);

    useEffect(()=>{
        const loadAll = async()=>{
            let data = await Req.getConverter();
            console.log(data)
            setCurrency(data);
        }
        loadAll();
    },[]);
    return(
        <div>
            <div>
                <Header/>
                <div>
                    <section>
                        {currency.map((item,key)=>(
                            <div>
                                <Organizer key={key} items={item.items}/>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
}