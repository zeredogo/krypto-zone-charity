import React from 'react';
import { FaAmbulance, FaBook, FaWater } from 'react-icons/fa';

const Stories = () => {
  return (
    <section className="mt-3">
        <div className="stories">
          <div className="container">
            <div className="section-title text-center">
              <h3>Stories</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Modi illum molestias exercitationem aspernatur 
                aperiam necessitatibus nisi pariatur doloribus. </p>
            </div>
            
            <div className="row">
              <div className="col-md-4">
                <div className="story-box overlay shadow">
                  <div className="story-icon">
                   <div>
                   <FaAmbulance />
                   </div>
                  </div>
                  <h2>Health</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Cumque accusantium tenetur natus cum 
                    iure voluptas amet ab enim maiores maxime.</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="story-box overlay shadow">
                  <div className="story-icon">
                    <div>
                    <FaWater />
                    </div>
                  </div>
                  <h2>Clean Water</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Cumque accusantium tenetur natus cum 
                    iure voluptas amet ab enim maiores maxime.</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="story-box overlay shadow">
                  <div className="story-icon">
                    <div>
                    <FaBook />
                    </div>
                  </div>
                  <h2>Education</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Cumque accusantium tenetur natus cum 
                    iure voluptas amet, dutt sataf ab enim maiores maxime.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
       </section>
  )
}

export default Stories;