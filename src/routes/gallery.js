import React from 'react'
import './gallery.css'
// import Backhome from '../components/backhome.js'
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
import Fuel from '../img/gallery/Fuel.jpeg'
import Fuel2 from '../img/gallery/Fuel2.jpeg'
import Fuel3 from '../img/gallery/Fuel3.jpeg'
import Fuel4 from '../img/gallery/Fuel4.jpeg'
import Fuel5 from '../img/gallery/Fuel5.jpeg'
import water from '../img/gallery/water.jpg'


const Gallery = () => {
    return(
        <div className='gallery'>
            <h1>
                Gallery
            </h1>
            <div className='galleryWrapper'>
                <div className="galleryCol1">
                    <a href={Pic5}>
                        <img src={Pic5} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol2">
                    <a href={Pic6}>
                        <img src={Pic6} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol3">
                    <a href={Fuel}>
                        <img src={Fuel} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol1">
                    <a href={Fuel4}>
                        <img src={Fuel4} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol2">
                    <a href={Pic1}>
                        <img src={Pic1} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol3">
                    <a href={Pic9}>
                        <img src={Pic9} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol1">
                    <a href={Pic13}>
                        <img src={Pic13} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol2">
                    <a href={Pic2}>
                        <img src={Pic2} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol3">
                    <a href={Fuel3}>
                        <img src={Fuel3} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol1">
                    <a href={Fuel5}>
                        <img src={Fuel5} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol2">
                    <a href={Pic3}>
                        <img src={Pic3} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol3">
                    <a href={Pic11}>
                        <img src={Pic11} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol1">
                    <a href={Pic7}>
                        <img src={Pic7} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol2">
                    <a href={Pic4}>
                        <img src={Pic4} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol3">
                    <a href={Fuel2}>
                        <img src={Fuel2} alt="pic"></img>
                    </a>
                </div>
                <div className="galleryCol1">
                    <a href={water}>
                        <img src={water} alt="pic"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Gallery