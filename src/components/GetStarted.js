import '../styles/getStarted.css'
import dispImage from '../assets/phoneImage.png'

export default function GetStarted(){
    return (
        <>
            <div className="p-4 d-flex flex-column bg-primary mt-5  m-4 rounded-4 text-light justify-content-center align-items-center">
                <span className="titleText" >Get Started with cryptoXmarket for FREE</span>
                <p className="infoPara">
                    with our range of features that you can equip for
                    free, cryptoXmarket allows you to be more educated and aware
                    of your tax reports.
                </p>
                <img src = {dispImage}/>
                <button className=' pb-3 btn btn-light'>
                    Get Started for FREE
                    <span className='arrowright'>&rarr;</span> 
                </button>
            </div>
        </>
    )
}