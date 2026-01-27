import "../styles/doctor.css";
import WeeklyAppointmentsChart from "../pages/WeeklyAppointmentsChart"; // adjust path if needed
import { useState } from "react";

export default function DoctorDashboard() {
  const todaysSchedule = [
    { id: 1, time: "9:00 AM", patient: "Michael Chen", type: "Follow-up", status: "confirmed" },
    { id: 2, time: "10:30 AM", patient: "Robert Garcia", type: "New Patient", status: "confirmed" },
    { id: 3, time: "11:45 AM", patient: "Jennifer Lee", type: "Consultation", status: "pending" },
    { id: 4, time: "2:00 PM", patient: "David Wilson", type: "Procedure", status: "confirmed" },
  ];

  const patientQueue = [
    { id: 1, name: "Emma Davis", reason: "Chest pain", priority: "High", age: 45, waitTime: "10 min" },
    { id: 2, name: "Thomas Brown", reason: "BP Check", priority: "Medium", age: 52, waitTime: "15 min" },
  ];

  const weeklyData = [3, 7, 4, 9, 5, 2]; 


  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <div className="profile">
          <div className="avatar">SJ</div>
          <div>
            <h2>Dr. Sarah Johnson</h2>
            <div className="meta">
              <span>🩺 Cardiologist</span>
              <span>⏱ 12 Years</span>
              <span>🏥 City General Hospital</span>
            </div>
          </div>
        </div>

        <div className="header-actions">
          <button className="btn-primary">+ Add Patient</button>
          <button className="btn-outline" disabled>✍ Write Prescription</button>
          <button className="btn-profile">View Full Profile →</button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h4>8</h4>
            <span>Total Appointments</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h4>2</h4>
            <span>Patients Waiting</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🚨</div>
          <div className="stat-content">
            <h4>1</h4>
            <span>Critical Priority</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid">
        {/* Chart */}
        <WeeklyAppointmentsChart weeklyData={weeklyData} />

        {/* Today's Schedule */}
        <div className="card">
          <h3 className="section-title">Today’s Schedule</h3>
          {todaysSchedule.map((appt) => (
            <div key={appt.id} className="schedule-item">
              <div>
                <div className="time">{appt.time}</div>
                <strong>{appt.patient}</strong>
                <div>{appt.type}</div>
                <span className={`status ${appt.status}`}>
                  {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                </span>
              </div>
              <button className="btn-outline">▶ Start</button>
            </div>
          ))}
        </div>

        {/* Patient Queue */}
        <div className="card">
          <h3 className="section-title">Patient Queue</h3>
          {patientQueue.map((patient) => (
            <div key={patient.id} className="queue-item">
              <div>
                <strong>{patient.name}</strong>
                <div>{patient.reason}</div>
                <small>
                  Age: {patient.age} • Waiting: {patient.waitTime}
                </small>
              </div>
              <span className={`priority ${patient.priority}`}>
                {patient.priority}
              </span>
            </div>
          ))}

          <button className="btn-primary footer-btn">📞 Call Next Patient</button>
        </div>
      </div>
    </div>
  );
}
