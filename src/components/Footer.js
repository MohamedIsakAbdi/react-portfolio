import React from 'react';
import './css/footer.css'
import LIIcon from '../images/LI-In-Bug.png';  
import GitHubIcon from '../images/Github-512.png';

const Footer = () => {
  return (
    <footer>
      <div className="social-icons-bottom">
        <a href="https://www.linkedin.com/in/mohamed-isak-abdi-221049268/" target="_blank" rel="noopener noreferrer">
          <img src={LIIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/MohamedIsakAbdi/" target="_blank" rel="noopener noreferrer">
          <img src={GitHubIcon} alt="GitHub" />
        </a>
        
      </div>
      <p>© 2023 DevelopedByMohamedIsak.</p>
    </footer>
  );
};

export default Footer;
