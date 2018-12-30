import React from 'react'
import Back from '../img/backhome.png'

const Backhome = () => {
    return (
        <div>
            <a href= '/'>
                <img className="backhome" src={Back} alt="back">
                </img>
            </a>
        </div>
    )
}

export default Backhome