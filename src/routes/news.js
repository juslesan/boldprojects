import React from 'react'
import './news.css'
import issue1 from '../img/issue_1_icon.png'
import issue2 from '../img/issue_2_icon.png'
import issue3 from '../img/ISSUE_3_Icon.png'
import issue4 from '../img/ISSUE_4_icon.png'
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
                <div className="newsListed">
                    <a href='/newspaper/2' style={{}}>   
                        <img src={issue2} alt="kuva" width="100%"></img>
                    </a>
                </div>
                <div className="newsListed">
                    <a href='/newspaper/3' style={{}}>   
                        <img src={issue3} alt="kuva" width="100%"></img>
                    </a>
                </div>
                <div className="newsListed">
                    <a href='/newspaper/4' style={{}}>   
                        <img src={issue4} alt="kuva" width="100%"></img>
                    </a>
                </div>
            </div>  
        </div>
    )
}

export default News