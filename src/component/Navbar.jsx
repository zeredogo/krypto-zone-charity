import React from 'react'

const Navbar = () => {
  return (
    
       <nav class="navbar navbar-expand-lg navbar-light nav-bg fixed-top py-2"
       id="mainNav">
        <div class="container">
            <a class="navbar-brand text-white" href="#" >KZ Charity</a>
            <button class="navbar-toggler navbar-toggler-right" type="button"
            data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar"
            aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="navbar-nav ml-auto my-2 my-lg-0">
                <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Stories</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Team</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Donation</a></li>
            </ul>
        </div>
        </div>
       </nav>
       
  )
}

export default Navbar