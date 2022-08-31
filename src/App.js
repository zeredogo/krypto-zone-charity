import React from 'react';
import './App.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Stories from './component/Stories';

const App = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <About />
        <Stories />
        <Footer />
    </section>
  )
}

export default App