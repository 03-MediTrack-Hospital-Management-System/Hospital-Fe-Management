import { NavLink, useNavigate } from "react-router-dom";
import {
    FaThLarge,
    FaCalendarCheck,
    FaUserInjured,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

export default function DoctorSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <aside className="patient-dashboard-content-left">
            <div>
                <h3>Doctor Menu</h3>

                <NavLink to="/doctor" className={({ isActive }) => `menu-item ${isActive ? 'active' : ''}`} end>
                    <FaThLarge />
                    Dashboard
                </NavLink>

                <NavLink to="/doctor/appointments" className="menu-item">
                    <FaCalendarCheck />
                    Appointments
                </NavLink>

                <NavLink to="/doctor/patients" className="menu-item">
                    <FaUserInjured />
                    My Patients
                </NavLink>

                <NavLink to="/doctor/profile" className="menu-item">
                    <FaUser />
                    Profile
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
