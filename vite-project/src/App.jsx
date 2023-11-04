import './style.css'
import TestImage from "../Images/test image3.png"
import { useEffect } from 'react'
import { useRef } from 'react'

// Components
import AboutMeSection from './components/aboutmeSection';
import ProjectSection from './components/ProjectSection';
import FixedContainers from './components/FixedContainers';

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

     <FixedContainers/>


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