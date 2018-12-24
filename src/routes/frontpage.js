import React from 'react'
import '../index.css'

const Frontpage = () => {
    return (
        <div className="front" >

                <div className="frontCont">
                    <div className="rightLean">
                        <a href='/voyage'>
                            Bold Voyage
                        </a>
                    </div>
                </div>


                <div className="frontCont">
                    <div className="leftLean">
                        <a href='/marathon'>
                            Bold 100
                        </a>                    
                    </div>
                </div>
                
                <div className="frontCont">
                    <div className="rightLean">
                        <a href='/news'>
                            Newspaper
                        </a> 
                    </div>
                </div>
                <div className="frontCont">
                    <div className="leftLean">
                        <a href='/blog'>
                            Blog
                        </a> 
                    </div>
                </div>

                <div className="frontCont" >
                    <div className="rightLean">
                        <a href='/gallery'>
                            Gallery
                        </a> 
                    </div>
                </div>

                <div className="frontCont">
                    <div className="leftLean">
                        <a href='/about'>
                            About
                        </a> 
                    </div>
                </div>
            </div>
    )
}

export default Frontpage