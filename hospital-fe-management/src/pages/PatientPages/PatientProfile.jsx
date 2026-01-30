import { useState } from "react";
import PatientLayout from "../../components/PatientComponent/PatientLayout";
import "../../styles/reception.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaBirthdayCake,
  FaPen,
  FaSave,
  FaTimes
} from "react-icons/fa";

export default function PatientProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Johnathan Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dob: "Jan 15, 1995",
    gender: "Male",
    blood: "O+",
    address: "123 Health St, Medicity",
    height: "180 cm",
    weight: "75 kg",
    allergies: "Peanuts",
    emergency: "Jane Doe (Wife)"
  });

  const handleChange = (key, value) => {
    setProfile({ ...profile, [key]: value });
  };

  return (
    <PatientLayout>
      <div className="profile-container">

        {/* ===== HEADER ===== */}
        <div className="profile-header-card">
          <div className="profile-avatar">
            <FaUser />
          </div>

          <div className="profile-info">
            <h2>{profile.name}</h2>
            <p><FaEnvelope /> {profile.email}</p>
            <p><FaPhone /> {profile.phone}</p>

            {!isEditing ? (
              <button
                style={{
                  marginTop: "15px",
                  padding: "10px 18px",
                  borderRadius: "8px",
                  background: "#0b5c63",
                  color: "white",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  fontWeight: "600"
                }}
                onClick={() => setIsEditing(true)}
              >
                <FaPen /> Edit Profile
              </button>
            ) : (
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <button
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    background: "#0b5c63",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                  onClick={() => setIsEditing(false)}
                >
                  <FaSave /> Save
                </button>

                <button
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    background: "#e5e7eb",
                    border: "none",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                  onClick={() => setIsEditing(false)}
                >
                  <FaTimes /> Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ===== DETAILS ===== */}
        <div className="profile-grid">

          {/* Personal Info */}
          <div className="details-card">
            <h3>Personal Information</h3>

            <InfoRow label="Full Name" value={profile.name} edit={isEditing} onChange={v => handleChange("name", v)} />
            <InfoRow label="Date of Birth" value={profile.dob} icon={<FaBirthdayCake />} edit={isEditing} onChange={v => handleChange("dob", v)} />
            <InfoRow label="Gender" value={profile.gender} edit={isEditing} onChange={v => handleChange("gender", v)} />
            <InfoRow label="Blood Group" value={profile.blood} icon={<FaTint color="#ff4d4d" />} edit={isEditing} onChange={v => handleChange("blood", v)} />
            <InfoRow label="Address" value={profile.address} edit={isEditing} onChange={v => handleChange("address", v)} />
          </div>

          {/* Medical Info */}
          <div className="details-card">
            <h3>Medical Overview</h3>

            <InfoRow label="Height" value={profile.height} edit={isEditing} onChange={v => handleChange("height", v)} />
            <InfoRow label="Weight" value={profile.weight} edit={isEditing} onChange={v => handleChange("weight", v)} />
            <InfoRow label="Allergies" value={profile.allergies} edit={isEditing} onChange={v => handleChange("allergies", v)} />
            <InfoRow label="Emergency Contact" value={profile.emergency} edit={isEditing} onChange={v => handleChange("emergency", v)} />
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}

/* ---------- Reusable Row ---------- */

function InfoRow({ label, value, icon, edit, onChange }) {
  return (
    <div className="info-row">
      <span>{label}</span>

      {!edit ? (
        <span>
          {icon && <span style={{ marginRight: 6 }}>{icon}</span>}
          {value}
        </span>
      ) : (
        <input
          className="search-input"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
