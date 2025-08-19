import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import packageJSON from '../package.json';

import './index.css'

import Projects from './views/Projects.jsx';
import AboutMe from './views/AboutMe.jsx';
import Experience from './views/Experience.jsx';
import Education from './views/Education.jsx';
import Contact from './views/Contact.jsx';
import NotFound from './views/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename={`/${packageJSON.name}/`}>
      <Routes>
        <Route name="" path="/" errorElement={<NotFound/>} element={<AboutMe />} />
        <Route path="/projects" errorElement={<NotFound/>} element={<Projects />} />
        <Route path="/experience" errorElement={<NotFound/>} element={<Experience />} />
        <Route path="/education" errorElement={<NotFound/>} element={<Education />} />
        <Route path="/contact" errorElement={<NotFound/>} element={<Contact />} />

        <Route path="*" element={<NotFound />} /> {/* ✅ Ruta comodín */}
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
