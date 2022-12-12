import React from 'react';
import '../App.css'
import Hero from '../components/Hero/Hero'
import Bio from '../components/Bio/Bio'
import Footer from '../components/Footer/Footer'
import Mid from '../components/Mid/Mid'
import videoBg from '../assets/broll.mp4'
import { HeroAbout, HeroHeading } from '../utils/Utils'


function Home() {
    return (
        <div>
            <Hero heading={HeroHeading} subHeading= {HeroAbout} video={videoBg} headingIntro='headingIntroHome' headingContent='headingContent' />
            <Mid />
            <Bio />
        </div>
    );
}

export default Home;