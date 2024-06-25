import { useEffect, useState } from 'react';
import bitcoinlogo from '../assets/Bitcoin.webp';
import '../styles/bitcoin.css';
import TradingChart from './TradingChart';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Bitcoin(props){
    const [coinData, setCoinData] = useState(null); 
    const [dispData, setDispData] = useState(
        {
            bitcoin: {
                usd: 0,
                usd_24h_change: 0,
                inr: 0,
                inr_24h_change: 0
            }
        }
    );

    useEffect(() => {
        const requestOptions = {
        method: "GET",
        redirect: "follow"
        };
        fetch("https://api.coingecko.com/api/v3/coins/" + props.coin, requestOptions)
        .then((response) => response.json())
        .then((result) => setCoinData(result))
        .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        const myHeaders = new Headers();

        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true", requestOptions)
        .then((response) => response.json())
        .then((result) => setDispData(result))
        .catch((error) => console.error(error));

    }, [])
    if(coinData == undefined || coinData.name == undefined)
        return <>
            Enter a valid endpoint to see the graphs.
        </>;
    return(
        <>
            <div className="bitcoinArea p-4 d-felx flex-coulmn">
                {console.log(coinData)}
                <div className='d-flex align-items-center'>
                    <img className = "logoBitcoin" src = {coinData.image.small}/>
                    <span className='bitcoinText'>{coinData.name}</span>
                    <span className='btcText'>{coinData.symbol}</span>
                    <button className='ms-4 btn btn-secondary btn-sm'>Rank #{coinData.market_cap_rank}</button>
                </div>
                <div className=' priceArea mt-4 d-flex align-items-center'>
                    <div className='dollorDisp'>
                        ${numberWithCommas(coinData.market_data.ath.usd)}
                    </div>
                    {
                        (coinData.market_data.ath_change_percentage.usd > 0)?
                        	
                        <div className='ms-5 rounded changeNum text-success changePositive'>
                            &#9650;{coinData.market_data.ath_change_percentage.usd.toFixed(2)}%
                        </div>
                        :
                        <span className='ms-5 rounded changeNUm tes-danger changeNegative'>
                            &#9660; {coinData.market_data.ath_change_percentage.usd.toFixed(2)}%
                        </span>
                        
                    }
                    <span className='timeDuration ms-2'>(24H)</span>
                </div>
                <div className='inr'>
                    ₹ {numberWithCommas(coinData.market_data.ath.inr)}
                </div>
                <hr className='mt-4 mb-4'/>
                <div className='trading '>
                    <TradingChart symbol = {coinData.symbol}/>
                </div>
            </div>
        </>
    )
}