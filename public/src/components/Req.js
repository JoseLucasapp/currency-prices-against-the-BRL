const URL = 'https://economia.awesomeapi.com.br/json';

const connect = async(endpoint) =>{
    const call = await fetch(`${URL}${endpoint}`);
    const req = await call.json();
    return Object.values(req);
}

export default{
    getConverter : async()=>{
        return[
            {
                slug: 'USD',
                title: 'Dolar',
                items: await connect(`/all/USD-BRL`)
            },
            {
                slug: 'EUR',
                title: 'Euro',
                items: await connect(`/all/EUR-BRL`)
            },
            {
                slug: 'GBP',
                title: 'Libra Esterlina',
                items: await connect(`/all/GBP-BRL`)
            },
            {
                slug: 'BTC',
                title: 'Bitcoin',
                items: await connect(`/all/BTC-BRL`)
            },
            {
                slug: 'LTC',
                title: 'Litecoin',
                items: await connect(`/all/LTC-BRL`)
            },
            {
                slug: 'JPY',
                title: 'Ieni',
                items: await connect(`/all/JPY-BRL`)
            },
            {
                slug: 'CHF',
                title: 'Franco Suiço',
                items: await connect(`/all/CHF-BRL`)
            },
            {
                slug: 'CNY',
                title: 'Yuan',
                items: await connect(`/all/CNY-BRL`)
            }
        ]
    }
}