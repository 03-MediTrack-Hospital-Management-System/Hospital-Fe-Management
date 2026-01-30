import React from "react";
import GenerateBills from "./GenerateBills";
import { IoExitOutline } from "react-icons/io5";

export default function Sidebar({ onAddPatient, onGenerateBills }) {
  return (
    <aside className="patient-dashboard-content-left">
      <h3>General</h3>

      <div className="menu-item active">Dashboard</div>

      <div className="menu-item" onClick={onAddPatient}>
        Add Patient
      </div>

      <div className="menu-item" onClick={onGenerateBills}>
        Generate Bills
      </div>
      <div className="menu-item logout" onClick={() => (window.location.href = "/login")} style={{ marginTop: 'auto', color: '#ef4444', borderTop: '1px solid #e2e8f0' }}>
        Log Out
      </div>
    </aside>
  );
}