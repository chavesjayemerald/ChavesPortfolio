export default function AboutSkills({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Skills</h2>
        <ul>
          <li><strong>Nothing:</strong> Crickets*</li>
        </ul>
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
}
