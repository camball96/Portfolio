import React from 'react'
import BioInfo from '../Bio/BioInfo'
import Form from '../Form/Form'
import './bodyContact.css'
import ContactBG from "../../assets/contactBg.jpg"
import { formHeadings } from "../../utils/Utils"

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
                <BioInfo aboutHeading= "Want to reach out?" aboutBody= "reach out here" cname = "cHeading" bname="subHeading"/>
                <Form />
            </div>
        </div>
    )
}

export default BodyContact;