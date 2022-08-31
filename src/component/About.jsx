import React from 'react'

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
       </div>
      </div>    
    </section>
    
  )
}

export default About