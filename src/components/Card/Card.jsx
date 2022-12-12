import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'


function Card(props){
  return (

      <div className={props.className}>
        <img src={props.img} alt="" className='cardImg' />
        <h2>{props.heading}</h2>
        <p>{props.body}</p>
        <a href={props.btnURL} target='_blank' className="cardBtn">{props.btn}</a>
      </div>

  )
}

export default Card;
