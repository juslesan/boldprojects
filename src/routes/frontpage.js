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
                        <div className="linkImgContainer">
                            <a href='/voyage'>
                                <img className="linkImg" src={BV_Ikon} alt='logo' style={{right: '0px'}}></img>
                            </a>
                        </div>
                    </div>
                </div>


                <div className="frontCont">
                    <div className="leftLean">
                        <div className="linkImgContainer">
                            <a href='/marathon'>
                                <img className="linkImg" src={B100} alt='logo'></img>
                            </a>  
                        </div>                 
                    </div>
                </div>
                
                <div className="frontCont">
                    <div className="rightLean">
                        <div className="linkImgContainer">
                            <a href='/news'>
                                <img className="linkImg" src={NP_Ikon} alt='logo' style={{right: '0px'}}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="frontCont">
                    <div className="leftLean">
                        <div className="linkImgContainer">
                            <a href='/blog'>
                                <img className="linkImg" src={BL} alt='logo' width='100%' ></img>
                            </a> 
                        </div>
                    </div>
                </div>

                <div className="frontCont" >
                    <div className="rightLean">
                        <div className="linkImgContainer">
                            <a href='/gallery'>
                                <img className="linkImg" src={About} alt='logo' width='100%' style={{right: '0px'}}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="frontCont">
                    <div className="leftLean">
                        <div className="linkImgContainer">
                            <a href='/about'>
                                <img className="linkImg" src={About} alt='logo'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Frontpage