import React from 'react'
import './card.css'


function Card(props){
  return (
    <div>
      <div className='cardBox'>
        <img src={props.img} alt="" className='cardImg' />
        <h2>{props.heading}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default Card;
