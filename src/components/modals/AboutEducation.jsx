export default function AboutEducation({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>COLLEGE</h2>
        <div className="modal-content">
          <img src="./images/example.jpg" alt="Example" className="education-img" />
          <p><strong>Year Started:</strong><br />2021</p>
          <p><strong>Year Graduated:</strong><br />2025</p>
          <p><strong>Course/Program:</strong><br />Bachelor of Science in Information Technology</p>
          <p><strong>University:</strong><br />University of Science and Technology of Southern de Oro Philippines College</p>
        </div>


        <h2>COLLEGE</h2>
        <div className="modal-content">
          <img src="./images/example.jpg" alt="Example" className="education-img" />
          <p><strong>Year Started:</strong><br />2021</p>
          <p><strong>Year Graduated:</strong><br />2025</p>
          <p><strong>Course/Program:</strong><br />Bachelor of Science in Information Technology</p>
          <p><strong>University:</strong><br />University of Science and Technology of Southern de Oro Philippines College</p>
        </div>
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
}
