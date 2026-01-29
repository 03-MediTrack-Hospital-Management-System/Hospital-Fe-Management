import { FaUserInjured, FaCalendarCheck, FaNotesMedical } from "react-icons/fa";

export default function DoctorOverview() {
  return (
    <div className="cards-container">
      <div className="overview-card blue">
        <FaUserInjured />
        <h2>24</h2>
        <p>Patients Today</p>
      </div>

      <div className="overview-card green">
        <FaCalendarCheck />
        <h2>8</h2>
        <p>Appointments</p>
      </div>

      <div className="overview-card pink">
        <FaNotesMedical />
        <h2>14</h2>
        <p>Reports Reviewed</p>
      </div>
    </div>
  );
}
