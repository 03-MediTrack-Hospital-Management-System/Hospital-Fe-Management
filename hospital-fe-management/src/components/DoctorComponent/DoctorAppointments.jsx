import React from 'react';
import { FaClock, FaUserCircle, FaCalendarCheck, FaEllipsisV, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function DoctorAppointments() {
  // Mock data for appointments
  const appointments = [
    {
      id: 1,
      patientName: "Rahul Sharma",
      time: "10:00 AM",
      date: "Today, 15 Oct",
      reason: "Heart Checkup",
      status: "Upcoming",
      avatar: null
    },
    {
      id: 2,
      patientName: "Neha Gupta",
      time: "11:30 AM",
      date: "Today, 15 Oct",
      reason: "Follow-up",
      status: "In Progress",
      avatar: null
    },
    {
      id: 3,
      patientName: "Arjun Singh",
      time: "1:00 PM",
      date: "Today, 15 Oct",
      reason: "Consultation",
      status: "Confirmed",
      avatar: null
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Upcoming': return { color: '#0b5c63', bg: '#f0fdfe', border: '#ccfbf1' };
      case 'In Progress': return { color: '#2563eb', bg: '#eff6ff', border: '#dbeafe' };
      case 'Confirmed': return { color: '#059669', bg: '#f0fdf4', border: '#dcfce7' };
      default: return { color: '#64748b', bg: '#f8fafc', border: '#f1f5f9' };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Upcoming': return <FaCalendarCheck size={12} />;
      case 'In Progress': return <FaClock size={12} />;
      case 'Confirmed': return <FaCheckCircle size={12} />;
      default: return <FaExclamationCircle size={12} />;
    }
  };

  return (
    <div className="dr-appointments-wrapper">
      <style>{`
                .dr-appointments-wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .apt-card-minimal {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 16px 20px;
                    background: #ffffff;
                    border: 1px solid #f1f5f9;
                    border-radius: 12px;
                    transition: all 0.2s ease;
                }

                .apt-card-minimal:hover {
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
                    border-color: #e2e8f0;
                    transform: translateY(-1px);
                }

                .apt-left-section {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .avatar-container {
                    width: 48px;
                    height: 48px;
                    border-radius: 10px;
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    overflow: hidden;
                }

                .apt-main-info h4 {
                    margin: 0;
                    font-size: 15px;
                    font-weight: 600;
                    color: #1e293b;
                }

                .apt-sub-info {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-top: 4px;
                }

                .apt-meta {
                    font-size: 13px;
                    color: #64748b;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .apt-meta svg {
                    opacity: 0.7;
                }

                .apt-right-section {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .status-badge-minimal {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 12px;
                    border-radius: 30px;
                    font-size: 12px;
                    font-weight: 600;
                    border: 1px solid transparent;
                }

                .more-btn {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 6px;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .more-btn:hover {
                    background: #f1f5f9;
                    color: #475569;
                }

                @media (max-width: 640px) {
                    .apt-card-minimal {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 16px;
                    }
                    .apt-right-section {
                        width: 100%;
                        justify-content: space-between;
                        padding-top: 12px;
                        border-top: 1px solid #f1f5f9;
                    }
                }
            `}</style>

      {appointments.map(apt => {
        const style = getStatusStyle(apt.status);
        return (
          <div key={apt.id} className="apt-card-minimal">
            <div className="apt-left-section">
              <div className="avatar-container">
                <FaUserCircle size={32} />
              </div>
              <div className="apt-main-info">
                <h4>{apt.patientName}</h4>
                <div className="apt-sub-info">
                  <span className="apt-meta">
                    <FaClock size={12} /> {apt.time}
                  </span>
                  <span className="apt-meta" style={{ color: '#0b5c63', fontWeight: '500' }}>
                    {apt.reason}
                  </span>
                </div>
              </div>
            </div>

            <div className="apt-right-section">
              <div className="status-badge-minimal" style={{
                backgroundColor: style.bg,
                color: style.color,
                borderColor: style.border
              }}>
                {getStatusIcon(apt.status)}
                <span>{apt.status}</span>
              </div>
              <button className="more-btn">
                <FaEllipsisV size={14} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

