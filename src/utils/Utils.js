import Brain from '../assets/Brain.png'
import Passion from '../assets/passion.png'
import Code from '../assets/code.png'

// Hero Info


export const HeroHeading = <div>Cameron Ball</div>
export const HeroAbout = <div>Front End Developer</div>

//Bio Information
export const AboutHeading = <div> My name is Cameron Ball <br/> and I would like to introduce myself… </div>;
export const AboutBody = <div>At this stage in my career, I am in search of an organisation that is seeking an authentic and dynamic task driven innovator. I come equipped with an exceptional ability to facilitate all aspects of internal and external communication and able to work under strict time sensitive environments. I thrive at ensuring strategic alliance with organisational leaders and peers to effectively align with key company values and initiatives.<br /><br /> My skill set extends to a meticulous level of attention to detail which I believe uncovers opportunity for innovation and growth. My past accomplishment has been building a start up company that required a pragmatic and focused approach when negotiating in domestic and international operations.  and credibility with all stakeholders at all levels. I truly believe that I could be a loyal asset to your company and a worthy investment, able to make a difference to an organisation such as yours. Thank you for your time and consideration. </div>;


// Buttons

export const ResumeButton = "My Resume"
export const ContactButton = "Contact Me"

// Image Boxes

export const boxes = [
    {
        id: 1,
        heading: "Tech Skills",
        body: "A solution focused web developer with a proven track record of developing, deploying, optimising and managing leading-edge websites using current technologies",
        imgUrl: `${Code}`,
        className: "leftSideFeature",
    },
    {
        id: 2,
        heading: "EQ",
        body: "Equipped with an exceptional ability to facilitate all aspects of internal and external communication and able to work under strict time sensitive environments.",
        imgUrl: `${Brain}`,
        className: "middleFeature",
    },
    {
        id:3,
        heading: "Passionate",
        body: "A strong drive to constantly learn more in the development industry. Passionately upskilling to stay ahead with the ongoing release of new tech stacks",
        imgUrl: `${Passion}`,
        className: "rightSideFeature",
    },
];


// Form Data
export const formHeadings = [
    {
        id:1,
        label: "Company Name "
    },
    {
        id:1,
        label: "Your Name"
    },
    {
        id:1,
        label: "Contact Mobile"
    },
    {
        id:1,
        label: "Contact Email"
    }
];

// Navbar Links
export const navData = [
    {
        id: 1,
        link: "/",
        label: "Home"
    },
    {
        id: 2,
        link: "/projects",
        label: "Projects"
    },
    {
        id: 3,
        link: "/contact",
        label: "Contact"
    },
]

// About section on contact
export const aboutBody = "Have a project in mind? Or do you just want to chat about the latest developments in the world of JavaScript, don't hesitate to reach out. I'm always happy to connect with like-minded folks and discuss the latest and greatest in the world of tech. Thanks for stopping by, and I look forward to hearing from you!"

//Info card
export const infoCardProjectsH1 = "Projects";
export const infoCardProjectsP = <p>As a JavaScript and React developer, I am passionate about building front-end applications in my free time. I am constantly learning and improving my skills and enjoy tackling challenging projects that push me to grow as a developer. I am eager to continue building my expertise and to bring my knowledge and enthusiasm to a team of like-minded professionals. Have a look below at what I have recently completed.</p>

export const projectCard = [
    {
        id: 1,
        className: 'projectCard',
        img: `${Passion}`,
        heading: 'Timebnk',
        body: <p>A single page React website advertising an app that helps users manage their time in personal and work life. The app features a clean interface and helps users increase productivity. The website offers an overview of the app and a call to action to download it.</p>,
        btnURL: 'http://www.timebnk.com.au/'
    },
    {
        id: 2,
        className: 'projectCard',
        img: `${Brain}`,
        heading: 'Project 2',
        body: <p>A single page React website advertising an app that helps users manage their time in personal and work life. The app features a clean interface and helps users increase productivity. The website offers an overview of the app and a call to action to download it.</p>,
        btnURL: 'http://www.timebnk.com.au/'
    },
    {
        id: 3,
        className: 'projectCard',
        img: `${Code}`,
        heading: 'Project 3',
        body: <p>A single page React website advertising an app that helps users manage their time in personal and work life. The app features a clean interface and helps users increase productivity. The website offers an overview of the app and a call to action to download it.</p>,
        btnURL: 'http://www.timebnk.com.au/'
    },
]