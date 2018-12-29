import React from 'react'
import Back from '../img/backhome.png'

const Backhome = () => {
    return (
        <div>
            <a href= '/'>
                <img src={Back} alt="back" width='8%' style={{position: 'fixed',
                                                                left: '0vw',
                                                                top: '0vw',
                                                                marginTop: '1vw',
                                                                marginLeft: '3vw'}}>
                </img>
            </a>
        </div>
    )
}

export default Backhome