import React from 'react'

const Hero = () => {
  return (
    
        
       <section id="hero" class="d-flex justify-content-center align-items-center">
        <div id="heroCarousel" class="container carousel carousel-fade"
        data-ride="carousel">
        
        <div class="carousel-item active">
          <div class="carousel-container">
            <h2 class="animate__animated animate__backInDown">
              Let's <span>Help</span>
            </h2>
            <p class="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam iure beatae alias quod, ducimus explicabo.
              adipisicing elit.
            </p>
            <a href="#" class="btn hero-btn animate__animated 
            animate__backInUp">
            Read More
          </a>
          </div>
        </div>
       
         <div class="carousel-item ">
          <div class="carousel-container">
            <h2 class="animate__animated animate__backInDown">
              Save A Life
            </h2>
            <p class="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam iure beatae alias quod, ducimus explicabo.
              adipisicing elit.
            </p>
            <a href="#" class="btn hero-btn animate__animated 
            animate__backInUp">
            Read More
          </a>
          </div>
        </div>
      
         <div class="carousel-item ">
          <div class="carousel-container">
            <h2 class="animate__animated animate__backInDown">
              Make A Donation
            </h2>
            <p class="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam iure beatae alias quod, ducimus explicabo.
              adipisicing elit.
            </p>
            <a href="#" class="btn hero-btn animate__animated 
            animate__backInUp">
            Read More
          </a>
          </div>
        </div>
        
        <a class="carousel-control-prev" href="#heroCarousel" role="button"
        data-slide="prev">
        <span class="carousel-control-prev-icon fas
        fa-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#heroCarousel" role="button"
        data-slide="next"> 
        <span class="carousel-control-next-icon fas
        fa-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      </div>
       </section>
       
    
  )
}

export default Hero