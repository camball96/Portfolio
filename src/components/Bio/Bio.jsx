import React from 'react'
import bioPic from '../../assets/bio.jpg'
import './bio.css'

export default function Bio() {
  return (
    <div>
        <div className="section">
            <div className="leftSide">
                <div className="image">
                    <img className='dp' src={bioPic} width="500" alt="" />
                </div>
            </div>
            <div className="rightSide">
                <div className="info">
                    <p> My name is Cameron Ball and I would like to introduce myself…
                        At this stage in my career, I am in search of an organisation that is seeking an authentic and dynamic
                        task driven innovator.
                        I come equipped with an exceptional ability to facilitate all aspects of internal and external
                        communication and able to work under strict time sensitive environments.
                        I thrive at ensuring strategic alliance with organisational leaders and peers to effectively align with
                        key company values and initiatives.
                        My skill set extends to a meticulous level of attention to detail which I believe uncovers opportunity
                        for innovation and growth.
                        My past accomplishment has been building a start up company that required a pragmatic and
                        focused approach when negotiating in domestic and international operations.
                        I am particularly proud of my versatility, optimism and ability to establish and build rapport, trust
                        and credibility with all stakeholders at all levels.
                        I truly believe that I could be a loyal asset to your company and a worthy investment, able to make a
                        difference to an organisation such as yours.
                        Thank you for your time and consideration.</p>
                </div>
                <div className="buttonSection">
                    <div className="buttonLeft">
                        <a className='contactBtn' href="#">Contact Me</a>
                    </div>
                    <div className="buttonRight">
                        <a className='resBtn' href="#">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
