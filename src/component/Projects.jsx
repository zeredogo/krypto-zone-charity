import React from 'react';
import Project1 from '../images/about-2.jpg';
import Project2 from "../images/project-2.jpeg";
import Project3 from "../images/project-3.jpeg";
import Project4 from "../images/project-6.jpg";
import Project5 from "../images/project-5.jpg";
import Project6 from "../images/project-4.jpeg";

const Projects = () => {
  return (
    
       <section className="project py-5">
        <div className="container">
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              <h1 className="text-uppercase">Our Latest Projects</h1>
              <p>Lorem ipsum dolor site ameta consectetur adipisicing
              dall man yat  shpall joke xap hall 
                elita till Voluptates, Full date online sales rerum.</p>
            </div>
          </div>
          
          <div className="row">
            
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src={Project1} className="img-fluid grow" alt="project 1"/>
                <a href="#" class="donation text-capitalize">Donate Now</a>
              </div>
              <h4 className="text-capitalize text-center my-2">Project-1</h4>
              <h6 className="text-center">
                Specification
              </h6>
            </div>
           
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src={Project2} className="img-fluid grow" alt="project 2"/>
                <a href="#" class="donation text-capitalize">Donate Now</a>
              </div>
              <h4 className="text-capitalize text-center my-2">Project-2</h4>
              <h6 className="text-center">
                Specification
              </h6>
            </div>
           
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src={Project3} className="img-fluid grow" alt="project 3"/>
                <a href="#" className="donation text-capitalize">Donate Now</a>
              </div>
              <h4 className="text-capitalize text-center my-2">Project-3</h4>
              <h6 className="text-center">
                Specification
              </h6>
            </div>
           
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src={Project4} className="img-fluid grow" alt="project 4"/>
                <a href="#" className="donation text-capitalize">Donate Now</a>
              </div>
              <h4 className="text-capitalize text-center my-2">Project-4</h4>
              <h6 className="text-center">
                Specification
              </h6>
            </div>
          
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src={Project5} className="img-fluid grow" alt="project 5"/>
                <a href="#" className="donation text-capitalize">Donate Now</a>
              </div>
              <h4 className="text-capitalize text-center my-2">Project-5</h4>
              <h6 className="text-center">
                Specification
              </h6>
            </div>
           
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src={Project6} className="img-fluid grow" alt="Project 6"/>
                <a href="#" className="donation text-capitalize">Donate Now</a>
              </div>
              <h4 className="text-capitalize text-center my-2">Project-6</h4>
              <h6 className="text-center">
                Specification
              </h6>
            </div>
         
          </div>
        </div>
       </section>
     
  )
}

export default Projects;