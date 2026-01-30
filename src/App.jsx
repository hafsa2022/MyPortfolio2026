import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";



const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <TechStack /> */}
      <Tech />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App