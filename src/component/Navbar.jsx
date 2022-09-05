import React from 'react';

const Navbar = () => {
  return (
    
       <nav className="navbar navbar-expand-lg navbar-light nav-bg fixed-top py-2"
       id="mainNav">
        <div className="container">
            <a className="navbar-brand text-white" href="#" >KZ Charity</a>
            <button className="navbar-toggler navbar-toggler-right" type="button"
            data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar"
            aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item"><a class="nav-link" href="#">Donation</a></li>
            </ul>
        </div>
        </div>
       </nav>
       
  )
}

export default Navbar;