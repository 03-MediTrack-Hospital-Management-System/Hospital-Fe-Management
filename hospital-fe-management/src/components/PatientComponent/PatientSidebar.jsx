import { useNavigate } from "react-router-dom";
import MagicSidebar from "../Common/MagicSidebar";
import {
  FaThLarge,
  FaCalendarCheck,
  FaFileMedicalAlt,
  FaUser,
  FaCog,
  FaCommentDots
} from "react-icons/fa";

export default function PatientSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const menuItems = [
    { to: "/patient", label: "Dashboard", icon: FaThLarge, end: true },
    { to: "/patient/appointments", label: "Appointments", icon: FaCalendarCheck },
    { to: "/patient/reports", label: "Reports", icon: FaFileMedicalAlt },
    { to: "/patient/profile", label: "Profile", icon: FaUser },
    { to: "/patient/feedback", label: "Feedbacks", icon: FaCommentDots },
    { to: "/patient/settings", label: "Settings", icon: FaCog },
  ];

  return (
    <MagicSidebar
      title="Patient Portal"
      role="DASHBOARD"
      menuItems={menuItems}
      onLogout={handleLogout}
    />
  );
}
