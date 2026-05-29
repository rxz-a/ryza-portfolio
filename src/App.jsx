import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'works', 'skills', 'contact'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {
          threshold: 0,
          rootMargin: '-10% 0px -85% 0px'
        }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden ${darkMode
      ? 'bg-dark-rich text-light-text selection:bg-gold selection:text-dark-pure'
      : 'bg-[#F9FAFB] text-dark-rich selection:bg-gold selection:text-dark-pure'
      }`}>

      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gold/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* All Sections */}
      <main className="flex-grow w-full z-10">
        <section id="home">
          <Home scrollToSection={scrollToSection} darkMode={darkMode} />
        </section>
        <section id="about">
          <About darkMode={darkMode} />
        </section>
        <section id="works">
          <Works darkMode={darkMode} />
        </section>
        <section id="skills">
          <Skills darkMode={darkMode} />
        </section>
        <section id="contact">
          <Contact darkMode={darkMode} />
        </section>
      </main>

      <Footer
        scrollToSection={scrollToSection}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;