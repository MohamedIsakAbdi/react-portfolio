import React from 'react';
import './css/style.css'; // Adjust path as needed
import Footer from './Footer';
import Navbar from './Navbar';
import { timelineItems, educationItems } from './data';

function Experience() {
  return (
    <div>
      <Navbar />
      <main className="experience-main">
        <section className="experience-profile">
          {/* Education Section */}
          <div className="experience-education">
            <h1 className="experience-h1">Education & Training</h1>
            {educationItems.map((edu, index) => (
              <div key={index} className="experience-education-item">
                <h2>{edu.title}</h2>
                <p>{edu.period}</p>
                {edu.yearData ? (
                  edu.yearData.map((year, yearIndex) => (
                    <div key={yearIndex} className="experience-year">
                      <h3>{year.year}</h3>
                      {year.modules.map((module, moduleIndex) => (
                        <div key={moduleIndex} className="experience-module">
                          <div className="experience-module-name">{module.name}</div>
                          <div className="experience-module-result">{module.result}</div>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  <ul>
                    {edu.modules.map((module, index) => (
                      <li key={index}>{module}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Work Experience Section */}
          <div className="experience-work-experience">
            <h1 className="experience-h1">Work Experience</h1>
            <div className="experience-timeline">
              {timelineItems.map((item) => (
                <div className="experience-timeline-item" key={item.id}>
                  <div className="timeline-content">
                    <h2>{item.title}</h2>
                    <p>
                      {item.company} | {item.period}
                    </p>
                    <ul>
                      {item.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="experience-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Experience;

