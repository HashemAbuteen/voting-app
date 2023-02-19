import "./Popup.css";
function Popup({ message, onClose }) {
  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-box">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default Popup;
