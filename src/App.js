import React from 'react';
import './App.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <section>
        <Navbar />
        <Footer />
    </section>
  )
}

export default App