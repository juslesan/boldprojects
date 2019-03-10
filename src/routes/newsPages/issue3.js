import React from 'react'
import './issue3.css'
import pic1 from '../../img/issue3/_DSF3396_crop.jpeg'
import pic2 from '../../img/issue3/_DSF3455_crop.jpeg'
import pic3 from '../../img/issue3/_DSF3412.jpg'
import pic4 from '../../img/issue3/_DSF3459.jpeg'
import pic5 from '../../img/issue3/_DSF3440.jpeg'
import pic6 from '../../img/issue3/Medicine_map.png'

const Issue3 = () => {
    return (
        <div className="newsIssue2">
            <h1>Not the medicine the sea needs</h1>
            <p>
                Mankind is accustomed to medicine. Since we depend so much on medication it is 
                unlikely that its production would decrease in the years to come. This means 
                that we have to better take care of the way we dispose of it. At this moment 
                much of the expired or unused medicine in Finnish homes end up in the garbage 
                or the sewer system, and from there it ends up in the sea. Once it is in the 
                sea it starts to affect the wildlife. Medication that is no longer in use 
                should instead be returned to a pharmacy where it is disposed in a rightful 
                manner. 
            </p>
            <img src={pic6} alt="pic" style={{width: "55%", marginTop: "5vw", marginBottom: "5vw"}}/>
            <p>
                Most of the medication used by humans is made to sustain the gastric acid of 
                the human body but this means that ecosystems have a hard time breaking down 
                the medication. Thus, medicine stays in the ecosystem until it is once again 
                consumed by humans through the water we drink or the food we eat.
            </p>
            <p>
                The exact effects of medicine in the sea is not yet known but studies have 
                shown that medicine-related subjects disturb the natural flow of the ecosystem. 
                Antibiotics increases the antibiotic resistance which means that microbes and 
                bacterias become more immune to our medicine, Ibuprofen affects the reproduction 
                of fishes, and hormones alter the fertility of creatures living in the sea. 
            </p>
            <img src={pic1} alt="pic" style={{width:"80%", marginTop: "5vw", marginBottom: "5vw"}}/>
            <p>
                Even though water treatment plants in Finland block most of the waste they do not 
                have any regulations that legally bind them to discard medicine. Since it is 
                impossible to stop the production of medicine it is highly important we, as 
                individuals return our no longer needed medication to pharmacies, so the sea 
                and its wildlife stays medicine-free. <a href="https://www.syke.fi/hankkeet/epic">SYKE</a> are trying different techniques to 
                get rid of the medicine before it ends up in the water by discarding the medicine 
                at the factories but individual action would be a big step towards a healthier sea. 
            </p>
            <div className="issue3ImgWrapper">
                <div className="issue3Img">
                    <img className="issue3Img1" src={pic3} alt="pic"></img>
                </div>
                <div className="issue3Img">
                    <img className="issue3Img2" src={pic4} alt="pic"></img>
                </div>
            </div>
            <p>
                Tubes still containing medication, medicine in fluent and solid form as well as 
                pills and capsules should all be returned to a pharmacy. When returning them one 
                should discard the box and the instructions that come with the medication and put 
                the medicine in a transparent plastic bag. The pharmacy receives them and sends 
                them to separate disposal stations where the medicine is processed and turned into 
                heating and electricity. Check out <a href="http://laakkeetonitameri.fi/">Lääkkeetön Itämeri</a> for extended reading. 
            </p>

            <img src={pic5} alt="pic" style={{width:"100%", marginTop: "5vw"}}/>
            <img src={pic2} alt="pic" style={{width:"100%", marginTop: "5vw", marginBottom:"5vw"}}/>

        </div>
    )
}
export default Issue3