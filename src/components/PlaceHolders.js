import "../styles/placeHolders.css";
import info from '../assets/infoLogo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.jpg';
import phChart from '../assets/placeholderChart.png';
import phImage from '../assets/placeHolderImage.png';
import tm1 from '../assets/person1.png';
import tm2 from '../assets/person2.png';
import tm3 from '../assets/person3.png';
import { useEffect, useState } from "react";


const team = [
    {
        Name : "John Smith",
        image : tm1
    },
    {
        Name : "Elia William",
        image : tm2
    },{
        Name : "John Doe",
        image : tm3
    }
]


function PerformancePlaceholder(){
    const [width, setWindowDimensions] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <>
            {(width > 900) ? 
            <div className="rounded-4 bitcoinBox100 mt-4 ms-5 me-5 p-4">
                <h2>Performance</h2>
                <img className = "w-100" src = {phImage}/>
            </div>:
            <div className="bitcoinBox100 rounded-4 mt-4 ms-5 me-5 p-4">
                <h2>Performance</h2>
                <img className = "w-100" src = {phImage}/>
            </div>
            }

        </>
    )
}

function PlaceholderCard(props){
    return(
        <div className="p-4 d-flex flex-row">
            <div className="">
                <img className = "ms-0 logo" src = {props.icon}/>
                
            </div>
            <div className="ms-1">
                <b>{props.heading}</b>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                </p>
            </div>
        </div>
    )
}

function SentimentPlaceholder(){
    const [width, setWindowDimensions] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <>
            <div className="rounded-4 bitcoinBox100 mt-4 ms-5 me-5 p-4">
                <h2>Sentiment</h2>
                <h4 className="text-secondary">
                    Key Events
                    <img className="infoLogo" src = {info}/>
                </h4>
                <div className="cardContain ms-4 me-4">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={(width > 900 ) ? 20 : 5}
                        slidesPerView={(width > 900 ) ? 2 : 1}
                        navigation
                    >   
                        <SwiperSlide>
                            <PlaceholderCard 
                                heading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."} 
                                icon = {icon1}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <PlaceholderCard 
                                heading={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} 
                                icon = {icon2}
                            />
                        </SwiperSlide>     
                        <SwiperSlide>
                            <PlaceholderCard 
                                heading={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod."} 
                                icon = {icon2}
                            />
                        </SwiperSlide>                
                    </Swiper>
                </div>
                <h4 className="text-secondary mt-4">
                    Analyst Estimates
                    <img className="infoLogo" src = {info}/>
                </h4>
                <div className="d-flex felx-row">
                    <div className="score text-success">
                        76%
                    </div>
                    <div className="tableAnalyst text-secondary d-flex flex-column p-4">
                        <table>
                            <tr>
                                <td>Buy</td>
                                <td >
                                    <div className="barArea buy bg-success"></div>
                                </td>
                                <td> 76%</td>
                            </tr>
                            <tr>
                                <td>Sell</td>
                                <td >
                                    <div className="barArea sell"></div>
                                </td>
                                <td> 8%</td>
                            </tr>
                            <tr>
                                <td>Hold</td>
                                <td >
                                    <div className="barArea hold bg-danger"></div>
                                </td>
                                <td> 16%</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

function BitcoinPlaceholder(){
    return(
        <div className="rounded-4 bitcoinBox100 mt-4 ms-5 me-5 p-4">
            <h2>About Bitcoin</h2>
            <h4 className="mt-4">What is Bitcoin?</h4>
            <p>
                Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as 
                money and a form of payment outside the control of any one person, group, 
                or entity, thus removing the need for third-party involvement in financial transactions. 
                It is rewarded to blockchain miners for verifying transactions and can be purchased on several exchanges.
                Bitcoin was introduced to the public in 2009 by an anonymous developer or group of developers using the name Satoshi Nakamoto.
            </p>
            <hr className="mt-4 mb-4"/>
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
            </p>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta 
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut 
                labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
                qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda 
                est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et 
                voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                svoluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
        </div>
    )
}

function TokenomicsPlaceholder(){
    return(
        <>
            <div className="mt-4 rounded-4 bitcoinBox100 ms-5 me-5 p-4">
                <h2>Tokenomics</h2>
                <h4 className="mt-4">Initial Distribution</h4>
                <div>
                    <img className = "chartImage" src = {phChart}/>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum.
                </p>
            </div>
        </>
    )
}
function TeamPlaceholder(){
    const [width, setWindowDimensions] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
        setWindowDimensions(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return(
        <>
            {(width > 900) ? 
            <div className="team mt-4 rounded-4 bitcoinBox100 ms-5 me-5 p-4">
                <h2>Team</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. 
                </p>
                {   team.map((member) => 
                    <div className="d-flex p-3 m-2 teamContainer rounded-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img className = "member" src = {member.image}/>
                            <b>{member.Name}</b>
                            <p className="text-secondary">Designation</p>
                        </div>
                        <div className="m-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum. 
                        </div>
                    </div>
                    )
                }
            </div>
            :
            <div className="mt-4 rounded-4 bitcoinBox100 ms-5 me-5 p-4">
                <h2>Team</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                    anim id est laborum. 
                </p>
                {   team.map((member) => 
                    <div className="d-flex p-3 m-2 teamContainer rounded-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img className = "member" src = {member.image}/>
                            <b>{member.Name}</b>
                            <p className="text-secondary">Designation</p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                            anim id est laborum. 
                        </div>
                    </div>
                    )
                }
            </div>
            }
        </>
    )
}
export {
    PerformancePlaceholder,
    BitcoinPlaceholder,
    TokenomicsPlaceholder,
    TeamPlaceholder,
    SentimentPlaceholder
};