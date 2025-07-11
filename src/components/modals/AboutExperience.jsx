export default function AboutExperience({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <h2>Experience</h2>
          <ul>
            <li><strong>Internship:</strong> Bureau of Fire Protection IT Support</li>
          </ul>
        </div>
        <button onClick={onClose} className="modal-close-btn outside">Close</button>
      </div>
    </div>
  );
}
