import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUser, faProjectDiagram,faHome,faFileAlt } from '@fortawesome/free-solid-svg-icons';

export const BtnList = [
    { label: "Home", link: "/", icon:<FontAwesomeIcon icon={faHome}/>, newTab: false },
    { label: "About",
      link: "/about",
      icon: <FontAwesomeIcon icon={faUser}/>,
      index:1,
      newTab: false
     },
    // { label: "Projects",
    //   link: "/projects",
    //   icon:  <FontAwesomeIcon icon={faProjectDiagram}/>,
    //   index:2,
    //   newTab: false

    // },
    { label: "Contact",
      link: "/contact", 
      icon: <FontAwesomeIcon icon={faEnvelope}/>,
      index:3,
      newTab: false },
    {
      label: "Github",
      link: "https://www.github.com/vanshika-thadani",
      icon: <FontAwesomeIcon icon={faGithub}/>,
      index:4,
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/vanshika-thadani-792033294/",
      icon: <FontAwesomeIcon icon={faLinkedin}/>,
      index:5,
      newTab: true,
    },
    {
      label: "Resume",
      link: "https://drive.google.com/file/d/1EcTEyEhK5UI06XODtUey3L21ANz2qIfw/view?usp=sharing",
      icon: <FontAwesomeIcon icon={faFileAlt}/>,
      index:6,
      newTab: true,
    },
  ];