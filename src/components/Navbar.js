import React from 'react';
import './css/nav.css'; 

function Navbar() {
  const toggleResponsiveClass = () => {
    const element = document.getElementById("myNavbar");
    if (element.className === "navbar") {
      element.className += " responsive";
    } else {
      element.className = "navbar";
    }
  };

  return (
    <div>
      <div className="navbar" id="myNavbar">
        <a className="active" href="/">Home</a>
        <a href="/experience">Experience</a> 
        <a href="/projects">Projects</a>
        <a href="#" className="icon" onClick={toggleResponsiveClass}>&#9776;</a>
      </div>
    </div>
  );
}

export default Navbar;
