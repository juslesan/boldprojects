import React from 'react'
import YouTube from 'react-youtube';
import './vlog.css'

const Vlog2 = () => {
    return (
        <div className="vlog">
            <YouTube
                videoId="fezovbIt8yg"
                className="embedded"
            />
        </div>
    )
}

export default Vlog2