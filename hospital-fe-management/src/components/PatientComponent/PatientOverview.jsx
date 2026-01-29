import { FaCalendarCheck, FaFileMedical, FaUserMd } from "react-icons/fa";

export default function PatientOverview() {
  return (
    <div className="cards-container">
      <div className="overview-card blue">
        <FaCalendarCheck />
        <h2>6</h2>
        <p>Appointments</p>
      </div>

      <div className="overview-card green">
        <FaFileMedical />
        <h2>12</h2>
        <p>Medical Reports</p>
      </div>

      <div className="overview-card pink">
        <FaUserMd />
        <h2>3</h2>
        <p>Doctors Visited</p>
      </div>
    </div>
  );
}

