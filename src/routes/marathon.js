import React from 'react'
import '../index.css'
import Backhome from '../components/backhome'
import B100 from '../img/B100_Illu.png'
import water from '../img/gallery/water.jpg'
const Marathon = () => {
    return(
        <div className="marathon">
            <Backhome/>
            <h1>
                Bold 100
            </h1>
            <img src={B100} alt="picture" width="25%" style={{marginBottom: '50px'}}></img>
            <p>
                Since we enjoyed ourselves so much during our 100 km run, we thought we would 
                give others the same opportunity. In the summer of 2019 we will organize the 
                first public Bold100 run. The race will go through the capital region and consist 
                of a mix of rural and urban areas. The prize to participate and all other incomes 
                will go directly to our Baltic Sea fund.    
            </p>
            <img src={water} alt="picture" width="65%" style={{marginTop: '50px'}}></img>
        
        </div>
    )
}

export default Marathon