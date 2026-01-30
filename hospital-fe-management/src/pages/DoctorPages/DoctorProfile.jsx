import { useState } from "react";
import DoctorSidebar from "../../components/DoctorComponent/DoctorSidebar";
import GlobalHeader from "../../components/Common/GlobalHeader";
import {
  FaUserMd,
  FaHospital,
  FaAward,
  FaCalendarAlt,
  FaEdit,
  FaSave,
  FaTimes
} from "react-icons/fa";

export default function DoctorProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Dr. John Doe",
    department: "Cardiology Department",
    email: "dr.johndoe@vvcare.com",
    phone: "+1 (555) 123-4567",
    office: "Room 304, Block A",
    license: "MD-12345-US",
    specialization: "Cardiothoracic Surgery",
    education: "Harvard Medical School",
    experience: "12 Years"
  });

  const [backup, setBackup] = useState(profile);

  const handleEdit = () => {
    setBackup(profile); 
    setIsEditing(true);
  };

  const handleCancel = () => {
    setProfile(backup);
    setIsEditing(false);
  };

  const handleSave = () => {
    console.log("Saved profile:", profile);
    setIsEditing(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <GlobalHeader />

      <div className="d-flex flex-grow-1">
        <DoctorSidebar />

        <main className="flex-grow-1 p-4 bg-light">
          <h2 className="fw-bold text-teal">My Profile</h2>
          <p className="text-muted mb-4">
            Manage your personal and professional information
          </p>

          <div className="bg-white p-4 rounded-4 shadow-sm position-relative mb-4">

            {!isEditing ? (
              <button
                className="btn btn-outline-primary position-absolute top-0 end-0 m-3"
                onClick={handleEdit}
              >
                <FaEdit /> Edit
              </button>
            ) : (
              <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
                <button className="btn btn-success" onClick={handleSave}>
                  <FaSave /> Save
                </button>
                <button className="btn btn-secondary" onClick={handleCancel}>
                  <FaTimes /> Cancel
                </button>
              </div>
            )}

            <div className="d-flex gap-4 align-items-center">
              <div
                className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                style={{ width: 120, height: 120, fontSize: 50 }}
              >
                <FaUserMd />
              </div>

              <div>
                {isEditing ? (
                  <input
                    className="form-control mb-2"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                  />
                ) : (
                  <h3>{profile.name}</h3>
                )}

                <p className="mb-1">
                  <FaHospital />{" "}
                  {isEditing ? (
                    <input
                      className="form-control mt-1"
                      value={profile.department}
                      onChange={(e) =>
                        setProfile({ ...profile, department: e.target.value })
                      }
                    />
                  ) : (
                    profile.department
                  )}
                </p>

                <div className="d-flex gap-2 mt-2">
                  <span className="badge bg-secondary">
                    <FaAward /> {profile.experience}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card p-4">
                <h5>Contact Info</h5>

                <Input label="Email" value={profile.email} edit={isEditing}
                  onChange={(v) => setProfile({ ...profile, email: v })} />

                <Input label="Phone" value={profile.phone} edit={isEditing}
                  onChange={(v) => setProfile({ ...profile, phone: v })} />

                <Input label="Office" value={profile.office} edit={isEditing}
                  onChange={(v) => setProfile({ ...profile, office: v })} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="card p-4">
                <h5>Professional Info</h5>

                <Input label="License" value={profile.license} edit={isEditing}
                  onChange={(v) => setProfile({ ...profile, license: v })} />

                <Input label="Specialization" value={profile.specialization} edit={isEditing}
                  onChange={(v) => setProfile({ ...profile, specialization: v })} />

                <Input label="Education" value={profile.education} edit={isEditing}
                  onChange={(v) => setProfile({ ...profile, education: v })} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Input({ label, value, edit, onChange }) {
  return (
    <div className="mb-3">
      <strong>{label}</strong>
      {edit ? (
        <input
          className="form-control mt-1"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <p className="mb-1">{value}</p>
      )}
    </div>
  );
}
