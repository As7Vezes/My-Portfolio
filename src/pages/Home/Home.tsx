import NavBar from '../../components/NavBar/NavBar'
import { About } from './sections/About/About'
import Hero from './sections/Hero/Hero'
import { Certification } from './sections/Certifications/Certification'
import { Skills } from './sections/Skills/Skills'
import { Projects } from './sections/Projects/Projects'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Certification />
      <Skills />
      <Projects/>
      <Footer />
    </>
  )
}

export default Home
