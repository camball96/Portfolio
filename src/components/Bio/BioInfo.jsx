import React from 'react'
import './bio.css'


export default function BioInfo(props) {
    return (
        <div>
            <div className="info">
                <div className="bioHeading">
                    <h1 className="bHeading">
                        {props.aboutHeading}
                    </h1>
                </div>
                <div className="seperator">
                    {/* Insert seperator here */}
                </div>
                <div className="bodyText">
                    <p>{props.aboutBody}</p>
                </div>
            </div>
        </div>
    )
}
