import React, { useState, useEffect } from 'react';
import PatientLayout from "../../components/PatientComponent/PatientLayout";
import PatientOverview from "../../components/PatientComponent/PatientOverview";
import PatientDoctors from "../../components/PatientComponent/PatientDoctors";
import { FaSun, FaMoon, FaCloudSun } from 'react-icons/fa';

export default function PatientDashboard() {
  const [greeting, setGreeting] = useState('');
  const [icon, setIcon] = useState(null);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
      setIcon(<FaCloudSun className="text-warning mb-1" />);
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
      setIcon(<FaSun className="text-warning mb-1" />);
    } else {
      setGreeting('Good Evening');
      setIcon(<FaMoon className="text-secondary mb-1" />);
    }
  }, []);

  return (
    <PatientLayout>
      <div className="container-fluid py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5 gap-3 stagger-1">
          <div>
            <div className="d-flex align-items-center gap-2 mb-1">
              {icon}
              <h1 className="h3 fw-bold text-dark m-0">{greeting}, <span className="text-teal">John</span></h1>
            </div>
            <p className="text-secondary m-0">Here's your health overview for today.</p>
          </div>
          <div className="px-4 py-2 rounded-pill glass-effect shadow-sm text-secondary small fw-medium text-uppercase tracking-wide border border-white">
            📅 {today}
          </div>
        </div>

        <div className="mb-5 stagger-2">
          <PatientOverview />
        </div>

        <div className="row stagger-3">
          <div className="col-12">
            <PatientDoctors />
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}
