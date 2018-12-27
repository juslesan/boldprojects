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
            <Backhome/>
            <h1>
                Bold Voyage
            </h1>
            <img src={illu} alt="picture" width="25%" style={{marginBottom: '50px'}}></img>
            
            <p>
                After completing the Bold100 project in the summer of 2018 we instantly began 
                to think about possible upcoming projects. Two thoughts were central at that 
                moment: It had to be more extreme and it had to be charitable. The climate 
                report from IPCC had been released that same year and a lot of focus was on 
                the Baltic Sea and its alarmingly bad condition. This gave us the idea to make 
                our projects donations to go into a fund that works to improve the state of the 
                Baltic Sea. Now we just had to find something extreme to do that involved the sea. 
                Everyone felt quite uncomfortable with the idea of swimming for a longer distance 
                and actually all watersports were unfamiliar to us. But then we decided that rowing
                 would be the perfect activity for us. It requires a lot of teamwork which is an 
                 essential part of our projects and it was logical to combine rowing with the Baltic 
                 Sea. We decided that the route would go from Stockholm to Helsinki, making it a 
                 distance of approximately 500 km. No one in the team had any experience with rowing 
                 and we wanted to know if this was even possible. So we contacted a couple of rowing 
                 experts in Finland, these were people that had rowed their whole life and also trained 
                 at a olympic high level. They were kind enough to meet us and discuss our project. The 
                 meeting started with the inspiring words: “Your project is really stupid but possible”. 
                 And that was all the confirmation we needed. 
                <br/><br/>
                The following weeks were dedicated to plan the logistics for our rowing project that 
                we had named Bold Voyage since this truly is a long and bold journey by water. We 
                came in contact with a person who was willing to lend his Ocean Rowing Boat to us 
                for a month in the summer. Then logistics, training schedule and sponsorships were 
                planned.
            </p>
            <h1>
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