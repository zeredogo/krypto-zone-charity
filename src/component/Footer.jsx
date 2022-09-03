import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
                SP 12345, Nigeria
                  <strong> <br></br>
                      Phone:
                    </strong>
                     +5561123456789 
                     <strong><br></br>
                      Email:
                     </strong>
                     test@info.com
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
          </div>
        </div>
       </div>
       </footer>
  )
}

export default Footer