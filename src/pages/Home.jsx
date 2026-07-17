import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Products />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}

export default Home;