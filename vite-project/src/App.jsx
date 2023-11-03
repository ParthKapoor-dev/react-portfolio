import './style.css'
import TestImage from "../Images/test image3.png"
import { useEffect } from 'react'
import { useRef } from 'react'

import AboutMeSection from './components/aboutmeSection';
import ProjectSection from './components/ProjectSection';

export default function App() {

  const ImageRef = useRef();

  useEffect(() => {
    const htmlDocument = document.documentElement;

    function onScroll() {
      const scrollValue = (window.scrollY / htmlDocument.clientHeight);
      if(scrollValue <= 1.4)
      ImageRef.current.style.transform = `translate(-50%,${scrollValue*4}%) scale(${scrollValue*3 + 1})`;
      console.log(scrollValue)
    }
    window.addEventListener('scroll', onScroll);
    return () => {

      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="mainPage-div">

      <div className="fixed-containers">
        <div className="mainPage-name">
          Parth <br /> Kapoor
        </div>

        <div className="mainPage-routes-section">
          <p className="about-route">About</p>
          <p className="work-route">Work</p>
          <p className="services-route">Services</p>
          <p className="contacts-route">Contacts</p>
        </div>

        <div className="mainPage-socialMedia">
          <p className="instagram-link">Instagram</p>
          <p className="linkedIn-link">Linked In</p>
          <p className="github-link">GitHub</p>
        </div>

        <div className="mainPage-country">
          IND
        </div>
      </div>


      <div className="mainPage-photo-div">
        <img src={TestImage} ref={ImageRef}/>

        <p className="heading">
          MERN <br /> WebDev
        </p>
      </div>

      <div className="downPage-section">
        

        <AboutMeSection/>

        <ProjectSection/>
      </div>
    </div>
  )
}