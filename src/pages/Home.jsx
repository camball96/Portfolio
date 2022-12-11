import React from 'react';
import '../App.css'
import Hero from '../components/Hero/Hero'
import Bio from '../components/Bio/Bio'
import Footer from '../components/Footer/Footer'
import Mid from '../components/Mid/Mid'
import videoBg from '../assets/broll.mp4'


function Home() {
    return (
        <div>
            <Hero heading="Welcome to" subHeading= "Cameron Ball's Landing Page" video={videoBg} />
            <Mid />
            <Bio />
        </div>
    );
}

export default Home;