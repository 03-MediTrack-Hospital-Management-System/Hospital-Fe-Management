import "../styles/main.css";
import { upcomingAppointment, prescriptions } from "../data/patientDummy";
import StatCard from "../components/StatCard";
import SectionCard from "../components/SectionCard";
import { useState } from "react";
import BookAppointmentModal from "../components/BookAppointmentModal";

import { FaCalendarAlt, FaPills, FaHeartbeat } from "react-icons/fa";

export default function PatientDashboard() {
  const [showModal, setShowModal] = useState(false); // ✅ CORRECT PLACE

  return (
    <div className="container patient-dashboard">

      {/* HERO */}
      <div className="welcome-banner">
        <div>
          <h1>Welcome back, patient! 👋</h1>
          <p>Your health journey starts here</p>

          <div className="banner-actions">
            <button
              className="btn-primary"
              onClick={() => setShowModal(true)}
            >
              + Book Appointment
            </button>

            <button className="btn-outline">
              View Health Profile
            </button>
          </div>
        </div>

        <div className="heart-box">❤</div>
      </div>

      {/* STATS */}
      <div className="stats-row">
        <StatCard
          icon={<FaCalendarAlt />}
          title="Upcoming Appointments"
          subtitle="Next: Tomorrow at 10:00 AM"
          value="2"
          active
        />
        <StatCard
          icon={<FaPills />}
          title="Active Prescriptions"
          subtitle="All medications on schedule"
          value="3"
        />
        <StatCard
          icon={<FaHeartbeat />}
          title="Test Results Available"
          subtitle="Ready to download"
          value="2"
        />
      </div>

      {/* UPCOMING APPOINTMENT */}
      <SectionCard
        icon={<FaCalendarAlt />}
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

      {/* PRESCRIPTIONS */}
      <SectionCard
        icon={<FaPills />}
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

      {/* MODAL */}
      {showModal && (
        <BookAppointmentModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
