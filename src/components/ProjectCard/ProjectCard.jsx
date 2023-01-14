import React from "react";
import "./ProjectCard.css";

function Card(props) {
  return (
    <div className={props.className}>
      <img src={props.img} alt="" className={props.imgClass} />
      <h2 className="cardHeading">{props.heading}</h2>
      <p>{props.body}</p>
      <div className="button-section">
        <a href={props.gitURL} target="_blank" className="cardBtn">
          Github
        </a>
        <a href={props.btnURL} target="_blank" className="cardBtn">
          {props.btn}
        </a>
      </div>
    </div>
  );
}

export default Card;
