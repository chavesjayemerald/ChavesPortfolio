export default function AboutCertificates({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Certificates</h2>
        <ul>
          <li><strong>Yes:</strong> Hai!</li>
        </ul>
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
}
