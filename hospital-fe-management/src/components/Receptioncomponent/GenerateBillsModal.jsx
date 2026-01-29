import GenerateBills from "./GenerateBills";

export default function GenerateBillsModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✖</button>
        <GenerateBills />
      </div>
    </div>
  );
}