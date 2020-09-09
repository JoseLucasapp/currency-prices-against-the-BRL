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
                title: 'Libra',
                items: await connect(`/all/GBP-BRL`)
            },
            {
                slug: 'BTC',
                title: 'Bitcoin',
                items: await connect(`/all/BTC-BRL`)
            }
        ]
    }
}