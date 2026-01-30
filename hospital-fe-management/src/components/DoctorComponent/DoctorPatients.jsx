import React from 'react';
import { FaUser, FaEllipsisV, FaChevronRight } from 'react-icons/fa';

export default function DoctorPatients({ searchTerm = "" }) {
  const patients = [
    { id: 1, name: "John Doe", age: 45, gender: "Male", lastVisit: "2023-10-10", status: "Critical", condition: "Hypertension" },
    { id: 2, name: "Ayesha Khan", age: 32, gender: "Female", lastVisit: "2023-10-12", status: "Stable", condition: "Post-Op" },
    { id: 3, name: "Rahul Sharma", age: 28, gender: "Male", lastVisit: "2023-10-14", status: "Recovering", condition: "Flu" },
    { id: 4, name: "Priya Singh", age: 54, gender: "Female", lastVisit: "2023-10-15", status: "Critical", condition: "Diabetes" },
  ];

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Critical': return { text: '#ef4444', bg: '#fee2e2' };
      case 'Stable': return { text: '#059669', bg: '#dcfce7' };
      case 'Recovering': return { text: '#2563eb', bg: '#eff6ff' };
      default: return { text: '#64748b', bg: '#f1f5f9' };
    }
  };

  return (
    <div className="dr-patients-container">
      <style>{`
        .dr-patients-container {
          background: #ffffff;
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          overflow: hidden;
        }

        .dr-patients-header {
          padding: 24px;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dr-patients-header h3 {
          margin: 0;
          font-size: 18px;
          color: #0b5c63;
        }

        .dr-table-wrapper {
          overflow-x: auto;
        }

        .dr-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .dr-table th {
          padding: 16px 24px;
          background: #f8fafc;
          font-size: 12px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dr-table td {
          padding: 16px 24px;
          border-bottom: 1px solid #f8fafc;
          font-size: 14px;
          color: #1e293b;
        }

        .dr-table tr:hover td {
          background: #fcfdfe;
        }

        .patient-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .patient-avatar-sm {
          width: 32px;
          height: 32px;
          background: #f1f5f9;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
        }

        .status-pill {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .action-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          transition: color 0.2s;
        }

        .action-btn:hover {
          color: #0b5c63;
        }
      `}</style>

      <div className="dr-patients-header">
        <h3>Recent Patients</h3>
      </div>

      <div className="dr-table-wrapper">
        <table className="dr-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Age/Gender</th>
              <th>Condition</th>
              <th>Last Visit</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map(patient => {
              const statusStyle = getStatusColor(patient.status);
              return (
                <tr key={patient.id}>
                  <td>
                    <div className="patient-cell">
                      <div className="patient-avatar-sm"><FaUser size={14} /></div>
                      <span style={{ fontWeight: '600' }}>{patient.name}</span>
                    </div>
                  </td>
                  <td>{patient.age}Y, {patient.gender}</td>
                  <td>{patient.condition}</td>
                  <td>{patient.lastVisit}</td>
                  <td>
                    <span className="status-pill" style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}>
                      {patient.status}
                    </span>
                  </td>
                  <td>
                    <button className="action-btn"><FaChevronRight /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

