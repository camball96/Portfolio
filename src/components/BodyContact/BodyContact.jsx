import React from "react";
import BioInfo from "../Bio/BioInfo";
import Form from "../Form/Form";
import "./bodyContact.css";
import ContactBG from "../../assets/mac.jpg";
import { aboutBody } from "../../utils/Utils";
import Container from "../Container/Container";

function BodyContact() {
  return (
    <div className="bodyContact">
      <div className="imageLeft">
        <img className="bcImage" src={ContactBG}></img>
      </div>
      <Container className="infoRight">
        <div className="bioInfo">
          <BioInfo
            aboutHeading="Want to reach out?"
            aboutBody={aboutBody}
            cname="cHeading"
            bname="subHeading"
          />
        </div>
        <div className="form">
          <Form />
        </div>
      </Container>
    </div>
  );
}

export default BodyContact;
