import React from 'react';
import './hero.css';
import videoBg from '../../assets/bgVideo.mp4'

export default function Hero() {
  return (
    <div>
        <div className="hero">
            <div className="overlay">
                
            </div>
            <video src={videoBg} autoPlay loop muted/>
            <div className="content">
                <h3>Welcome to</h3>
                <h1>Cameron ball</h1>
            </div>
        </div>
    </div>
  )
}
