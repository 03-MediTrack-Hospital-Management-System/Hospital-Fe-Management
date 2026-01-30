import { NavLink, useNavigate } from "react-router-dom";
import {
    FaThLarge,
    FaUserMd,
    FaUserInjured,
    FaBoxOpen,
    FaCog,
    FaSignOutAlt,
    FaHospitalSymbol
} from "react-icons/fa";

export default function AdminSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <aside className="admin-sidebar">
            <div className="sidebar-header">
                <FaHospitalSymbol size={28} color="#0b5c63" />
                <div className="sidebar-brand">
                    VV CARE <span style={{ color: '#0b5c63', fontWeight: '400' }}>ADMIN</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/admin" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
                    <FaThLarge />
                    Dashboard
                </NavLink>

                <NavLink to="/admin/doctors" className="nav-item">
                    <FaUserMd />
                    Doctors
                </NavLink>

                <NavLink to="/admin/patients" className="nav-item">
                    <FaUserInjured />
                    Patients
                </NavLink>

                <NavLink to="/admin/inventory" className="nav-item">
                    <FaBoxOpen />
                    Inventory
                </NavLink>

                <NavLink to="/admin/settings" className="nav-item">
                    <FaCog />
                    Settings
                </NavLink>
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn" onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </aside>
    );
}
