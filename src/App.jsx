import { useState, useEffect } from 'react'
import Header from './header.jsx'
import reactLogo from './assets/react.svg'
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
    <div className="min-h-screen scroll-smooth">
      {/* Header */}
      <Header/>

      <main className="pt-10 p-4">
        {/* Relleno para permitir scroll */}
        {/* Sección About */}
        <section id="about" className="h-screen bg-green-100 p-4 rounded mb-10 text-black">
          <h2 className="text-2xl font-bold">About</h2>
          <p>Contenido de la sección About...</p>
        </section>

        {/* Sección Contact */}
        <section id="contact" className="h-screen bg-yellow-100 p-4 rounded mb-10 text-black">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p>Contenido de la sección Contact...</p>
        </section>
      </main>
    </div>
  );
}

export default App
