import React from 'react';
import About1 from '../images/about-1.jpg';
import About2 from '../images/about-9.jpg';
import About3 from '../images/about-3.jpg';
import About4 from '../images/about-8.jpeg';
import About5 from '../images/about-5.jpg';
import About6 from '../images/about-4.jpg';

const About = () => {
  return (
    <section className="mt-5">
     <div className='container'>
       <div className='row justify-content-center mb-5'>
        <div className='col-md-8 text-center heading-section'>
          <span>About Us</span>
          <h2 className='mb-3'>Our Mission | Vision & Plans</h2>
        </div>
       </div>
       <div className='row tabs mt-4'>
        <div className='col-md-4'>
          <ul className='nav nav-pills nav-fill d-md-flex d-block
          flex-column'>
            <li className='nav-item text-left'>
              <a className='nav-link active py-4' data-toggle='tab'
              href='#about-1'>About</a>
            </li>
            <li className='nav-item text-left'>
              <a className='nav-link py-4' data-toggle='tab'
              href='#about-2'>Our Beginning</a>
            </li>
            <li className='nav-item text-left'>
              <a className='nav-link py-4' data-toggle='tab'
              href='#about-3'>Our Mission</a>
            </li>
            <li className='nav-item text-left'>
              <a className='nav-link py-4' data-toggle='tab'
              href='#about-4'>Our Vision</a>
            </li>
            <li className='nav-item text-left'>
              <a className='nav-link  py-4' data-toggle='tab'
              href='#about-5'>Our Mandate</a>
            </li>
            <li className='nav-item text-left'>
              <a className='nav-link  py-4' data-toggle='tab'
              href='#about-6'>Our Plans</a>
            </li>
          </ul>
        </div>
        <div className='col-md-8'>
          <div className='tab-content'>
            <div className='tab-pane container p-0
             active' id='about-1'>
              <img src={About1} className='img' alt='about image 1'/>
              <h3><a href='#'>About Us</a></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                 elit. Aut dicta amet, enim corrupti aspernatur, 
                 cumque libero adipisci harum unde,ad expedita 
                 nobis quisquam laboriosam tell fugiat!</p>
             </div>
             <div className='tab-pane container p-0
             ' id='about-2'>
              <img src={About2} className='img' alt='about image 1'/>
              <h3><a href='#'>Our Beginning</a></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                 elit. Aut dicta amet enim corrupti aspernatur, 
                 cumque libero adipisci harum unde,ad expedita 
                 nobis quisquam laboriosam fugiat!</p>
             </div>
             <div className='tab-pane container p-0
             ' id='about-3'>
              <img src={About3} className='img' alt='about image 1'/>
              <h3><a href='#'>Our Mission</a></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                 elit. Aut dicta amet enim corrupti aspernatur, 
                 cumque libero adipisci harum unde,ad expedita 
                 nobis quisquam laboriosam fugiat!</p>
             </div>
             <div className='tab-pane container p-0
             ' id='about-4'>
              <img src={About4} className='img' alt='about image 1'/>
              <h3><a href='#'>Our Vision</a></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                 elit. Aut dicta amet enim corrupti aspernatur, 
                 cumque libero adipisci harum unde,ad expedita 
                 nobis quisquam laboriosam fugiat!</p>
             </div>
             <div className='tab-pane container p-0
             ' id='about-5'>
              <img src={About5} className='img' alt='about image 1'/>
              <h3><a href='#'>Our Mandate</a></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                 elit. Aut dicta amet enim corrupti aspernatur, 
                 cumque libero adipisci harum unde,ad expedita 
                 nobis quisquam laboriosam fugiat!</p>
             </div>
             <div className='tab-pane container p-0
             ' id='about-6'>
              <img src={About6} className='img' alt='about image 1'/>
              <h3><a href='#'>Our Plans</a></h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing
                 elit. Aut dicta amet enim corrupti aspernatur, 
                 cumque libero adipisci harum unde,ad expedita 
                 nobis quisquam laboriosam fugiat!</p>
             </div>
          </div>
        </div>
       </div>
      </div>    
    </section>
    
  )
}

export default About;