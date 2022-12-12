import React from 'react';
import './hero.css';
import videoBg from '../../assets/broll.mp4'

export default function Hero(props) {
  return (
    <div>
        <div className="hero" style={{
          backgroundImage: `url(${props.bg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="overlay">
                
            </div>
            <video src={props.video} autoPlay loop muted/>
            <div className="content">
                <h3 className={props.headingIntro}>{props.heading}</h3>
                <h1 className={props.headingContent}>{props.subHeading}</h1>
            </div>
        </div>
    </div>
  )
}
