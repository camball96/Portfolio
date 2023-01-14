import React, { useState } from "react";
import { Link } from "react-router-dom";
import bioPic from "../../assets/self.jpg";
import "./bio.css";
import { AboutHeading, AboutBody } from "../../utils/Utils";
import BioInfo from "./BioInfo";
import bgBio from "../../assets/sectionbg.jpg";
import Resume from "../../assets/resume.pdf";
import Container from "../Container/Container";

export default function Bio(props) {
  return (
    <div>
      <div className="section" style={{ backgroundImage: `url("${bgBio}")` }}>
        <div className="leftSide">
          <div className="image">
            <img className="dp" src={bioPic} width="600" alt="" />
          </div>
        </div>
        <div className="rightSide">
          <Container className="infoHome">
            <BioInfo
              aboutBody={AboutBody}
              aboutHeading={AboutHeading}
              cname="bHeading"
              bname="bodyText"
            />
            <div className="buttonSection">
              <div className="buttonLeft">
                <Link to="/contact" className="contactBtn">
                  Contact Me
                </Link>
              </div>
              <div className="buttonRight">
                <a className="resBtn" href={Resume}>
                  My Resume
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
