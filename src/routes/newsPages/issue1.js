import React from 'react'
import './issue1.css'
import pic1 from '../../img/issue1/horizontal.jpg'
import pic2 from '../../img/issue1/icewave.jpg'
import pic3 from '../../img/issue1/strut.jpg'
import pic4 from '../../img/issue1/teeth.jpg'

const Issue1 = () => {
    return (
        <div className="newsIssue1">
            <h1>Last to appear, first to go?</h1>
            
            <div style={{float: 'up'}}>
                <p style={{float: 'left', width: '48%'}}>The Baltic Sea is merely 12000 years old, making it the youngest sea in the world. It connects nine countries via its borders however, its catchment area is even larger, meaning that a total of 14 countries are connected to the Baltic Sea through various bodies of water. In those countries over 85 million people are affected by the ecosystem of the Baltic Sea. 
                </p>
                <img src={pic3} alt="strut" width='48%' style={{float: 'right'}}></img>

            </div>
            <div style={{float: 'left', marginBottom:'10v'}}>
                <p>
                    <br/>
                    The flora and fauna of the Baltic Sea is unique and sensitive. Since the water is brackish, which means that it consists of salt water and fresh water, only a small amount of living things have adapted to its climate. The water is too sweet for some creatures and too salty for others. Environmental changes are not helping their adaptation and the conditions are getting worse. 
                </p>

                <p>
                    <br/>
                    54 meters is the average depth of the Baltic Sea, a small number when you consider the 420 000km² area it covers. Comparing that to the average depth of the mediterranean, one can understand that the possibility for life is a bit smaller. Since the water isn’t that deep, the oxygen level of the Baltic Sea is quite low. In fact, seven out of the ten largest marine dead zones exist in the Baltic Sea. A marine dead zone is an area of water where the oxygen level has run out. At worst the area can be up to 90 000 km², that is approximately as big as the country of Portugal.  
                </p>
                <img src={pic2} alt="icewawe" width='90%' style={{marginTop: '5vh',marginBottom: '5vh', position: 'relative'}}></img>

                <p>
                    The Baltic Sea is one of the most polluted seas in the world. Besides the obvious human made problems like eutrophication, maritime action and hazardous waste the geographical location of the sea results in its dirty waters. The Danish Straits are the only access point for salt water and it takes up to 30 years for the water in the sea to fully exchange. 
                </p>

                <div style={{marginTop: '5vh', float: 'up'}}>
                    <img src={pic1} alt="horizon" width='48%' style={{float: 'right', margin: '5px', marginLeft: '2vw'}}></img>
                    <p style={{}}>
                        Governments, foundations and other organizations are working to improve the state of the Baltic Sea, but there is also a lot we as individuals can do. Using public transport and walking instead of using the car decreases the nitrogen compounds entering the water; eating fish that is sustainably fished stops the consumption of endangered species and eating less                         meat decreases the emission of carbon dioxide and nutrients that are caused by meat production. These are only a few options to do, <a href="https://www.bsag.fi/en/front-page/">here</a> you can read more about the Baltic Sea and ways of making a change.

                    </p>
                </div>
                {/* <div style={{position: 'relative', top: '0px', float: 'right'}}>
                    <p>
                    </p>
                    
                </div> */}

                <img src={pic4} alt="teeth" width='90%' style={{marginTop: '5vh',marginBottom: '5vh', position: 'relative'}}></img>

                <p style={{textAlign: 'center'}}>
                What can we do?
                <br/>

                <br/>
                Eat less meat.
                <br/>
                Eat fish that is sustainably fished.
                <br/>
                Use public transport or walk instead of taking the car.
                </p>
            </div>
        </div>
    )
}

export default Issue1