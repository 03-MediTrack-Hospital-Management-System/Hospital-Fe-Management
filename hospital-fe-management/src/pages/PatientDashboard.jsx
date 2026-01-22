import "../styles/patient.css";
import { upcomingAppointment, prescriptions } from "../data/patientDummy";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import { useState } from "react";
import BookAppointmentModal from "../components/BookAppointmentModal";
import { useNavigate, Link } from "react-router-dom";

export default function PatientDashboard() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const userData = {
    name: "John Smith",
    age: 34,
    gender: "Male",
    bloodType: "O+",
    lastVisit: "2024-01-15",
    nextCheckup: "2024-03-20",
    allergies: ["Penicillin", "Peanuts"],
    chronicConditions: ["Asthma", "Hypertension"],
    primaryDoctor: "Dr. Sarah Johnson",
    insurance: "BlueCross PPO",
    memberId: "BC-78901234",
  };

  const recentActivities = [
    { id: 1, activity: "Lab Test Results", date: "Today", type: "results" },
    { id: 2, activity: "Medication Refilled", date: "Yesterday", type: "prescription" },
    { id: 3, activity: "Appointment Scheduled", date: "2 days ago", type: "appointment" },
  ];

  return (
    <div className="container patient-dashboard">
      
      <div className="user-profile-header">
        <div className="user-info-main">
          <div 
            className="user-avatar clickable"
            onClick={() => navigate("/profile")}
            title="View Profile"
          >
            👤
          </div>
          <div className="user-details">
            <h1>Welcome back, John Smith! 👋</h1>
            <div className="user-tags">
              <span className="tag">Patient ID: PT-901234</span>
              <span className="tag blood-type">Blood: O+</span>
              <span className="tag age">34 years</span>
              <span className="tag insurance">BlueCross PPO</span>
            </div>
            <p className="user-subtitle">Your health journey starts here</p>
          </div>
        </div>
        
        <div className="header-actions">
          <Link to="/profile" className="profile-link">
            View Full Profile →
          </Link>
        </div>
      </div>

      {/* Banner Actions */}
      <div className="banner-actions-row">
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          Book Appointment
        </button>

        <Link to="/profile" className="btn-outline">
          View Full Health Profile
        </Link>

        <button className="btn-secondary">Request Prescription Refill</button>
      </div>

      {/* Health Summary Cards */}
      <div className="health-summary">
        <div className="health-card critical">
          <h4>Critical Info</h4>
          <ul>
            <li><strong>Allergies:</strong> {userData.allergies.join(", ")}</li>
            <li><strong>Conditions:</strong> {userData.chronicConditions.join(", ")}</li>
            <li><strong>Primary Doctor:</strong> {userData.primaryDoctor}</li>
          </ul>
        </div>
        <div className="health-card upcoming">
          <h4>Upcoming</h4>
          <ul>
            <li><strong>Next Checkup:</strong> {userData.nextCheckup}</li>
            <li><strong>Last Visit:</strong> {userData.lastVisit}</li>
            <li><strong>Appointments:</strong> 2 scheduled</li>
          </ul>
        </div>
        <div className="health-card recent">
          <h4>Recent Activity</h4>
          <ul>
            {recentActivities.map((activity) => (
              <li key={activity.id}>
                <span className={`activity-type ${activity.type}`}></span>
                {activity.activity} <small>({activity.date})</small>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <StatCard
          icon={<span>📅</span>}
          title="Upcoming Appointments"
          subtitle="Next: Tomorrow at 10:00 AM"
          value="2"
          active
        />
        <StatCard
          icon={<span>💊</span>}
          title="Active Prescriptions"
          subtitle="All medications on schedule"
          value="3"
        />
        <StatCard
          icon={<span>📊</span>}
          title="Test Results Available"
          subtitle="Ready to download"
          value="2"
        />
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Appointments Section */}
        <SectionCard
          icon={<span>📅</span>}
          title="Upcoming Appointments"
          subtitle="Your scheduled visits"
          action={
            <button
              className="btn-primary small"
              onClick={() => setShowModal(true)}
            >
              + Book New
            </button>
          }
        >
          <div className="appointment-item">
            <div className="appointment-left">
              <div className="circle-icon">🩺</div>
              <div>
                <strong>{upcomingAppointment.doctor}</strong>
                <p>{upcomingAppointment.type}</p>
              </div>
            </div>
            <div className="appointment-right">
              <strong>{upcomingAppointment.date}</strong>
              <span>{upcomingAppointment.time}</span>
            </div>
          </div>
        </SectionCard>

        {/* Prescriptions Section */}
        <SectionCard
          icon={<span>💊</span>}
          title="Recent Prescriptions"
          subtitle="Your active medications"
        >
          {prescriptions.map((p) => (
            <div className="prescription-item" key={p.id}>
              <div>
                <strong>{p.medicine}</strong>
                <p>{p.dosage}</p>
              </div>
              <div className="text-right">
                <small>By {p.doctor}</small>
                <br />
                <small>{p.date}</small>
              </div>
            </div>
          ))}
        </SectionCard>
      </div>

      {/* Book Appointment Modal */}
      {showModal && (
        <BookAppointmentModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}