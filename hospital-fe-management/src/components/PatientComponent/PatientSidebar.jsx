import { NavLink, useNavigate } from "react-router-dom";
import {
  FaThLarge,
  FaCalendarCheck,
  FaFileMedicalAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaHospitalSymbol,
  FaCommentDots
} from "react-icons/fa";

import "../../styles/components/PatientSidebar.css";

export default function PatientSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens if stored (example)
    // localStorage.removeItem("token");

    // Redirect to login
    navigate("/login");
  };

  return (
    <aside className="patient-dashboard-content-left patient-sidebar">
      <div className="menu-list">
        <h3 className="menu-label">Menu</h3>

        <NavLink
          to="/patient"
          end
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          <FaThLarge />
          Dashboard
        </NavLink>

        <NavLink
          to="/patient/appointments"
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          <FaCalendarCheck />
          Appointments
        </NavLink>

        <NavLink
          to="/patient/reports"
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          <FaFileMedicalAlt />
          Reports
        </NavLink>

        <NavLink
          to="/patient/profile"
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          <FaUser />
          Profile
        </NavLink>

        <NavLink
          to="/patient/feedback"
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          <FaCommentDots />
          Feedbacks
        </NavLink>

        <NavLink
          to="/patient/settings"
          className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`}
        >
          <FaCog />
          Settings
        </NavLink>
      </div>

      <div className="sidebar-footer">
        <div className="menu-item logout-link" onClick={handleLogout}>
          <FaSignOutAlt />
          Logout
        </div>
      </div>
    </aside>
  );
}
