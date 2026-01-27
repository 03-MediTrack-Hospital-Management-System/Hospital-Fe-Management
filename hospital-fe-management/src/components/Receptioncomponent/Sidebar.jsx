import React from "react";
import GenerateBills from "./GenerateBills";

export default function Sidebar({ onAddPatient , onGenerateBills }) {
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
      <div className="menu-item" onClick={() => (window.location.href = "/login")}>Logout</div>
    </aside>
  );
}
