import { useNavigate } from "react-router-dom";
import MagicSidebar from "../Common/MagicSidebar";
import {
    FaThLarge,
    FaCalendarCheck,
    FaUserInjured,
    FaUser
} from "react-icons/fa";

export default function DoctorSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    const menuItems = [
        { to: "/doctor", label: "Dashboard", icon: FaThLarge, end: true },
        { to: "/doctor/appointments", label: "Appointments", icon: FaCalendarCheck },
        { to: "/doctor/patients", label: "My Patients", icon: FaUserInjured },
        { to: "/doctor/profile", label: "Profile", icon: FaUser },
    ];

    return (
        <MagicSidebar
            title="Doctor Portal"
            role="MEDICAL STAFF"
            menuItems={menuItems}
            onLogout={handleLogout}
        />
    );
}
