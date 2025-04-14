import './styles/global.css'

import CircuitLayout from './layouts/CircuitLayout'

import HeroSection from './sections/HeroSection'
import AboutMeSection from './sections/AboutMeSection'
import EducationSection from './sections/EducationSection/EducationSection'
import WorksSection from './sections/WorksSection/WorksSection'
import ContactSection from './sections/ContactSection'
import ProjectsSection from './sections/ProjectsSection/ProjectsSection'
import LightingComponent from './components/LightingComponent/LightingComponent'
import SideNav from './components/SideNav/SideNav'

function App() {
  return (
    <main className="App bg-primary dark:bg-primary-dark p-10">
      <LightingComponent />
      <SideNav />
      <CircuitLayout>
        <HeroSection />
        <AboutMeSection />
        <EducationSection />
        <WorksSection />
        <ProjectsSection />
        <ContactSection />
      </CircuitLayout>
    </main>
  )
}

export default App