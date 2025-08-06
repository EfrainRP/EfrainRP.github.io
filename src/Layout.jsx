// import { useState, useEffect } from 'react'
import Hero from './component/Hero.jsx'
import About from './component/About.jsx'
import Header from './component/Header.jsx';
// import './App.css'

export default function Layout({ children }) {
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     // Oculta el header si el usuario baja
  //     setIsHeaderVisible(currentScrollY < lastScrollY || currentScrollY <= 50);
  //     setLastScrollY(currentScrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [lastScrollY]);

  return (
    <div className="scheme-light-dark scroll-smooth">
      {/* Header */}
      <Header/>

      <main>
        {children}{/* Aquí podrías añadir más secciones: Projects, Contact, etc */}
      </main>
    </div>
  );
}