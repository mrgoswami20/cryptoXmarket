import { Carousel } from 'bootstrap';
import { useState, useEffect } from 'react';
import '../styles/youMayLike.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function YouMayLikeList( props ){
    const [trendingData, setTrendingData] = useState({coins : []});
    useEffect(()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("https://api.coingecko.com/api/v3/search/trending", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            if(props.heading[0] != 'T')
                result.coins.reverse();
            setTrendingData(result)
        })
        .catch((error) => console.error(error));
    }, [])
    const [width, setWindowDimensions] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div data-ride="carousel" className = "likeList rounded p-4 carousel">
            <span className="heading">{props.heading}</span>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={(width > 900) ? 20 : 5}
                slidesPerView={(width > 900) ? 5 : 2}
                navigation
            >
            {
                trendingData.coins.map((coin) => (
                    <SwiperSlide>
                    <div className='carousel-item rounded likeListItem d-flex flex-column'>
                        <div className='listItemInfo d-flex flex-row align-items-center'>
                            <img className="coinLogo" src = {coin.item.small}/>
                            <span className='ms-2'>
                                <p>{coin.item.name}</p>
                            </span>
                            
                            {
                                (coin.item.data.price_change_percentage_24h.usd > 0)?
                                    
                                <div className='ms-5 rounded changeNum text-success changePositive'>
                                    &#9650;{coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                </div>
                                :
                                <span className='ms-5 rounded changeNUm tes-danger changeNegative'>
                                    &#9660; {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                                </span>
                                
                            }
                        </div>
                        <img className = "m-3" src = {coin.item.data.sparkline}/>
                    </div>
                    </SwiperSlide>            
                ))
            }
            </Swiper>
        </div>
    )
}