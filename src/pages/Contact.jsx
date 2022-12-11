import React from 'react'
import Hero from '../components/Hero/Hero';
import BG from "../assets/contactBg.jpg"
import BodyContact from '../components/BodyContact/BodyContact';


function Contact() {
    return (
        <div>
            <Hero subHeading="Contact me!" bg={BG} />
            <BodyContact />
        </div>
    )
    }

export default Contact;