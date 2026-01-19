import '../styles/main.css'

import React from "react";

export default function DashboardCard({ title, count, icon }) {
  return (
    <div className="col-md-4">
      <div className="dashboard-card">
        <div className="dashboard-icon">{icon}</div>
        <div className="dashboard-info">
          <h6>{title}</h6>
          <h2>{count}</h2>
        </div>
      </div>
    </div>
  );
}

