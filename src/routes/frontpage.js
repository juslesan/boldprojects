import React from 'react'
import '../index.css'
import About from '../img/About.jpg'
import B100 from '../img/B100.jpg'
import BL from '../img/BL.jpg'
import BV_Ikon from '../img/BV_Ikon.jpg'
import NP_Ikon from '../img/NP_ikon.jpg'

const Frontpage = () => {
    return (
        <div className="front" style={{position: 'relative'}}>

                <div className="frontCont">
                    <div className="rightLean">
                        <img src={BV_Ikon} alt='logo' width='150px' style={{position: 'absolute', right: '0px', zIndex: '97'}}></img>

                        <a href='/voyage'>
                            <div className='overlayLink' style={{right: '0px'}}>
                                {/* <p>Bold Voyage</p> */}
                            </div>
                        </a>
                    </div>
                </div>


                <div className="frontCont">
                    <div className="leftLean">
                        <img src={B100} alt='logo' width='150px' style={{position: 'absolute',  zIndex: '97'}}></img>

                        <a href='/marathon'>
                            <div className= 'overlayLink'>
                                {/* <p>Bold Voyage</p> */}
                            </div>
                        </a>                   
                    </div>
                </div>
                
                <div className="frontCont">
                    <div className="rightLean">
                        <img src={NP_Ikon} alt='logo' width='150px' style={{position: 'absolute', right: '0px', zIndex: '97'}}></img>

                        <a href='/news'>
                            <div className= 'overlayLink' style={{right: '0px'}}>
                                {/* <p> Bold Voyage</p> */}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="frontCont">
                    <div className="leftLean">
                        <img src={BL} alt='logo' width='150px' style={{position: 'absolute',  zIndex: '97'}}></img>

                        <a href='/blog'>
                            <div className= 'overlayLink'>
                               {/* <p> Bold Voyage </p> */}
                            </div>
                        </a> 
                    </div>
                </div>

                <div className="frontCont" >
                    <div className="rightLean">
                        <img src={About} alt='logo' width='150px' style={{position: 'absolute', right: '0px',  zIndex: '97'}}></img>

                        <a href='/gallery'>
                            <div className= 'overlayLink' style={{right: '0px'}}>
                                <p> Bold Voyage</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="frontCont">
                    <div className="leftLean">
                        <img src={About} alt='logo' width='150px' style={{position: 'absolute',  zIndex: '97'}}></img>

                        <a href='/about'>
                            <div className= 'overlayLink'>
                                <p>Bold Voyage</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Frontpage