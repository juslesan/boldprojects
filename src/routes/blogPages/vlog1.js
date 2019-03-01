import React from 'react'
import YouTube from 'react-youtube';
import './vlog.css'

const Vlog1 = () => {
    return (
        <div className="vlog">
            <YouTube
                videoId="vQKf-IFN4DU"
                className="embedded"
            />
        </div>
    )
}

export default Vlog1