import { useNavigate } from "react-router-dom";
import MagicSidebar from "../Common/MagicSidebar";
import {
    FaThLarge,
    FaUserMd,
    FaUserInjured,
    FaBoxOpen,
    FaCog
} from "react-icons/fa";

export default function AdminSidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    const menuItems = [
        { to: "/admin", label: "Dashboard", icon: FaThLarge, end: true },
        { to: "/admin/doctors", label: "Doctors", icon: FaUserMd },
        { to: "/admin/patients", label: "Patients", icon: FaUserInjured },
        { to: "/admin/inventory", label: "Inventory", icon: FaBoxOpen },
        { to: "/admin/settings", label: "Settings", icon: FaCog },
    ];

    return (
        <MagicSidebar
            title="Admin Portal"
            role="ADMINISTRATOR"
            menuItems={menuItems}
            onLogout={handleLogout}
        />
    );
}
