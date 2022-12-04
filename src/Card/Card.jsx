import React from 'react'
import './card.css'
import Code  from './../assets/code.png'

function Card(){
  return (
    <div>
      <div className='cardBox'>
        <img src={Code} alt="" className='cardImg' />
        <h2>Hello World</h2>
        <p>Hello this is some informations yay</p>
      </div>
    </div>
  )
}

export default Card;
