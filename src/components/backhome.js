import React from 'react'
import Back from '../img/backhome.png'

const Backhome = () => {
    return (
        <div>
            <a href= '/'>
                <img src={Back} alt="back" width='5%' style={{position: 'fixed',
                                                                left: '0vw',
                                                                top: '0vw',
                                                                marginTop: '2vh',
                                                                marginLeft: '4.5vw'}}>
                </img>
            </a>
        </div>
    )
}

export default Backhome