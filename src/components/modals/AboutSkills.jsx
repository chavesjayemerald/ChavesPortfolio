export default function AboutSkills({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <h2>TECH STACK</h2>

          <div className="skills-scroller-wrapper">
            <div className="skills-scroller">
              <img src="./images/django-icon.png" alt="Django" />
              <img src="./images/react-icon.png" alt="React" />
              <img src="./images/xampp-icon.png" alt="XAMPP" />
              <img src="./images/github-icon.png" alt="GitHub" />
              <img src="./images/python-icon.png" alt="Python" />
              <img src="./images/vite-icon.png" alt="Vite" />
              <img src="./images/git-icon.png" alt="Git" />
              <img src="./images/arduino-icon.png" alt="Arduino" />
              {/* Repeats */}
              <img src="./images/django-icon.png" alt="Django" />
              <img src="./images/react-icon.png" alt="React" />
              <img src="./images/xampp-icon.png" alt="XAMPP" />
              <img src="./images/github-icon.png" alt="GitHub" />
              <img src="./images/python-icon.png" alt="Python" />
              <img src="./images/vite-icon.png" alt="Vite" />
              <img src="./images/git-icon.png" alt="Git" />
              <img src="./images/arduino-icon.png" alt="Arduino" />
            </div>
          </div>
        </div>

        {/* Now outside modal box */}
        <button onClick={onClose} className="modal-close-btn outside">Close</button>
      </div>
    </div>
  );
}
