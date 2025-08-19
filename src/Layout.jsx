// import { useState, useEffect } from 'react'
import Header from './component/Header.jsx';
// import './App.css'

export default function Layout({ children, className }) {
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
    <div className="flex flex-col min-h-screen scheme-light-dark scroll-smooth">
      {/* Header */}
      <Header/>

      <main className={`flex-grow ${className}`}>
        {children}{/* Aquí podrías añadir más secciones: Projects, Contact, etc */}
      </main>
      

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Made by Efrain Robles.🦕</p>
        <p>Made with 🧠 & 🔨 in React & Tailwind.</p>
      </footer>
    </div>
  );
}