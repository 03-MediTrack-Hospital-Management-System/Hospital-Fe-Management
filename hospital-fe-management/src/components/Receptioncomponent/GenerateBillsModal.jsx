import GenerateBills from "./GenerateBills";
import { IoExitOutline } from "react-icons/io5";

export default function GenerateBillsModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} style={{ borderRadius: '20px', margin: '2px', width: '60px' }}>
          <IoExitOutline />Back
        </button>
        <GenerateBills />
      </div>
    </div>
  );
}