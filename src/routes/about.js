import React from 'react'
import '../index.css'
import Eddie from '../img/Eddie.jpg'
import Bernhard from '../img/Bernhard.jpg'
import Linus from '../img/Linus.jpg'
import Pernilla from '../img/Pernilla.jpg'
import Thomas from '../img/Thomas.jpg'
import Valtteri from '../img/Valtteri.jpg'
import Victor from '../img/Victor.jpg'
import Backhome from '../components/backhome'

const About = () => {

    return(
        <div className="about">
            {/* <Backhome/> */}
            <div className="aboutBulk">
                <h1>About</h1>
                <p style={{marginBottom: '50px'}}>
                    Bold Projects is a nonprofit association founded in Helsinki in 2018. 
                    With our annual daring endeavors we want to help charities raise awareness and funds. 
                    Our projects are eco-friendly, creative and bold.
                </p>

                {/* <hr></hr> */}

                <h2 style={{marginTop: '25vw', marginBottom: '50px'}}>The Doers</h2>
                <div className="doerWrapper" style={{position: 'relative'}}>
                    <div className="doer">
                        <img src={Bernhard} alt="kuva" width="100%"></img>
                        <p>Co-founder</p>
                        <p>Bernhard <br/> Forstén</p>
                    </div>
                    <div className="doer">
                        <img src={Eddie} alt="kuva" width="100%"></img>
                        <p>Co-founder</p>
                        <p>Eddie <br/> Myrskog</p>

                    </div>
                    <div className="doer">
                        <img src={Linus} alt="kuva" width="100%"></img>
                        <p>Co-founder</p>
                        <p>Linus <br/> Lehto</p>
                    </div>
                    <div className="doer">
                        <img src={Valtteri} alt="kuva" width="100%"></img>
                        <p>Co-founder</p>
                        <p>Valtteri <br/> Ikäheimo</p>

                    </div>
                    <div className="doer">
                        <img src={Thomas} alt="kuva" width="100%"></img>
                        <p>Co-founder</p>
                        <p>Thomas <br/> Lundström</p>

                    </div>
                    <div className="doer">
                        <img src={Pernilla} alt="kuva" width="100%"></img>
                        <p>Member</p>
                        <p>Pirnilla <br/> Harjula</p>

                    </div>
                    <div className="doer">
                        <img src={Victor} alt="kuva" width="100%"></img>
                        <p>Member</p>
                        <p>Victor <br/> Lindahl</p>
                    </div>
                </div>
                {/* <hr></hr>    */}
                <h2 style={{position: 'relative', float: 'down', marginTop: '100px', marginBottom: '40px'}}>
                    Background
                </h2>

                <p style={{textAlign: 'justify'}}>
                In the summer of 2017, Bernhard Forstén called Eddie Myrskog with the question: “Do you want to run?” A bit baffled by the question but eager to know more, Eddie responded: “Yes!”. The plan was to start from Helsinki and run 100 km down to the city of Tammisaari. Five days after the odd phone call Bernhard and Eddie began their adventure. 
                <br/><br/>
                The pace was fast and by the first marathon they had clocked a time to be proud of, but there was still 60 km left. Soon enough they realised they underestimated the distance. After approximately 70 km the first attempt to finish the 100 km race came to its end. On that same day however, they swore to each other that they would do it again next year and that they would succeed.
                <br/><br/>

                Roughly 8 months later the talks about the 100 km race stirred up again. By now, Bernhard and Eddie had been joined by Linus and the team had grown from two members to three. The group had also been struck by some bad news. Bernhard’s mother was fighting breast cancer and Eddie’s aunt had also recently struggled with breast cancer. Fortunately both of them recovered, but sadly the same cannot be said of the 5000 men and women affected by breast cancer every year. This encouraged them to combine their project with fundraising for breast cancer research. 
                <br/><br/>

                By May 2018, the training was in full swing. The team exercised six times a week and contacted sponsors and planned the run whenever they had the chance. The project was now called Bold100, since running 100 km and fighting against breast cancer requires a bit of boldness. They started to get a following on social media and the amount of donations increased.
                <br/><br/>

                A month before the run, the group once again received some bad news. Bernhard had a problem with his back and a visit to the doctor’s office showed that he had spinal disc herniation and that he wouldn’t be able to participate in the run. The team had now been reduced to two runners, which was a blessing in disguise since Bernhard’s new role in the support team was significant for the duo’s success.
                <br/><br/>

                The time flew by and suddenly it was the day they had all been waiting for. By now the team included Richard who was going to drive the support car and Thomas who operated the camera. On August 31st they woke up before the break of dawn to do their last minute preparations. At six o’clock they started to run. 
                <br/><br/>

                The duo tried not to think about the whole distance and instead focus on short-term goals. By 30 km this tactic had worked flawlessly. Cars driving past them honked their horns in support. Friends and family supported them on social media where the duo updated them about their state. And the project had already raised over 7000 euros. Inspired by this, they happily continued.
                <br/><br/>

                Reaching 50 km, the halfway mark, the runners stated that it was still going well. But after 20 km more, Eddie started to feel a pain in his knee. By 80 km, Eddie wasn’t able to run anymore. He was however able to walk without pain and they decided that the most important part is to finish the project. So they began to walk.
                <br/><br/>

                This was very challenging and actually the first time the duo wondered if they would make it to the finish line. Once again inspired by the public’s support, they proceeded one step at a time. Linus and Eddie reached 90 km and the last 10 km were ahead of them. The project had now raised over 10000 euros and the duo simply kept on walking. 
                <br/><br/>

                After walking for what felt like an eternity they reached 99 km. At this point friends and family joined to cheer them on for the final moments. As they saw the finish line, they started running. After 15 hours on the road, 100 km covered and 12190 euros raised, Linus and Eddie crossed the finish line in total euphoria. 
                <br/><br/>

	            creating a project and doing everything from scratch with a team of equally passionate individuals was something everyone enjoyed. In November of 2018 the Bold100 team decided to found an association and create more projects of the same caliber. That association is Bold Projects.
                </p>
            </div>
        </div>
    )
}

export default About