import React from 'react';
import Finished1 from "../images/finished-6.jpg";
import Finished2 from "../images/finished-2.jpeg";
import Finished3 from "../images/finished-3.jpg";
import Finished4 from "../images/finished-4.jpg";
import Finished5 from "../images/finished-5.jpg";
import Finished6 from "../images/finished-7.webp";

const FinishedProject = () => {
  return (
    
       <section>
        <div className="container">
          <div className="text-center">
            <h2 className="mb-5">Finished Projects</h2>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6">
              <a className="project-item" href="">
                <span className="text">
                  <span className="des">
                    <h2>Food Aid</h2>
                    <p className="mb-0">
                      This is the feeding the nation 
                      Project, we have just completed feeding 
                      Bassa Local Government.
                    </p>
                  </span>
                </span>
                <img src={Finished1} className="img-fluid" alt=""/>
              </a>
            </div>
            
            <div className="col-lg-6">
              <a className="project-item" href="">
                <span className="text">
                  <span className="des">
                    <h2>Education</h2>
                    <p className="mb-0">
                      This project was done in Jos to 
                      Educate more than 1 million Studen 
                      for free and we will help secure the world.  
                    </p>
                  </span>
                </span>
                <img src={Finished2} className="img-fluid" alt=""/>
              </a>
            </div>
            
            <div className="col-lg-6">
              <a className="project-item" href="">
                <span className="text">
                  <span className="des">
                    <h2>House</h2>
                    <p className="mb-0">
                      This is a finish housing we just 
                      finish too house about 5000 family
                      in Nigeria.
                    </p>
                  </span>
                </span>
                <img src={Finished3} className="img-fluid" alt=""/>
              </a>
            </div>
            
            <div className="col-lg-6">
              <a className="project-item" href="">
                <span className="text">
                  <span className="des">
                    <h2>Clean Water</h2>
                    <p className="mb-0">
                      This project was done in over 30 local 
                      government to produce clean water for 
                      the community. 
                    </p>
                  </span>
                </span>
                <img src={Finished4} className="img-fluid" alt="" />
              </a>
            </div>
            
            <div className="col-lg-6">
              <a className="project-item" href="">
                <span className="text">
                  <span className="des">
                    <h2>Skill</h2>
                    <p className="mb-0">
                      This project is all about training over 1 million 
                      people out of every state in Nigeria, the project 
                      will cover all part of Technology and some others.   
                    </p>
                  </span>
                </span>
                <img src={Finished5} className="img-fluid" alt="" />
              </a>
            </div>
            
            <div className="col-lg-6">
              <a className="project-item" href="">
                <span className="text">
                  <span className="des">
                    <h2>clean street</h2>
                    <p className="mb-0">
                      This project is to keep the all gat dpoy vam bath 
                      street clean and to prevent disease from 
                      contacting the cummunity.
                    </p>
                  </span>
                </span>
                <img src={Finished6} className="img-fluid" alt="" />
              </a>
            </div>
            
          </div>
        </div>
       </section>
       
  )
}

export default FinishedProject;