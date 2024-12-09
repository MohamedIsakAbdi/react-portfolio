import React from 'react';
import './css/portfolio.css'
import './css/footer.css';
import Navbar from './Navbar';
import Footer from './Footer';
import LIIcon from '../images/LI-In-Bug.png';
import GitHubIcon from '../images/Github-512.png';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className="typing">
          <h1>Mohamed Isak Abdi</h1>
        </div>
        <div>
          <h2>Aspiring Web and Software Developer Skilled in HTML, CSS, JavaScript, and Python.</h2>
        </div>
        <div className="social-icons-top">
          <a href="https://www.linkedin.com/in/mohamed-isak-abdi-221049268/" target="_blank" rel="noopener noreferrer">
            <img src={LIIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/MohamedIsakAbdi/" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub" />
          </a>
        </div>
      </header>
      <main>
        <h2 className="My-Skills">My Skills</h2>
        <div className="skills">
          {['JavaScript', 'HTML', 'CSS', 'Git | GitHub', 'Command Line', 'Python'].map(skill => (
            <div className="skill" key={skill}>
              <h3>{skill}</h3>
              <div className="bar" data-percent="95">
                <span className="progress"></span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer /> 
    </div>
  );
};

export default Homepage;
