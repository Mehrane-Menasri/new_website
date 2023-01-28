import React from 'react';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/includes/Footer';
import Products from './components/pages/Products';
import Services from './components/pages/Services';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Products />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
