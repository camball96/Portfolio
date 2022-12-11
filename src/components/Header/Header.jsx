import React from 'react'
import './header.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <div >
      <div className="header">
        <div className="left">
          <h1 className='brand'>Resume Landing Page</h1>
        </div>
        <div className="middle">
          <Nav />
        </div>
        <div className="right">
          <a className='logo' href="https://www.linkedin.com/in/cameron-ball-189166193/">
            <img src={linkedin} width="50px" alt="" />
          </a>
          <a className='logo' href="https://github.com/camball96">
            <img src={github} width="50px" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
