import React from 'react'
import '../index.css'
import Backhome from '../components/backhome'
import illu from '../img/BV_Wave_Illu.png'
import Bernhard from '../img/Bernhard.jpg'
import Linus from '../img/Linus.jpg'
import Valtteri from '../img/Valtteri.jpg'
import Eddie from '../img/Eddie.jpg'

const Voyage = () => {
    return(
        <div className="voyage">
            {/* <Backhome/> */}
            <h1>
                Bold Voyage
            </h1>
            <img src={illu} alt="picture" width="25%" style={{marginBottom: '50px'}}></img>
            
            <p>
            After completing the Bold100 project in the summer of 2018 we instantly began to think about possible upcoming projects. Two thoughts were central at that moment: it had to be extreme and it had to be charitable. The climate report from IPCC had been released that same year and a lot of focus was on the Baltic Sea and its alarmingly bad condition. This gave us the idea to raise funds for the Baltic Sea. Now we had to come up with a way of challenging ourselves in an unfamiliar element, the sea. 
            <br/><br/>
            We decided that rowing would be the perfect activity for us. It requires a lot of teamwork, which is an essential part of our projects. It also felt logical to combine rowing with the Baltic Sea. The journey would start in Stockholm and finish in Helsinki, making it a distance of approximately 500 km. No one in the team had any experience in rowing and we wanted to know if this was even possible. We contacted a couple of rowing experts in Finland that were kind enough to meet us. The meeting started with the inspiring words: “Your project is really idiotic but possible”. That was all the confirmation we needed. 
            <br/><br/>

            Now we are training on a daily basis and preparing ourselves to row over the Baltic Sea in july of 2019.


            </p>
            <h1 style={{marginTop: '50px'}}>
                The Rowing Team
            </h1>
            <div className="rowingTeam">
                <div className="rowingCol1">
                    <img src={Valtteri} alt="Valtteri" width="100%"></img>
                    <p>
                        Valtteri Ikäheimo
                    </p>
                </div>

                <div className="rowingCol2">
                    <img src={Bernhard} alt="Bernhard" width="100%"></img> 
                    <p>
                        Bernhard Forstén
                    </p>
                </div>

                <div className="rowingCol1">
                    <img src={Eddie} alt="Eddie" width="100%"></img>
                    <p>
                        Eddie Myrskog
                    </p>
                </div>

                <div className="rowingCol2">
                    <img src={Linus} alt="Linus" width="100%"></img>
                    <p>
                        Linus Lehto
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Voyage