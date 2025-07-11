import { useEffect, useRef } from 'react';

export default function AboutEducation({ onClose }) {
  const modalRef = useRef(null);

  const handleMouseEnter = () => {
    document.body.style.overflow = '';
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div
          className="modal"
          ref={modalRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2>COLLEGE</h2>
          <div className="modal-content">
            <img src="./images/schools/ustp.jpg" alt="Example" className="education-img" />
            <p><strong>Year Started:</strong><br />2021</p>
            <p><strong>Year Graduated:</strong><br />2025</p>
            <p><strong>Course/Program:</strong><br />Bachelor of Science in Information Technology</p>
            <p><strong>University:</strong><br />University of Science and Technology of Southern Philippines</p>
          </div>
          <h2>SENIOR HIGH SCHOOL</h2>
          <div className="modal-content">
            <img src="./images/schools/spc.jpg" alt="Example" className="education-img" />
            <p><strong>Year Started:</strong><br />2019</p>
            <p><strong>Year Graduated:</strong><br />2021</p>
            <p><strong>Course/Program:</strong><br />Information Commucation and Technologies</p>
            <p><strong>College:</strong><br />Southern de Oro Philippines College</p>
          </div>
          <h2>JUNIOR HIGH SCHOOL</h2>
          <div className="modal-content">
            <img src="./images/schools/mogchs.jpg" alt="Example" className="education-img" />
            <p><strong>Year Started:</strong><br />2013</p>
            <p><strong>Year Graduated:</strong><br />2019</p>
            <p><strong>TLE:</strong><br />Food Processing</p>
            <p><strong>School:</strong><br />Misamis Oriental General Comprehensive Highschool</p>
          </div>
          <h2>ELEMENTARY SCHOOL</h2>
          <div className="modal-content">
            <img src="./images/schools/gusa.jpg" alt="Example" className="education-img" />
            <p><strong>Year Started:</strong><br />2007</p>
            <p><strong>Year Graduated:</strong><br />2013</p>
            <p><strong>School:</strong><br />Gusa Elementary School</p>
          </div>
        </div>

        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
}
