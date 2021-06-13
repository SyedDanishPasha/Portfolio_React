/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Syed Danish Pasha",
  title: "Hi all, I'm Danish",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs / HTML / CSS and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1YCeeQW9uA5qo2PJwx2GK1i3r6NaLrUa8/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SyedDanishPasha",
  linkedin: "https://www.linkedin.com/in/syed-danish-pasha-287b8b188/",
  gmail: "syeddanishp@gmail.com",
  facebook: "https://www.facebook.com/syed.danish.pasha.26",
  instagram: 'https://www.instagram.com/all_call_me_danny/',
  twitter: 'https://twitter.com/SyedDanishPash3',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Presidency University",
      logo: require("./assets/images/PULogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2017 to June 2021",
      desc:
        "",
      descBullets: [
        "Runner in Intra University Science Exhibition",
        "Class Representative for 3 years",
        "Disipline Committe Head"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "ReactJs",
      progressPercentage: "70%"
    },
    {
      Stack: "NodeJs",
      progressPercentage: "50%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "60%"
    },
    {
      Stack: "HTML",
      progressPercentage: "85%"
    },
    {
      Stack: "CSS",
      progressPercentage: "80%"
    },
    {
      Stack: "BootStrap",
      progressPercentage: "75%"
    },
    {
      Stack: "Django",
      progressPercentage: "40%"
    },
    {
      Stack: "Python",
      progressPercentage: "60%"
    },
    {
      Stack: "Java",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Engineer",
      company: "Fresher",
      companylogo: require("./assets/images/Self.jpg"),
      date: "",
      desc:
        "Building career in Full Stack Developement",
      descBullets: [
        "Development of Web and Mobile Application",
        "Custom Building Applications",
        "Designing Applincations"
        
      ]
    },
    {
      role: "Intership",
      company: "Traid Square Infosec Pvt Ltd",
      companylogo: require("./assets/images/triad-logo.png"),
      date: "June 2019 – Augest 2020",
      desc:
        "IT Recuriter.",
      descBullets: [
        "Screening Candidates Profile",
        "Skills Set",
        "Maintaing Follow-Up Tracker"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "SyedDanishPasha", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Building Clone Appication to up-skill my technical skills in Full Stack Development",
  projects: [
    {
      image: require("./assets/images/amazonlogo.svg"),
      projectName: "Amazon Clone",
      projectDesc: "Clone an web app using Reactjs, React-Native, Redux, JavaScript, Styled-Components, HTML, and CSS. For Backend using Firebase",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://clone2-0.web.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "Airbnb",
      projectDesc: "Clone an web app using Reactjs, React-Native, JavaScript, Redux, HTML, and CSS. For Backend using Firebase",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hardcore-cori-5478fd.netlify.app/"
        }
      ]
    }
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JavaScript and React for Beginners: 12 Projects",
      subtitle:
        "",
      image: require("./assets/images/RJSLogo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.udemy.com/certificate/UC-193c93a9-d85e-4f42-a54e-500cdec993cc/"
        }
      ]
    },
    {
      title: "Professional Web Development Skills",
      subtitle:
        "",
      image: require("./assets/images/WDLogo.jpg"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.udemy.com/certificate/UC-c37cebaa-45c9-4b7f-903b-6ba509118d57/"
        }
      ]
    },
    {
      title: " Build Your Portfolio Website with HTML and CSS",
      subtitle:
        "",
      image: require("./assets/images/htmlcssLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.coursera.org/account/accomplishments/certificate/NBBGCA9NA7EA"
        }
      ]
    },
    {
      title: "Essential Google Cloud Infrastructure: Foundation",
      subtitle:
        "",
      image: require("./assets/images/GCLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.coursera.org/account/accomplishments/certificate/6J6Y7R9JYEYW"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://mdaffankhan.wordpress.com/",
      title: "High Efficiency Hybrid Dual Axis Solar Sun Tracking System for PV Power Plants",
      description:
        "Established in June of 2021, Power Palace is a blog focusing on Renewable Energies. We work on Solar PV Plants, Wind Energy systems and all the Renewable Energies. We also help in new technologies related to Renewable energy systems. If you like our content, don’t forget to subscribe at the bottom of the page."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8867628729",
  email_address: "syeddanishp@gmai.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
