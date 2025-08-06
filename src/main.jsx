import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'

import Start from './view/Start.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename="/about_efrain">
      <Routes>
        <Route path="/" element={<Start />} />
        {/* <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} /> */}
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
