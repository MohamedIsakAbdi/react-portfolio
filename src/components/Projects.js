import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/projects.css';
import myStoreImage from '../images/mystore.png';
import portfolioImage from '../images/portfolio.PNG';
import pizzaImage from '../images/pizza.png';
import weatherImage from '../images/weather.PNG';

function Projects() {
  return (
    <div>
      <Navbar />
      <main>
        <section className="projects">
          <div className="projectTitle">My Projects</div>
          <div className="projectList">
            <ProjectItem
              title="My Store"
              description="A simple e-commerce website built with HTML and CSS."
              link="webstore/html/home.html"
              backgroundImage={myStoreImage} />
            <ProjectItem
              title="Portfolio"
              description="My personal portfolio."
              link="https://portfolio-mohamed.netlify.app/"
              backgroundImage={portfolioImage} />
            <ProjectItem
              title="Pizza Website"
              description="A simple pizza website built with HTML, CSS, and JavaScript."
              link="https://pizza-mohamed.netlify.app/"
              backgroundImage={pizzaImage} />
            <ProjectItem
              title="API Project"
              description="I am working on it."
              link="https://weather-mohamed.netlify.app/"
              backgroundImage={weatherImage} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProjectItem({ title, description, link, backgroundImage }) {
  return (
    <div className="projectItem">
      <div className="bgImage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View project</a>
    </div>
  );
}

export default Projects;
