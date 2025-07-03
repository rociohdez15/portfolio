import React, { useRef } from 'react';
import AboutMe from './components/About';
import ContactSection from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import StackTecnologico from './components/Skills';

function App() {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="text-white scroll-smooth">
      <Navbar
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
        aboutMeRef={aboutMeRef}
        contactRef={contactRef}
      />
      <Hero />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={skillsRef}>
        <StackTecnologico />
      </section>
      <section ref={aboutMeRef}>
        <AboutMe />
      </section>
      <section ref={contactRef}>
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
