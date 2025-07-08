export default function AboutEducation({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Education</h2>
        <ul>
          <li><strong>Education:</strong> Bachelor of Computer Science</li>
        </ul>
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
}
