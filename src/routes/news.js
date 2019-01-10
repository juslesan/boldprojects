import React from 'react'
import './news.css'
import issue1 from '../img/issue_1_icon.png'

const News = () => {
    return(
        <div className="newspaper">
            <h1>
                Newspaper
            </h1>
            <div className="newsWrapper" style={{position: 'relative'}}>
                <div className="newsListed">
                    <a href='/newspaper/1' style={{}}>   
                        <img src={issue1} alt="kuva" width="100%"></img>
                    </a>
                </div>
                
            </div>  
        </div>
    )
}

export default News