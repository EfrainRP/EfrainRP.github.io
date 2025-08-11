import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import packageJSON from '../package.json';

import './index.css'

import Projects from './views/Projects.jsx';
import AboutMe from './views/AboutMe.jsx';
import Experience from './views/Experience.jsx';
import Education from './views/Education.jsx';
import NotFound from './views/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename={`/${packageJSON.name}/`}>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        {/* <Route path="/proyectos" element={<Proyectos />} /> */}

        <Route path="*" element={<NotFound />} /> {/* ✅ Ruta comodín */}
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
