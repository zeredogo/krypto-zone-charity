import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    
        
       <section id="hero" className="d-flex justify-content-center align-items-center">
        <div id="heroCarousel" className="container carousel carousel-fade"
        data-ride="carousel">
        
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animate__animated animate__backInDown">
              Let's <span>Help</span>
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam iure beatae alias ast fast live quod, ducimus explicabo.
              adipisicing elit.
            </p>
            <a href="#" className="btn hero-btn animate__animated 
            animate__backInUp">
            Read More
          </a>
          </div>
        </div>
       
         <div className="carousel-item ">
          <div className="carousel-container">
            <h2 className="animate__animated animate__backInDown">
              Save A Life
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam iure beatae alias quod, ducimus explicabo.
              adipisicing elit.
            </p>
            <a href="#" className="btn hero-btn animate__animated 
            animate__backInUp">
            Read More
          </a>
          </div>
        </div>
      
         <div className="carousel-item ">
          <div className="carousel-container">
            <h2 className="animate__animated animate__backInDown">
              Make A Donation
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam iure beatae alias quod, Gita fully yors man ducimus explicabo.
              adipisicing elit.
            </p>
            <a href="#" className="btn hero-btn animate__animated 
            animate__backInUp">
            Read More
          </a>
          </div>
        </div>
        
        <a className="carousel-control-prev" href="#heroCarousel" role="button"
        data-slide="prev">
        <span className="carousel-control-prev-icon fas
        fa-chevron-left" aria-hidden="true"></span>
        <span className="sr-only"><FaChevronLeft/></span>
      </a>
      <a className="carousel-control-next" href="#heroCarousel" role="button"
        data-slide="next"> 
        <span className="carousel-control-next-icon fas
        fa-chevron-right" aria-hidden="true"></span>
        <span className="sr-only"><FaChevronRight/></span>
      </a>
      </div>
       </section>
       
    
  )
}

export default Hero;