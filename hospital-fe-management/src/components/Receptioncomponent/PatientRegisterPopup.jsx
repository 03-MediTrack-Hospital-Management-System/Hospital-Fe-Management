import PatientRegister from "./PatientRegister";
import { IoExitOutline } from "react-icons/io5";

export default function PatientRegisterPopup({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose} style={{borderRadius : '20px' , margin : '2px' , width:'60px'}}><IoExitOutline />Back</button>
        <PatientRegister />
      </div>
    </div>
  );
}
