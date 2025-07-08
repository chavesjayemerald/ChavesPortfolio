import { useState } from 'react';
import AboutEducation from './modals/AboutEducation';
import AboutExperience from './modals/AboutExperience';

export default function AboutMe() {
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);

  return (
    <section id="about" className="section about-section">
      <h1>About Me</h1>
      <div className="cards">
        <div>
          <div className="about-card" onClick={() => setShowEducationModal(true)}>
            <h3>EDUCATION</h3>
            <img src="./images/example.jpg" alt="Example" className="card-img" />
          </div>
          {showEducationModal && <AboutEducation onClose={() => setShowEducationModal(false)} />}
        </div>

        <div>
          <div className="about-card" onClick={() => setShowExperienceModal(true)}>
            <h3>EXPERIENCE</h3>
            <img src="./images/example2.jpg" alt="Example2" className="card-img" />
          </div>
          {showExperienceModal && <AboutExperience onClose={() => setShowExperienceModal(false)} />}
        </div>
      </div>
    </section>
  );
}
