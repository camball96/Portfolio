import React from 'react';
import './hero.css';
import videoBg from '../../assets/broll.mp4'

export default function Hero() {
  return (
    <div>
        <div className="hero">
            <div className="overlay">
                
            </div>
            <video src={videoBg} autoPlay loop muted/>
            <div className="content">
                <h3 className='headingIntro'>Welcome to</h3>
                <h1 className='headingContent'>Cameron Ball's <br/> Landing Page</h1>
            </div>
        </div>
    </div>
  )
}
