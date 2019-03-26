import React from 'react'
import YouTube from 'react-youtube';
import './intro.css'

const Intro = () => {
    const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      }
    return (
        <div className="intro">
            <YouTube
                videoId="3uCAaefSf6o"
                className="embedded"
                opts={opts}
            />
        </div>
    )
}

export default Intro