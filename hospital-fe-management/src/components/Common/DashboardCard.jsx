

import React from "react";

export default function DashboardCard({ title, count, icon }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card border-0 shadow-sm p-3 h-100 hover-shadow transition">
        <div className="d-flex align-items-center gap-3">
          <div className="p-3 bg-primary bg-opacity-10 text-primary rounded-circle fs-3 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
            {icon}
          </div>
          <div>
            <h6 className="text-secondary mb-1 text-uppercase small fw-bold">{title}</h6>
            <h2 className="mb-0 fw-bold text-dark">{count}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

