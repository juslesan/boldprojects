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
            <Backhome/>
            <div className="aboutBulk">
                <h1>About</h1>
                <p style={{marginBottom: '50px'}}>
                    Bold Projects is a nonprofit association founded in Helsinki in 2018. 
                    With our annual daring endeavors we want to help charities raise awareness and funds. 
                    Our projects are eco-friendly, creative and bold.
                </p>

                {/* <hr></hr> */}

                <h2 style={{marginTop: '25vw', marginBottom: '50px'}}>The Doers</h2>
                <div className="doers" style={{position: 'relative'}}>
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
                    Bold Projects is a nonprofit association founded in Helsinki in 2018. With our bold endeavors, we want to help charities raise awareness and funds. We want to provide our members with a platform where they can co-organize and create daring projects. It is of paramount importance to us that the projects are environmental and maintain a certain level of visual imagery. 
                    <br/>
                    <br/>

                    In the summer of 2017, Bernhard Forstén called Eddie Myrskog with the question: “Do you want to run?” A bit baffled by the question but eager to know more, Eddie responded: “Yes!”. The plan was to start from Helsinki and run 100 km down to the city of Tammisaari. Five days after the critical phone call Bernhard and Eddie began their adventure. 

                    <br/>            
                    <br/>

                    The pace was quick and by the first marathon they had clocked a time to be proud of, but there was still 60 km left. Halfway there they made a crucial mistake, they had a full lunch at a restaurant by the road. The pace slightly sunk and the legs started to feel heavy. Another 20 km and they realized they weren’t going to make it. So after approximately 70 km the first attempt to finish the 100 km race came to its end. But on that same day they swore to each other that they would do it again next year and this time, they would succeed.

                    <br/>            
                    <br/>

                    Roughly 8 months later the talks about the 100 km race stirred up again. At a common friends house party, Bernhard and Eddie met Linus who was an old acquaintance of theirs. He had recently read a book about ultramarathons and when he heard about the project he was intrigued. A week after the party the original runners called Linus and asked if he was still interested, and on that day the team grew from two members to three. 

                    <br/>           
                    <br/>

                    That same year the group was struck by some bad news. Bernhard's mother had got breast cancer. Luckily the health care in Finland is amazing and after a few months, she was back to her normal self. Eddies aunt had also recently struggled with breast cancer and Linus himself had struggled with cancer a year before. Fortunately, all of them survived and could go on with their lives. But in Finland over 5000 women and men are affected by breast cancer. This made us think about bringing a charity aspect to our project. If we are going to suffer for 100 km, why not make someone else benefit from it? So via Pink Ribbon in Finland, WE began to raise funds for breast cancer research. 

                    <br/>
                    <br/>


                    In May 2018 the training fully started. The team trained 6 times a week and when they did not train they contacted sponsors, planned the project and prepared themselves. The project was now called Bold100 since running 100 km and fighting against breast cancer requires a bit of boldness. They created a social media account and quite quickly they got a following. People, mostly in Helsinki, liked the project and shared it on social media. The newspaper in Helsinki contacted us and we conducted a couple of radio interviews. The donations also started to roll in and suddenly we had broken our first thousand euros. Training proceeded and the day of the run got closer and closer.

                        
                    <br/>
                    <br/>

                    A month before the day of the run the group got once again some bad news. Bernhard had a problem with his back and a visit to the doctor’s office showed that he had a spinal disc herniation and that he wouldn’t be able to run for 3 months. Thus were the three runners reduced to two and Bernhard changed his role in the project from runner to a part of the support team. Luckily for the runners, since his work and enthusiasm helped them a long way.

                    <br/>
                    <br/>


                    The days went by and suddenly it was the day they had all been waiting for. On the 31st of August, the two runners and the support team woke up at five in the morning to do their last minute preparations and at six o’clock sharp they started to run. The weather was cold and the morning foggy but it was breathtakingly beautiful as well. The first 10 km went by and the runners enjoyed themselves. The support team drove ahead of them and filmed the performance with cameras and drones and distributed food when the runners needed energy. After 20 km the ultra marathoners felt as happy as ever still. They had a lot of energy and the weather was getting more and more beautiful by the minute. At this point, the donations also started to roll in as well as the support messages from friends and family. The cars that passed them were all honking in support and that inspired the runners massively. 30 km went by and so did 40 and 50, the feeling in the team was still at its peak. Some minor setbacks that could be fixed with a couple of band-aids and food but other than that the team was feeling great. The donations were also coming in at a high pace and suddenly they were up to 8000 euros. 

                    <br/>
                    <br/>

                    When they reached 70 km Eddie started to feel something in his knee. It wasn’t pain but something was definitely not right. A couple more km and he realized he wasn’t going to be able to run the last 20 km. They took a short break to plan what to do and came to the conclusion that Eddie could make it by walking. So the running turned into walking, the goal for the team was to make it to the finish line. If that would mean by running, walking or crawling did not matter. Once again the public’s reactions inspired them to keep going. Friends and family gathered by the side of the road to cheer them on, cars continued to honk and the donations reached to 10000 euros. The last kilometers were painful but also the proudest. They made it to 90 km and the last 10 km were live streamed. They reached 91 km, 92, 93, 94 and by 95 km they realized, especially Eddie, that they actually would make it. They had been running for 13 hours at this point and the feelings were a mixture of happiness, sleepiness, pride and overall confusion. And probably a hundred other feelings. 	

                    <br/>
                    <br/>

                    The last kilometer started about 8 p.m and Linus and Eddie pushed to their bodies for the last time and when only 100 meters were left they saw their friends and family holding up the finish line. They gathered their last strengths and started running, Eddie leaning on Linus for help. Maybe not the most heroic entrance but that couldn’t bother them less. After approximately 15 hours on the road, 100 km executed and 12190 euros collected Linus and Eddie crossed the finish line and completed their first 100 km in total euphoria.
                </p>
            </div>
        </div>
    )
}

export default About