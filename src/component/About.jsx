import React from 'react'

const About = () => {
  return (
    <section class="mt-5">
     <div class="container">
       <div class="row justify-content-center mb-5">
         <div class="col-md-8 text-center heading-section">
           <span>Aboute Us</span>
           <h2 class="mb-3">Our Mission | Vision & Plans</h2>
         </div>
       </div>  
        <div class="row tabs mt-4">
            <div class="col-md-4">
            <ul class="nav nav-pills nav-fill d-md-flex d-block
              flex-column">
              <li class="nav-item text-left">
                <a class="nav-link active py-4" data-toggle="tab"
                href="#about-1">About</a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4" data-toggle="tab"
                href="#about-2">Our Beginning</a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4" data-toggle="tab"
                href="#about-3">Our Mission</a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4" data-toggle="tab"
                href="#about-4">Our Vision</a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4" data-toggle="tab"
                href="#about-5">Our Mandate</a>
              </li>
              <li class="nav-item text-left">
                <a class="nav-link py-4" data-toggle="tab"
                href="#about-6">Our Plans</a>
              </li>
            </ul>
            </div>
            
            </div>
     </div>
    </section>
    
  )
}

export default About