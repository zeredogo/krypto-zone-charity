import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
     <footer className="footer mt-5">
       <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='footer-des'>
                <h3>Krypto Zone</h3>
                <p className='pb-3'>
                  <em>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Dolor nisi illo sit.</em>
                </p>
                <p>Tudun-Wada Stress <br></br>
                SP 55B, Nigeria
                  <strong> <br></br>
                      Phone:
                    </strong>
                     +2348020952430 
                     <strong><br></br>
                      Email:
                     </strong>
                     kryptozone@gmail.com
                </p>
                <div className='social-links mt-3'>
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
            <div class="col-lg-2 col-nd-6 footer-links">
                <h4>Useful links</h4>
                <ul>
                  <li>
                   <FaChevronRight />
                    <a href="">save a life charity</a>
                  </li>
                  <li>
                   <FaChevronRight />
                    <a href="">Lorem Ipsum</a>
                  </li>
                  
                </ul>
              </div>
              <div class="col-lg-2 col-nd-6 footer-links">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <FaChevronRight />
                    <a href="">Education</a>
                  </li>
                  <li>
                   <FaChevronRight />
                    <a href="">Lorem Ipsum</a>
                  </li>
                  <li>
                   <FaChevronRight />
                    <a href="">Lorem Ipsum</a>
                  </li>
                  <li>
                   <FaChevronRight />
                    <a href="">Lorem Ipsum</a>
                  </li>
                  <li>
                   <FaChevronRight />
                    <a href="">Lorem Ipsum</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our News Letters</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                  elit.</p>
                  <form>
                    <input type='email' name='email'/>
                    <input type='submit' value='Subscribe'/> 
                  </form>
              </div>
          </div>
        </div>
       </div>
       </footer>
  )
}

export default Footer;