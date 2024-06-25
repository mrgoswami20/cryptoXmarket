import '../styles/dispPage.css';
import GetStarted from './GetStarted.js';
import Bitcoin from './Bitcoin.js';
import Trending from './Trending.js';
import { useEffect, useState } from 'react';

export default function DispPage(props){
    return(
        <>  
            <div className="d-flex flex-row">
                <div className=" leftdiv trend mt-5 ms-5 me-4 rounded-4">
                    <Bitcoin coin = {props.coin}/>
                </div>
                <div className="rightdiv">
                    <GetStarted/>
                    <Trending/>
                </div>
            </div>
        </>
    )
}