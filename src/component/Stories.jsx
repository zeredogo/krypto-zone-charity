import React from 'react'
import { FaAmbulance, FaBook, FaWater } from 'react-icons/fa'

const Stories = () => {
  return (
    <section class="mt-3">
        <div class="stories">
          <div class="container">
            <div class="section-title text-center">
              <h3>Stories</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Modi illum molestias exercitationem aspernatur 
                aperiam necessitatibus nisi pariatur doloribus. </p>
            </div>
            
            <div class="row">
              <div class="col-md-4">
                <div class="story-box overlay shadow">
                  <div class="story-icon">
                    <FaAmbulance />
                  </div>
                  <h2>Health</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Cumque accusantium tenetur natus cum 
                    iure voluptas amet ab enim maiores maxime.</p>
                </div>
              </div>
              
              <div class="col-md-4">
                <div class="story-box overlay shadow">
                  <div class="story-icon">
                    <FaWater />
                  </div>
                  <h2>Clean Water</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Cumque accusantium tenetur natus cum 
                    iure voluptas amet ab enim maiores maxime.</p>
                </div>
              </div>
              
              <div class="col-md-4">
                <div class="story-box overlay shadow">
                  <div class="story-icon">
                    <FaBook />
                  </div>
                  <h2>Education</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Cumque accusantium tenetur natus cum 
                    iure voluptas amet ab enim maiores maxime.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
       </section>
  )
}

export default Stories