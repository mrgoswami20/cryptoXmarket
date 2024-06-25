import { useEffect, useState } from 'react';
import '../styles/trending.css';

export default function Trending(){
    const [trendingData, setTrendingData] = useState({coins : []});
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://api.coingecko.com/api/v3/search/trending", requestOptions)
        .then((response) => response.json())
        .then((result) => setTrendingData(result))
        .catch((error) => console.error(error));
    }, [])
    return (
        <>
            <div className=" containTrend d-flex flex-column p-4 m-4 align-items-center justify-content-center">
                <span>Trending Coins (24h)</span>
                {
                    (trendingData.coins).map((coin, index) => (
                            (index < 3)? 
                            <div className='coinList w-100 d-flex justify-content-between align-items-center'>
                                <div>
                                    <img className = "coinLogo" src = {coin.item.small}/>
                                    <span className = "coinName">{coin.item.name}</span>
                                </div>
                                {
                                    (coin.item.data.price_change_percentage_24h.usd > 0)?
                                    <span className='changeTrending text-success changePositive rounded'>	
                                        <span className='arrow mt-2'>&#9650;</span>
                                        <span className='changeNum'>
                                            {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                        </span>
                                    </span>:
                                    <span className='changeTrending text-danger changeNegative rounded'>
                                        <span className='arrow mt-2'>&#9660;</span>
                                        <span className='changeNum'>
                                            {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                        </span>
                                    </span>
                                }
                            </div>:
                            <></>
                    ))
                }
            </div>
        </>
    )
}