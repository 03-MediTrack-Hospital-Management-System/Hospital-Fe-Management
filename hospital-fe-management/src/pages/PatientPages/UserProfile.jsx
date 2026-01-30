import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/main.css";
import { 
  FaArrowLeft, 
  FaEdit, 
  FaSave, 
  FaTimes,
  FaUserCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaVenusMars,
  FaTint,
  FaShieldAlt,
  FaUserMd,
  FaHistory,
  FaAllergies,
  FaHeartbeat,
  FaDownload,
  FaPrint,
  FaShare
} from "react-icons/fa";

export default function UserProfilePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Smith",
    age: 34,
    gender: "Male",
    bloodType: "O+",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    address: "123 Health St, Medical City",
    dob: "1990-03-15",
    insurance: "BlueCross PPO",
    memberId: "BC-78901234",
    primaryDoctor: "Dr. Sarah Johnson",
    emergencyContact: "Jane Smith (555) 987-6543"
  });

  const [medicalData, setMedicalData] = useState({
    allergies: ["Penicillin", "Peanuts"],
    chronicConditions: ["Asthma", "Hypertension"],
    medications: ["Lisinopril 10mg", "Albuterol Inhaler"],
    surgeries: ["Appendectomy (2015)", "Knee Arthroscopy (2018)"],
    immunizations: ["COVID-19 Vaccine", "Flu Shot", "Tetanus"]
  });

  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", status: "normal" },
    { label: "Heart Rate", value: "72 bpm", status: "normal" },
    { label: "BMI", value: "24.2", status: "healthy" },
    { label: "Cholesterol", value: "180 mg/dL", status: "borderline" },
    { label: "Glucose", value: "95 mg/dL", status: "normal" }
  ];

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    
    setUserData({...userData});
    setMedicalData({...medicalData});
  };

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMedicalChange = (field, value) => {
    setMedicalData(prev => ({
      ...prev,
      [field]: value.split(',').map(item => item.trim())
    }));
  };

  return (
    <div className="container user-profile-page">
    
      <div className="profile-page-header">
        <button 
          className="btn-back"
          onClick={() => navigate('/patient')}
        >
          <FaArrowLeft /> Back to Dashboard
        </button>
        
        <div className="header-title">
          <h1>My Health Profile</h1>
          <p>Complete medical information and history</p>
        </div>

        <div className="header-actions">
          {isEditing ? (
            <>
              <button className="btn-secondary" onClick={handleCancel}>
                <FaTimes /> Cancel
              </button>
              <button className="btn-primary" onClick={handleSave}>
                <FaSave /> Save Changes
              </button>
            </>
          ) : (
            <button className="btn-primary" onClick={handleEditToggle}>
              <FaEdit /> Edit Profile
            </button>
          )}
        </div>
      </div>

      
      <div className="profile-content-grid">
       
        <div className="profile-left-column">
        
          <div className="profile-card">
            <div className="profile-avatar-section">
              <div className="avatar-large">
                <FaUserCircle />
              </div>
              <div className="avatar-info">
                <h2>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="edit-input"
                    />
                  ) : (
                    userData.name
                  )}
                </h2>
                <div className="profile-tags">
                  <span className="tag">
                    <FaTint /> {userData.bloodType}
                  </span>
                  <span className="tag">
                    <FaVenusMars /> {userData.gender}
                  </span>
                  <span className="tag">
                    {userData.age} years
                  </span>
                </div>
              </div>
            </div>

          
            <div className="info-section">
              <h3>Personal Information</h3>
              <div className="info-grid">
                <InfoField 
                  icon={<FaCalendarAlt />}
                  label="Date of Birth"
                  value={userData.dob}
                  editing={isEditing}
                  onChange={(value) => handleInputChange('dob', value)}
                  type="date"
                />
                <InfoField 
                  icon={<FaPhone />}
                  label="Phone"
                  value={userData.phone}
                  editing={isEditing}
                  onChange={(value) => handleInputChange('phone', value)}
                />
                <InfoField 
                  icon={<FaEnvelope />}
                  label="Email"
                  value={userData.email}
                  editing={isEditing}
                  onChange={(value) => handleInputChange('email', value)}
                  type="email"
                />
                <InfoField 
                  icon={<FaMapMarkerAlt />}
                  label="Address"
                  value={userData.address}
                  editing={isEditing}
                  onChange={(value) => handleInputChange('address', value)}
                />
                <InfoField 
                  icon={<FaShieldAlt />}
                  label="Insurance"
                  value={userData.insurance}
                  editing={isEditing}
                  onChange={(value) => handleInputChange('insurance', value)}
                />
                <InfoField 
                  icon={<FaUserMd />}
                  label="Primary Doctor"
                  value={userData.primaryDoctor}
                  editing={isEditing}
                  onChange={(value) => handleInputChange('primaryDoctor', value)}
                />
              </div>
            </div>
          </div>

         
          <div className="profile-card">
            <h3>Health Metrics</h3>
            <div className="metrics-grid">
              {healthMetrics.map((metric, index) => (
                <div key={index} className={`metric-card ${metric.status}`}>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-status">{metric.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="profile-right-column">
         
          <div className="profile-card">
            <h3>Medical History</h3>
            
            <div className="medical-section">
              <h4><FaAllergies /> Allergies</h4>
              {isEditing ? (
                <textarea
                  value={medicalData.allergies.join(', ')}
                  onChange={(e) => handleMedicalChange('allergies', e.target.value)}
                  className="edit-textarea"
                  placeholder="Enter allergies separated by commas"
                />
              ) : (
                <div className="allergy-tags">
                  {medicalData.allergies.map((allergy, index) => (
                    <span key={index} className="allergy-tag">{allergy}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="medical-section">
              <h4><FaHeartbeat /> Chronic Conditions</h4>
              {isEditing ? (
                <textarea
                  value={medicalData.chronicConditions.join(', ')}
                  onChange={(e) => handleMedicalChange('chronicConditions', e.target.value)}
                  className="edit-textarea"
                  placeholder="Enter conditions separated by commas"
                />
              ) : (
                <ul className="medical-list">
                  {medicalData.chronicConditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="medical-section">
              <h4><FaHistory /> Current Medications</h4>
              {isEditing ? (
                <textarea
                  value={medicalData.medications.join(', ')}
                  onChange={(e) => handleMedicalChange('medications', e.target.value)}
                  className="edit-textarea"
                  placeholder="Enter medications separated by commas"
                />
              ) : (
                <ul className="medical-list">
                  {medicalData.medications.map((med, index) => (
                    <li key={index}>{med}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="medical-section">
              <h4>Surgical History</h4>
              {isEditing ? (
                <textarea
                  value={medicalData.surgeries.join(', ')}
                  onChange={(e) => handleMedicalChange('surgeries', e.target.value)}
                  className="edit-textarea"
                  placeholder="Enter surgeries separated by commas"
                />
              ) : (
                <ul className="medical-list">
                  {medicalData.surgeries.map((surgery, index) => (
                    <li key={index}>{surgery}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="medical-section">
              <h4>Immunizations</h4>
              {isEditing ? (
                <textarea
                  value={medicalData.immunizations.join(', ')}
                  onChange={(e) => handleMedicalChange('immunizations', e.target.value)}
                  className="edit-textarea"
                  placeholder="Enter immunizations separated by commas"
                />
              ) : (
                <ul className="medical-list">
                  {medicalData.immunizations.map((immunization, index) => (
                    <li key={index}>{immunization}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

         
          <div className="profile-card">
            <h3>Emergency Contact</h3>
            <div className="emergency-contact">
              {isEditing ? (
                <input
                  type="text"
                  value={userData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  className="edit-input full-width"
                  placeholder="Name and phone number"
                />
              ) : (
                <>
                  <div className="contact-name">{userData.emergencyContact.split(' ')[0] + ' ' + userData.emergencyContact.split(' ')[1]}</div>
                  <div className="contact-phone">
                    <FaPhone /> {userData.emergencyContact.split('(')[1]}
                  </div>
                </>
              )}
            </div>
          </div>

       
          <div className="profile-actions">
            <button className="btn-secondary">
              <FaDownload /> Download Records
            </button>
            <button className="btn-secondary">
              <FaPrint /> Print Summary
            </button>
            <button className="btn-secondary">
              <FaShare /> Share with Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function InfoField({ icon, label, value, editing, onChange, type = "text" }) {
  return (
    <div className="info-field">
      <div className="info-icon">{icon}</div>
      <div className="info-content">
        <label>{label}</label>
        {editing ? (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
    </div>
  );
}