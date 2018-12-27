import React from 'react'
import Back from '../img/backhome.png'

const Backhome = () => {
    return (
        <div>
            <a href= '/'>
                <img src={Back} alt="back" width='40px' style={{position: 'fixed',
                                                                left: '0vw',
                                                                top: '0vw',
                                                                margin: '10px'}}>
                </img>
            </a>
        </div>
    )
}

export default Backhome