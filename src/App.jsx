import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App