export default function AboutExperience({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Experience</h2>
        <ul>
          <li><strong>Internship:</strong> Buearu of Fire Protection IT Support</li>
        </ul>
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
}
