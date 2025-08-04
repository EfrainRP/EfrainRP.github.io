import { useState, useEffect } from 'react'
import Header from './header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Oculta el header si el usuario baja
      setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="scheme-light-dark scroll-smooth">
      {/* Header */}
      <Header/>

      <main>
        <Hero />
        <About />
        {/* Aquí podrías añadir más secciones: Projects, Contact, etc */}
      </main>
    </div>
  );
}

export default App
