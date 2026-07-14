import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
