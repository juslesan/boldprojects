import React from 'react'
import '../index.css'
import Backhome from '../components/backhome.js'

import About from '../img/About_icon_new.png'
import Gallery from '../img/Gallery_icon.png'
import B100 from '../img/B100new.png'
import BL from '../img/Blog_new.png'
import BV_Ikon from '../img/BV_new.png'
import NP_Ikon from '../img/NP_new.png'
import logo from '../img/logo.png';
import video from '../video/promo.mp4'
// import video2 from '../video/promo2.mp4'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const Frontpage = () => {
    return (
        <div style={{marginBottom: '30px'}}>
            <Backhome/>

            <div className="contact">
                <a href="/contact">Contact</a> 
            </div> 
            <div className="logoContainer">
                 <a href='/' style={{}}>   
                    <img src={logo} alt='logo' width='35%' style={{position: 'relative', right: '0vw'}}></img>
                </a>
            </div>
            <div className="front" style={{position: 'relative'}}>
                {/* <h1 style={{fontSize: "45px", textAlign: 'center'}}>
                    Bold Projects
                </h1> */}
                <div style={{position: 'absolute', left: '-5vw', top: '22.5vh', zIndex: '96'}}>
                <Video autoPlay loop muted
                    controls={[]}
                    onCanPlayThrough={() => {
                    }}
                    style={{width: "105%"}}>
                    <source src={video} type="video/webm" />
                    {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
                </Video>
                </div>
                <div style={{position: 'relative', top: '92vh'}}>
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
                                    <img className="linkImg" src={B100} alt='logo' style={{left: '0px'}}></img>
                                </a>  
                            </div>                 
                        </div>
                    </div>
                    <div className="frontCont">
                        <div className="rightLean">
                            <div className="linkImgContainer">
                                <a href='/about'>
                                    <img className="linkImg" src={About} alt='logo' style={{right: '0px'}}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="frontCont">
                        <div className="leftLean">
                            <div className="linkImgContainer">
                                <a href='/news'>
                                    <img className="linkImg" src={NP_Ikon} alt='logo'></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="frontCont">
                        <div className="rightLean">
                            <div className="linkImgContainer">
                                <a href='/blog'>
                                    <img className="linkImg" src={BL} alt='logo' width='100%' style={{right: '0px'}}></img>
                                </a> 
                            </div>
                        </div>
                    </div>

                    <div className="frontCont" >
                        <div className="leftLean">
                            <div className="linkImgContainer">
                                <a href='/gallery'>
                                    <img className="linkImg" src={Gallery} alt='logo' width='100%'></img>
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