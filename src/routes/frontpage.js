import React from 'react'
import '../index.css'
// import Backhome from '../components/backhome.js'
import logo from '../img/Bold_Projects_black.png'
import About from '../img/About_icon_new_1.png'
import Gallery from '../img/Gallery_icon.png'
import B100 from '../img/B100new.png'
import BL from '../img/Blog_vlog_icon_new.png'
import BV_Ikon from '../img/Bold_Voyage_new.png'
import NP_Ikon from '../img/Newspaper_new.png'
// import logo from '../img/logo.png';
import logo2 from '../img/Bold_Logo_Orange.png'
import video from '../video/promo.mp4'
// import video2 from '../video/promo2.mp4'

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const Frontpage = () => {
    return (
        <div style={{marginBottom: '30px'}}>
            {/* <Backhome/> */}

            <div className="logoContainer">
                 <a href='https://www.boldvoyage.fi/' className="text" style={{}}> 
                    
                    <p style={{textAlign: 'center'}}>
                        Donate
                        to<br/>
                        the<br/>
                        Baltic<br/>
                        Sea<br/>
                        here!
                    </p>  
                    {/* <img className="frontLogo" src={logo2} alt='logo'></img> */}
                </a>
            </div>
            <div>
                <img className="newFrontLogo" src={logo} alt='logo'></img>
            </div>

            <div className="front" style={{position: 'relative'}}>
                {/* <h1 style={{fontSize: "45px", textAlign: 'center'}}>
                    Bold Projects
                </h1> */}
                <a className="videoWrapper" href="/intro">
                    <div className="videoCont">
                        <Video autoPlay loop muted
                            controls={[]}
                            onCanPlayThrough={() => {
                            }}
                            style={{width: "100%"}}>
                            <source src={video} type="video/mp4" />
                            
                            {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
                        </Video>
                    </div>
                </a>
                <div className="iconLinkCont">
                    <div className="frontCont">
                        <div className="rightLean">
                            <div className="linkImgContainer">
                                <a href='/voyage'>
                                    <img className="linkImg" src={BV_Ikon} alt='logo'></img>
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
                                <a href='/about'>
                                    <img className="linkImg" src={About} alt='logo'></img>
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
                                <a href='/blogs'>
                                    <img className="linkImg" src={BL} alt='logo'></img>
                                </a> 
                            </div>
                        </div>
                    </div>

                    <div className="frontCont" >
                        <div className="leftLean">
                            <div className="linkImgContainer">
                                <a href='/gallery'>
                                    <img className="linkImg" src={Gallery} alt='logo'></img>
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