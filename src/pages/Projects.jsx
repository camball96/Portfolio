import React from 'react'
import Hero from '../components/Hero/Hero'
import BG from '../assets/ProjectBg.jpg'
import InfoCard from '../components/InfoCard/InfoCard'
import { infoCardProjectsH1, infoCardProjectsP} from '../utils/Utils'
import Card from '../components/Card/Card'
import Brain from '../assets/Brain.png'
import '../App.css'
import { projectCard } from '../utils/Utils'




function Projects() {

    function createCard(x) {
        return(
            <Card className={x.className} img={x.img} heading={x.heading} body={x.body} btn="Explore" btnURL={x.btnURL}/>
        )
    }

    return (
        <div>
            <Hero subHeading="Here's a little something" bg={BG} headingIntro='headingIntro' headingContent='headingContent' />
            <div className='infoCardSection'>
                <InfoCard cardClass="infoCardContainer" cnameH1="infoCardH1" cnameP="infoCardP" cardH1={infoCardProjectsH1} cardP={infoCardProjectsP} />
            </div>
            <div className="projectCardSection">
                {projectCard.map(createCard)}
            </div>
        </div>
    )
}

export default Projects