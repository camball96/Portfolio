import React from 'react'
import BioInfo from '../Bio/BioInfo'
import Form from '../Form/Form'
import './bodyContact.css'
import ContactBG from "../../assets/contactBg.jpg"
import { aboutBody } from "../../utils/Utils"


function BodyContact() {

    function createForm(x) {
        return(
            <label key={x.id} label={x.label} />
        )
    }



    return (
        <div className='bodyContact'>
            <div className='imageLeft'>
                <img className='bcImage' src={ContactBG}></img>
            </div>
            <div className="infoRight">
                <div className='bioInfo'>
                <BioInfo aboutHeading= "Want to reach out?" aboutBody= {aboutBody} cname = "cHeading" bname="subHeading"/>
                </div>
                <div className='form'>
                <Form />
                </div>
            </div>
        </div>
    )
}

export default BodyContact;