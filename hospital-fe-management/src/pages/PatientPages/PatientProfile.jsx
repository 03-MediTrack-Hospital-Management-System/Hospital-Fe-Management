import PatientLayout from "../../components/PatientComponent/PatientLayout";
import "../../styles/reception.css";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTint, FaBirthdayCake, FaPen } from "react-icons/fa";

export default function PatientProfile() {
  return (
    <PatientLayout>
      <div className="profile-container">
       
       
        <div className="profile-header-card">
          <div className="profile-avatar">
            <FaUser />
          </div>
          <div className="profile-info">
            <h2>John Doe</h2>
            <p><FaEnvelope /> john.doe@example.com</p>
            <p><FaPhone /> +1 (555) 123-4567</p>
            <button className="btn-outline" style={{ marginTop: '15px' }}>
              <FaPen style={{ marginRight: '8px' }} /> Edit Profile
            </button>
          </div>
        </div>

        
        <div className="profile-grid">
          <div className="details-card">
            <h3>Personal Information</h3>

            <div className="info-row">
              <span>Full Name</span>
              <span>Johnathan Doe</span>
            </div>
            <div className="info-row">
              <span>Date of Birth</span>
              <span><FaBirthdayCake style={{ marginRight: '5px', color: '#d44f8c' }} /> Jan 15, 1995</span>
            </div>
            <div className="info-row">
              <span>Gender</span>
              <span>Male</span>
            </div>
            <div className="info-row">
              <span>Blood Group</span>
              <span><FaTint style={{ marginRight: '5px', color: '#ff4d4d' }} /> O+</span>
            </div>
            <div className="info-row">
              <span>Address</span>
              <span>123 Health St, Medicity</span>
            </div>
          </div>

          <div className="details-card">
            <h3>Medical Overview</h3>

            <div className="info-row">
              <span>Height</span>
              <span>180 cm</span>
            </div>
            <div className="info-row">
              <span>Weight</span>
              <span>75 kg</span>
            </div>
            <div className="info-row">
              <span>Allergies</span>
              <span style={{ color: '#d44f8c' }}>Peanuts</span>
            </div>
            <div className="info-row">
              <span>Chronic Conditions</span>
              <span>None</span>
            </div>
            <div className="info-row">
              <span>Emergency Contact</span>
              <span>Jane Doe (Wife)</span>
            </div>
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}
