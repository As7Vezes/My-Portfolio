import NavBar from '../../components/NavBar/NavBar'
import { About } from './sections/About/About'
import Hero from './sections/Hero/Hero'
import { Certification } from './sections/Certifications/Certification'

const Home = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Certification />
    </>
  )
}

export default Home
