import React from 'react'
import './issue4.css'
import pic1 from '../../img/issue4/_DSF3932.jpg'
import pic2 from '../../img/issue4/_DSF3948.jpg'
import pic3 from '../../img/issue4/_DSF4033.jpg'
import pic4 from '../../img/issue4/_DSF4154.jpg'
import pic5 from '../../img/issue4/_DSF4167.jpg'
import pic6 from '../../img/issue4/_DSF4187.jpg'
import pic7 from '../../img/issue4/_DSF4156.jpg'


const Issue4 = () => {
    return (
        <div className="newsIssue4">
            <h1>Eco-friendly boating</h1>


           <p> The immensely beautiful archipelago turns into home for many Finns during the summer, when the all-year-round residents are accompanied by thousands of holiday residents and tourists. For some, the whole summer is spent in the Finnish waterways and the Finns adore the sea. Although the summers in the archipelago are close to magical the sheer amount of boaters in the summer result in a heavy liability on the marine environment. </p>
            
           <div className="issue4ImgWrapper1">
                <div className="issue4Img1">
                    <img src={pic7} alt="pic1"></img>
                </div>
                <div className="issue4Img2">
                    <img src={pic3} alt="pic2"></img>
                </div>
            </div>

            <p>A worrying factor in the summer is the toxic paint that covers the bottom of the boat. The purpose of the paint, also known as anti-fouling, is to restrain organisms such as barnacles from attaching to the bottom. When attached they create resistance forcing boats to push harder to maintain the desired speed. This increases fuel consumption and it is no surprise that fuel is harmful for the environment. But anti-fouling paint contains zinc and copper which is also damaging to the nature. </p>

            <p>There are, however, certain more eco-friendly alternatives to taking care of the boat. A pressure washer or a brush washer can be used to get rid of the organisms. These only work if the boat has not yet been painted since the pressure can otherwise also rid the boat of its paint. If possible, the use of a boatlift, a device that lifts the boat above water, is a convenient solution since painting and cleaning are both unnecessary in that case. Also in areas like the Bay of Bothnia and certain lakes there is no need for antifouling because of the low salinity level.</p> 


            <div className="issue4ImgWrapper2">
                <div className="issue4Img3">
                    <img src={pic2} alt="pic1"></img>
                </div>
                <div className="issue4Img4">
                    <img src={pic4} alt="pic2"></img>
                </div>
            </div>

            <p>For a better understanding of the current condition of the Baltic Sea we met with Stig Sundström, a retired fisherman who lives on an island just outside Tammisaari. His location and trade makes him a perfect witness to the change that has occurred in the Baltic Sea. As a young fisherman Sundström used to fish salmon and Baltic herring, nowadays it is mostly bass that gets caught. Because of pollution caused by maritime traffic, mostly in the Gulf of Finland, the quantity of fish has decreased significantly. “You need another job to afford fishing” says Sundström who retired a couple of years ago. The roe of the fish cannot survive in the polluted conditions and it is not only the fish that struggle, the condition of seaweed such as bladder wrack has also worsened in recent years. </p>

            <p>Sundström himself says that he feels guilt everytime he puts on his boat engine but for him it is his instrument to make a living. Besides if you take care of your boat in the right way the damages on the Baltic Sea reduces. </p>

            <div className="issue4ImgWrapper3">
                <div className="issue4Img5">
                    <img src={pic5} alt="pic1"></img>
                </div>
                <div className="issue4Img6">
                    <img src={pic6} alt="pic2"></img>
                </div>
            </div>
            <div style={{textAlign:"center", fontWeight: 600}}>
                <div className="newsBox" style={{border: "solid 2px black", borderRadius: "2px", padding: "2vw"}}>
                    <p style={{marginBottom:"3vw"}}>
                    What can we do?
                    </p>
                    <p>
                    Use a boat lift.
                    </p>
                    <p>
                    Avoid painting the boat in areas where it is not needed.
                    </p>
                    <p>
                    Wash the boat with a pressure washer or with a brush washer.
                    </p>
                </div>
                <div className="newsBox" style={{border: "solid 2px black", borderRadius: "2px", padding: "2vw", marginTop: "3vw"}}>
                    <p style={{marginTop: "3vw"}}>
                        
                    Roe - Rom, Mäti
                    </p>
                    <p>
                    Baltic herring - Strömming, Silakka
                    </p>
                    <p>
                    Bass - Abborre, Ahven
                    </p>
                    <p>
                    Bladder wrack - Blåstång, Rakkohauru
                    </p>

                    
                    <p style={{fontWeight: 500, marginTop: "3vw"}}>
                        Further guidelines for taking care of your boat in an eco-friendly manner:<br/> 
                        <a href="http://www.hallskargardenren.fi/sv/in_english/environmental_information/lets_take_a_look_at_boat_bottoms">
                            Keep the Archipelago Tidy Association
                        </a>
                    </p>
                </div>
                <img alt="footer" className="issue4FooterPic" src={pic1}/>

            </div>
        </div>
    )
}

export default Issue4