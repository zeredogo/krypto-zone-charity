import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Team1 from "../images/image-1.jpg";
import Team2 from "../images/image-2.jpg";
import Team3 from "../images/image-3.jpg";
import Team4 from "../images/image-3.jpg";


const Team = () => {
    return (
        
       <section className="team">
        <div className="container">
          <div className="section-title">
            <h2 className="text-center">Our Team</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Animi, aspernatur. Blanditiis velit facilis 
              rerum laudantium at.</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-1">
                <div className="pic">
                  <img src={Team1} className="img-fluid" alt=""/>
                </div>
                <div className="team-info">
                  <h4>Wizkid</h4>
                  <span>Specification</span>
                  <div className="social">
                    <a href="">
                      <FaTwitter />
                    </a>
                    <a href="">
                      <FaFacebook />
                    </a>
                    <a href="">
                      <FaInstagram />
                    </a>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-1">
                <div className="pic">
                  <img src={Team2} className="img-fluid" alt=""/>
                </div>
                <div className="team-info">
                  <h4>James</h4>
                  <span>Specification</span>
                  <div className="social">
                    <a href="">
                      <FaTwitter />
                    </a>
                    <a href="">
                      <FaFacebook />
                    </a>
                    <a href="">
                      <FaInstagram />
                    </a>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-1">
                <div className="pic">
                  <img src={Team3} className="img-fluid" alt=""/>
                </div>
                <div className="team-info">
                  <h4>Davido</h4>
                  <span>Specification</span>
                  <div className="social">
                    
                  </div><a href="">
                      <FaTwitter />
                    </a>
                    <a href="">
                      <FaFacebook />
                    </a>
                    <a href="">
                      <FaInstagram />
                    </a>
                    <a href="">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-1">
                <div className="pic">
                  <img src={Team4} className="img-fluid" alt=""/>
                </div>
                <div className="team-info">
                  <h4>Ice Prince</h4>
                  <span>Specification</span>
                  <div className="social">
                    <a href="">
                      <FaTwitter />
                    </a>
                    <a href="">
                      <FaFacebook />
                    </a>
                    <a href="">
                      <FaInstagram />
                    </a>
                    <a href="">
                      <FaLinkedin />
                    </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
       </section>
    )
}

export default Team;