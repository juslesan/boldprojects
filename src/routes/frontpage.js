import React from 'react'
import '../index.css'

const Frontpage = () => {
    return (
        <div className="front" >

                <div className="frontCont">
                    <div className="rightLean">
                        <a href='/voyage'>
                            pic here
                        </a>
                    </div>
                </div>


                <div className="frontCont">
                    <div className="leftLean">
                        <a href='/marathon'>
                            pic here
                        </a>                    
                    </div>
                </div>
                
                <div className="frontCont">
                    <div className="rightLean">
                        <a href='/news'>
                            pic here
                        </a> 
                    </div>
                </div>
                <div className="frontCont">
                    <div className="leftLean">
                        <a href='/blog'>
                            pic here
                        </a> 
                    </div>
                </div>

                <div className="frontCont" >
                    <div className="rightLean">
                        <a href='/gallery'>
                            pic here
                        </a> 
                    </div>
                </div>

                <div className="frontCont">
                    <div className="leftLean">
                        <a href='/about'>
                            pic here
                        </a> 
                    </div>
                </div>
            </div>
    )
}

export default Frontpage