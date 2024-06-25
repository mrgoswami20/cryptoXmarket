import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import option from '../assets/option.webp';
import "../styles/navbar.css";
import { CiSearch } from "react-icons/ci";

export default function Navbar(){
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
            {(width> 900) ? 
                <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light w-100 shadow">
                    <a className="navbar-brand" href="#">   
                        <img className="logo" src={logo}></img>
                    </a>
                    <input type='test' placeholder='Find crypto..' className='searchBar '  /><CiSearch className='search-icon' />
                    <div className="navBarButtons d-flex flex-row gap-4">
                        <span className="d-flex align-items-center navHeros">Crypto Taxes</span>
                        <span className="d-flex align-items-center navHeros">Free Tools</span>
                        <span className="d-flex align-items-center navHeros">Resources Center</span>
                        <button className='btn btn-primary rounded navHeros'> Get Started</button>
                    </div>
                </nav>:
                <nav className="d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light w-100 shadow">
                    <a className="navbar-brand" href="#">   
                        <img className="logo" src={logo}></img>
                    </a>
                    <div className="navBarButtons d-flex flex-row gap-4">
                        <img className='logo' src = {option}/>
                    </div>
                </nav>
            }
        </>
    )
}