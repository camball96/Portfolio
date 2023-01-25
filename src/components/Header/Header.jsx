import React from "react";
import "./header.css";
import linkedin from "../../assets/linkedinW.png";
import github from "../../assets/githubW.png";
import githubP from "../../assets/githubP.png";
import Nav from "../Nav/Nav.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="left">
          <Link to="/" className="brand">
            My Landing Page
          </Link>
        </div>
        <div className="middle">
          <Nav />
        </div>
        <div className="right">
          <a
            className="logo"
            href="https://www.linkedin.com/in/cameron-ball-189166193/"
          >
            <img src={linkedin} width="30px" alt="" />
          </a>
          <a className="logo" href="https://github.com/camball96">
            <img src={github} width="30px" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
