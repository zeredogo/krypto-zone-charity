import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Team1 from "../images/image-1.jpg";
import Team2 from "../images/image-2.jpg";
import Team3 from "../images/image-3.jpg";
import Team4 from "../images/image-3.jpg";


const Team = () => {
    return (
        
       <section class="team">
        <div class="container">
          <div class="section-title">
            <h2 class="text-center">Our Team</h2>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Animi, aspernatur. Blanditiis velit facilis 
              rerum laudantium at.</p>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="team-1">
                <div class="pic">
                  <img src={Team1} class="img-fluid" alt=""/>
                </div>
                <div class="team-info">
                  <h4>Wizkid</h4>
                  <span>Specification</span>
                  <div class="social">
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
            
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="team-1">
                <div class="pic">
                  <img src={Team2} class="img-fluid" alt=""/>
                </div>
                <div class="team-info">
                  <h4>Burna Boy</h4>
                  <span>Specification</span>
                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="team-1">
                <div class="pic">
                  <img src={Team3} class="img-fluid" alt=""/>
                </div>
                <div class="team-info">
                  <h4>Davido</h4>
                  <span>Specification</span>
                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="team-1">
                <div class="pic">
                  <img src={Team4} class="img-fluid" alt=""/>
                </div>
                <div class="team-info">
                  <h4>Ice Prince</h4>
                  <span>Specification</span>
                  <div class="social">
                    <a href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
       </section>
    )
}

export default Team;