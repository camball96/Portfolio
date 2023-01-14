import React from "react";
import Hero from "../components/Hero/Hero";
import BG from "../assets/ProjectBg.jpg";
import InfoCard from "../components/InfoCard/InfoCard";
import { infoCardProjectsH1, infoCardProjectsP } from "../utils/Utils";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../App.css";
import { projectCard } from "../utils/Utils";

function Projects() {
  function createCard(x) {
    return (
      <ProjectCard
        className={x.className}
        img={x.img}
        imgClass={"projectImg"}
        heading={x.heading}
        body={x.body}
        btn="Explore"
        btnURL={x.btnURL}
        gitBtn={x.addGitBtn}
        gitURL={x.gitURL}
      />
    );
  }

  return (
    <div>
      <Hero
        subHeading="Here's a little something"
        bg={BG}
        headingIntro="headingIntro"
        headingContent="headingContent"
      />
      <div className="infoCardSection">
        <InfoCard
          cardClass="infoCardContainer"
          cnameH1="infoCardH1"
          cnameP="infoCardP"
          cardH1={infoCardProjectsH1}
          cardP={infoCardProjectsP}
        />
      </div>
      <h2 className="projectHeading">Currently Working On</h2>
      <div className="projectCardSection">
        {projectCard.map(createCard)}
      </div>
    </div>
  );
}

export default Projects;
