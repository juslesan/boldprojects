import React from 'react'
import Back from '../img/backhome.png'

const Backhome = () => {
    return (
        <div>
            <a href= '/'>
                <img src={Back} alt="back" width='40px' style={{marginTop: '5px'}}></img>
            </a>
        </div>
    )
}

export default Backhome