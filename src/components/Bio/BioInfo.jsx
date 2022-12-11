import React from 'react'
import './bio.css'


export default function BioInfo(props) {
    return (
        <div>
            <div className="info">
                <div className="bioHeading">
                    <h1 className={props.cname}>
                        {props.aboutHeading}
                    </h1>
                </div>
                <div className= {props.bname}>
                    <p>{props.aboutBody}</p>
                </div>
            </div>
        </div>
    )
}
