import React from 'react'
import '../index.css'
import About from '../img/About.jpg'
import B100 from '../img/B100.jpg'
import BL from '../img/BL.jpg'
import BV_Ikon from '../img/BV_Ikon.jpg'
import NP_Ikon from '../img/NP_ikon.jpg'
import logo from '../img/logo.png';
import video from '../video/promo.mp4'
// import video2 from '../video/promo2.mp4'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const Frontpage = () => {
    return (
        <div>
            <div className="contact">
                <a href="/contact">Contact</a> 
            </div> 
            <div className="logoContainer">
                 <a href='/' style={{}}>   
                    <img src={logo} alt='logo' width='30%' style={{position: 'relative', right: '0vw'}}></img>
                </a>
            </div>
            <div className="front" style={{position: 'relative'}}>
                <div style={{position: 'absolute', left: '-16vw', top: '14vh', zIndex: '96'}}>
                <Video autoPlay loop muted
                    controls={[]}
                    onCanPlayThrough={() => {
                    }}
                    style={{width: "72%"}}>
                    <source src={video} type="video/webm" />
                    {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
                </Video>
                </div>
                <div style={{position: 'relative', top: '85vh'}}>
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
            </div>
        </div>
    )
}

export default Frontpage