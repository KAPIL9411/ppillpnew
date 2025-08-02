import './App.css';
import './styles/header.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/about-us';
import AboutExtended from './pages/about-extended';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/home';
import Identity from './pages/identity';  
import Industries from './pages/industries';
import Products from './pages/products';
import ManufacturingProcess from './pages/manufacturing-process';
import QualityCertifications from './pages/quality-certifications';
import OurTeam from './pages/ourteam';
import Projects from './pages/projects';
import Sustainability from './pages/Sustainability';
import Resources from './pages/Resources';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-extended" element={<AboutExtended />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/manufacturing-process" element={<ManufacturingProcess />} />
        <Route path="/quality-certifications" element={<QualityCertifications />} />
        <Route path="/ourteam" element={<OurTeam/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/sustainability" element={<Sustainability/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/awards" element={<Awards/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
