import React from 'react'
import './issue2.css'
import pic1 from '../../img/issue2/rsz_mathias.jpg'
import pic2 from '../../img/issue2/rsz_m_hand.jpg'
import pic3 from '../../img/issue2/rsz_näringsfibrer_color.jpg'
import pic4 from '../../img/issue2/rsz_hö.jpg'
import pic5 from '../../img/issue2/rsz_white_cow.jpg'

const Issue2 = () => {
    return (
        <div className="newsIssue2">
            <h1>Modern farming takes the sea into account</h1>

            <div className="mathias">
                <div className="mathiasP1">
                    <p>
                        Mathias
                    </p>
                </div>
                <img className="mathiasImg" src={pic1} alt="mathias"></img>
                <div className="mathiasP2">
                    <p>
                        Weckström
                    </p>
                </div>
            </div>         


            <p style={{fontWeight: '600', textAlign: 'center'}}>
                Eutrophication is one, if not the biggest problem concerning the Baltic Sea. 
                Simply put, nutrients, such as nitrogen and phosphorus, from e.g farming flow 
                into the waters causing algal blooms. The algae increases in number and size 
                and at some point it dies and falls to the bottom of the sea where it is 
                decomposed by microbes and small animals. In order for them to decompose 
                the plants, they need to use oxygen. This causes the oxygen level to decrease, 
                creating dead zones at the bottom of the sea. 

            </p>
            <p>
                Reading the description of eutrophication, one might think that farming is 
                the sole problem and by fixing that the Baltic Sea will flourish. Unfortunately 
                the issue is a bit more complex. We had the opportunity to speak with a farmer 
                to get an expert’s comment on the issue. 
            </p>
            <p>
                Mathias Weckström owns an ecological farm located in Tenala, though its name is a 
                bit misleadingly called Pargas Gård. Weckström took over the farm from his parents 
                in 2004, just two years after his studies in agrology had ended. At that point the 
                farm depended mostly on meat production but in later years focus has shifted, and 
                now crop production is the main source of income. 
            </p>
            <p>
                -The farm has to constantly be in development, says Weckström, whose travels to Sweden 
                among other countries have taught him a lot about ecological farming. But it was a 
                Finnish company called Soilfood that works with recycled nutrients that introduced 
                him to by-product fibres. These by-product fibres that originate from the forest are 
                small mud-looking decay products of cardboard production. They contain carbon which 
                is good for the soil because it absorbs water so that floods are not possible. Also, 
                when fibres bind water to the soil, plants can access water more efficiently during 
                dry seasons. They also create space under the surface, binding nutrients such as 
                nitrogen, phosphorus, calcium and potassium so they don’t flow into the waters. Thus 
                slowing down eutrophication.
            </p>
            <div className="issue2ImgWrapper">
                <div className="issue2Img">
                    <img src={pic2} alt="pic1"></img>
                </div>
                <div className="issue2Img">
                    <img src={pic3} alt="pic2"></img>
                </div>
            </div>
            <p>
                By-product fibres have been tested for many years by LUKE (Natural Resources Institute 
                Finland) among others and has shown to be effective. They cost a bit more than the usual 
                method but Weckström considers it necessary. The price also varies depending on the 
                distance between the farm and the factory that produces the fibre since the transportation 
                is the most expensive part of the deal. Some of the costs are paid by the city’s 
                contribution for farmers that help put organic material in the soil. But a farmer’s 
                life these days is not easy. 
            </p>
            <p>
                -I think it is important to mention that every farmer wants to be eco-friendly, but it 
                should be profitable to produce ethical food and at this moment it is not, says 
                Weckström. The goal is that food would be cheap but then the food does not cover 
                production costs. This means that all farming revolves around the city’s contributions 
                and without them farming is not possible. The EU has not set out any guidelines for the 
                future concerning national subsidies and that puts the farmer in a worrying state. 
            </p>
            <p>
                Eutrophication is not solved by a couple of farms or even by a couple of countries. To really 
                make a difference, all the countries in the catchment area of the Baltic Sea have to make changes 
                and begin with sustainable agriculture. 
            </p>
            <div className="issue2ImgWrapper">
                <div className="issue2Img">
                    <img src={pic5} alt="pic5"></img>
                </div>
                <div className="issue2Img">
                    <img src={pic4} alt="pic4" style={{width: '93.5%'}}></img>
                </div>
            </div>
        </div>
    )
}

export default Issue2