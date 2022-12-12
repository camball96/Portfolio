import React from 'react'
import './infoCard.css'

function InfoCard(props) {
    return (
        <div className={props.cardClass}>
            <h1 className={props.cnameH1}>{props.cardH1}</h1>
            <p className={props.cnameP}>{props.cardP}</p>
        </div>
    )
}

export default InfoCard