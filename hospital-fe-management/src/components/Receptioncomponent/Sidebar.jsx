import React from "react";
import MagicSidebar from "../Common/MagicSidebar";
import { FaThLarge, FaUserPlus, FaFileInvoiceDollar } from "react-icons/fa";

export default function Sidebar({ onAddPatient, onGenerateBills }) {
  const handleLogout = () => {
    window.location.href = "/login";
  };

  const menuItems = [
    { label: "Dashboard", icon: FaThLarge, isActive: true, onClick: () => { } }, // Always active for now since it's a single page
    { label: "Add Patient", icon: FaUserPlus, onClick: onAddPatient },
    { label: "Generate Bills", icon: FaFileInvoiceDollar, onClick: onGenerateBills },
  ];

  return (
    <MagicSidebar
      title="Reception"
      role="FRONT DESK"
      menuItems={menuItems}
      onLogout={handleLogout}
    />
  );
}