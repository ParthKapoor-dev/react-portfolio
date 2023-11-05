import './style.css'

// Components
import AboutMeSection from './components/aboutmeSection';
import ProjectSection from './components/ProjectSection';
import FixedContainers from './components/FixedContainers';
import MainPage from './components/mainPage';

export default function App() {

  return (
    <div className="mainPage-div">

      <FixedContainers />

      <MainPage/>

      <div className="downPage-section">

        <AboutMeSection />

        <ProjectSection />

      </div>
    </div>
  )
}