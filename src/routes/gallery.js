import React from 'react'
import '../index.css'
import Backhome from '../components/backhome.js'
import Pic1 from '../img/gallery/Pic1.jpg'
import Pic2 from '../img/gallery/Pic2.jpg'
import Pic3 from '../img/gallery/Pic3.jpg'
import Pic4 from '../img/gallery/Pic4.jpg'
import Pic5 from '../img/gallery/Pic5.jpg'
import Pic6 from '../img/gallery/Pic6.jpg'
import Pic7 from '../img/gallery/Pic7.jpg'
import Pic9 from '../img/gallery/Pic9.jpg'
import Pic11 from '../img/gallery/Pic11.jpg'
import Pic13 from '../img/gallery/Pic13.jpg'
import Fuel from '../img/gallery/Fuel.jpg'
import Fuel2 from '../img/gallery/Fuel2.jpg'
import Fuel3 from '../img/gallery/Fuel3.jpg'
import Fuel4 from '../img/gallery/Fuel4.jpg'
import Fuel5 from '../img/gallery/Fuel5.jpg'
import water from '../img/gallery/water.jpg'


const Gallery = () => {
    return(
        <div className='gallery'>
            <h1 style={{marginTop: '75px', marginBottom: '0px'}}>
                Gallery
            </h1>
            <div className='galleryWrapper'>
                <div className="galleryCol1">
                    <img src={Pic5} alt="picture"></img>
                </div>
                <div className="galleryCol2">
                    <img src={Pic6} alt="picture"></img>
                </div>
                <div className="galleryCol3">
                    <img src={Fuel} alt="picture"></img>
                </div>
                <div className="galleryCol1">
                    <img src={Fuel4} alt="picture"></img>
                </div>
                <div className="galleryCol2">
                    <img src={Pic1} alt="picture"></img>
                </div>
                <div className="galleryCol3">
                    <img src={Pic9} alt="picture"></img>
                </div>
                <div className="galleryCol1">
                    <img src={Pic13} alt="picture"></img>
                </div>
                <div className="galleryCol2">
                    <img src={Pic2} alt="picture"></img>
                </div>
                <div className="galleryCol3">
                    <img src={Fuel3} alt="picture"></img>
                </div>
                <div className="galleryCol1">
                    <img src={Fuel5} alt="picture"></img>
                </div>
                <div className="galleryCol2">
                    <img src={Pic3} alt="picture"></img>
                </div>
                <div className="galleryCol3">
                    <img src={Pic11} alt="picture"></img>
                </div>
                <div className="galleryCol1">
                    <img src={Pic7} alt="picture"></img>
                </div>
                <div className="galleryCol2">
                    <img src={Pic4} alt="picture"></img>
                </div>
                <div className="galleryCol3">
                    <img src={Fuel2} alt="picture"></img>
                </div>
                <div className="galleryCol1">
                    <img src={water} alt="picture"></img>
                </div>
            </div>
        </div>
    )
}

export default Gallery