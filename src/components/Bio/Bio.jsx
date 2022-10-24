import React from 'react'
import bioPic from '../../assets/bio.jpg'
import './bio.css'
import { AboutHeading, AboutBody, ResumeButton, ContactButton } from '../../utils/Utils';
import BioInfo from './BioInfo';
import bgBio from '../../assets/t5.png'
import Resume from '../../assets/resume.pdf'


export default function Bio(props) {
    return (
        <div>
            <div className="section" style={{ backgroundImage: `url("${bgBio}")`}}>
                
                    <div className="leftSide">
                        <div className="image">
                            <img className='dp' src={bioPic} width="500" alt="" />
                        </div>
                    </div>
                    <div className="rightSide">
                        <BioInfo aboutBody={AboutBody} aboutHeading={AboutHeading} />
                        <div className="buttonSection">
                            <div className="buttonLeft">
                                <a className='contactBtn' href="#">Contact Me</a>
                            </div>
                            <div className="buttonRight">
                                <a className='resBtn' href={Resume}>My Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
