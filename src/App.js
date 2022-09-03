import React from 'react';
import './App.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Stories from './component/Stories';
import Projects from './component/Projects';
import Team from './component/Team';
import FinishedProject from './component/FinishedProject';

const App = () => {
  return (
    <section>
        <Navbar />
        <Hero />
        <About />
        <Stories />
        <Projects />
        <Team />
        <FinishedProject />
        <Footer />
    </section>
  )
}

export default App