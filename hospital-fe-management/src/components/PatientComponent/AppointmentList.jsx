import React, { useState } from 'react';
import "../../styles/components/AppointmentList.css";
import { FaCalendarAlt, FaClock, FaUserMd, FaMapMarkerAlt, FaNotesMedical, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaUserCircle } from 'react-icons/fa';

export default function AppointmentList() {
  const [activeTab, setActiveTab] = useState('upcoming');

  
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Caroline",
      specialty: "Cardiologist",
      date: "2024-03-15",
      time: "10:00 AM",
      status: "upcoming",
      location: "Room 302, Building A",
      reason: "Regular checkup for blood pressure"
    },
    {
      id: 2,
      doctor: "Dr. Malik",
      specialty: "Pediatrician",
      date: "2024-03-20",
      time: "02:30 PM",
      status: "upcoming",
      location: "Room 105, Building B",
      reason: "Vaccination follow-up"
    },
    {
      id: 3,
      doctor: "Dr. Melanie",
      specialty: "Neurologist",
      date: "2024-02-10",
      time: "11:15 AM",
      status: "completed",
      location: "Room 410, Building C",
      reason: "Migraine consultation"
    },
    {
      id: 4,
      doctor: "Dr. Smith",
      specialty: "Dermatologist",
      date: "2024-01-05",
      time: "09:00 AM",
      status: "cancelled",
      location: "Room 201, Building A",
      reason: "Skin rush examination"
    }
  ];

  const filteredAppointments = appointments.filter(apt => {
    if (activeTab === 'upcoming') {
      return apt.status === 'upcoming';
    } else {
      return apt.status === 'completed' || apt.status === 'cancelled';
    }
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#0b5c63';
      case 'completed': return '#28a745';
      case 'cancelled': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming': return <FaHourglassHalf />;
      case 'completed': return <FaCheckCircle />;
      case 'cancelled': return <FaTimesCircle />;
      default: return null;
    }
  };

  return (
    <div className="appointments-container">
      <div className="appointments-tabs">
        <button
          className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Appointments
        </button>
        <button
          className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Appointment History
        </button>
      </div>

      <div className="appointments-list">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map(apt => (
            <div key={apt.id} className="appointment-item-card">
              <div className="apt-header">
                <div className="apt-doctor-info">
                  <div className="avatar-placeholder">
                    <FaUserMd size={26} style={{ display: 'block' }} />
                  </div>
                  <div>
                    <h4>{apt.doctor}</h4>
                    <span className="specialty">{apt.specialty}</span>
                  </div>
                </div>
                <div className="apt-status" style={{ color: getStatusColor(apt.status), borderColor: getStatusColor(apt.status) }}>
                  {getStatusIcon(apt.status)}
                  <span>{apt.status.charAt(0).toUpperCase() + apt.status.slice(1)}</span>
                </div>
              </div>

              <div className="apt-details">
                <div className="detail-item">
                  <FaCalendarAlt />
                  <span>{new Date(apt.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="detail-item">
                  <FaClock />
                  <span>{apt.time}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt />
                  <span>{apt.location}</span>
                </div>
              </div>

              {apt.reason && (
                <div className="apt-reason">
                  <FaNotesMedical />
                  <p>"{apt.reason}"</p>
                </div>
              )}

              {apt.status === 'upcoming' && (
                <div className="apt-actions">
                  <button className="reschedule-btn">Reschedule</button>
                  <button className="cancel-btn-outline">Cancel</button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-appointments">
            <div className="empty-state-icon">
              <FaCalendarAlt />
            </div>
            <h3>No {activeTab} appointments</h3>
            <p>You don't have any {activeTab} appointments scheduled.</p>
          </div>
        )}
      </div>
    </div>
  );
}

