import { useState } from 'react';
import AboutEducation from './modals/AboutEducation';
import AboutExperience from './modals/AboutExperience';
import AboutSkills from './modals/AboutSkills';
import AboutCertificates from './modals/AboutCertificates';

export default function AboutMe() {
    const [showEducationModal, setShowEducationModal] = useState(false);
    const [showExperienceModal, setShowExperienceModal] = useState(false);
    const [showSkillsModal, setShowSkillsModal] = useState(false);
    const [showCertificatesModal, setShowCertificatesModal] = useState(false);

    return (
        <section id="about" className="section about-section">
            <h1>About Me</h1>
            <div className="cards">
                <div>
                    <div className="about-card" onClick={() => setShowEducationModal(true)}>
                        <h3>EDUCATIONS</h3>
                        <img src="./images/example.jpg" alt="Example" className="card-img" />
                    </div>
                    {showEducationModal && <AboutEducation onClose={() => setShowEducationModal(false)} />}
                </div>
                
                <div>
                  <div className="about-card" onClick={() => setShowExperienceModal(true)}>
                    <h3>EXPERIENCES</h3>
                    <img src="./images/example2.jpg" alt="Example2" className="card-img" />
                  </div>
                  {showExperienceModal && <AboutExperience onClose={() => setShowExperienceModal(false)} />}
                </div>
                
                <div>
                  <div className="about-card" onClick={() => setShowSkillsModal(true)}>
                    <h3>SKILLS</h3>
                    <img src="./images/example3.jpg" alt="Example3" className="card-img" />
                  </div>
                  {showSkillsModal && <AboutSkills onClose={() => setShowSkillsModal(false)} />}
                </div>

                <div>
                  <div className="about-card" onClick={() => setShowCertificatesModal(true)}>
                    <h3>CERTIFICATES</h3>
                    <img src="./images/example4.jpg" alt="Example4" className="card-img" />
                  </div>
                  {showCertificatesModal && <AboutCertificates onClose={() => setShowCertificatesModal(false)} />}
                </div>
            </div>
        </section>
    );
}
