import React, { useState } from 'react';
import "../../styles/components/ReportsList.css";
import {
  FaFileMedical,
  FaFlask,
  FaXRay,
  FaFilePrescription,
  FaSearch,
  FaDownload,
  FaEye,
  FaFilter,
  FaCalendarAlt,
  FaUserMd,
  FaUserCircle
} from 'react-icons/fa';

export default function ReportsList() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  
  const reports = [
    {
      id: 1,
      title: "Comprehensive Metabolic Panel",
      type: "Lab",
      date: "2024-03-15",
      doctor: "Dr. Caroline",
      description: "Blood test analysis for metabolism and chemical balance.",
      status: "Normal"
    },
    {
      id: 2,
      title: "Chest X-Ray",
      type: "Radiology",
      date: "2024-03-20",
      doctor: "Dr. Malik",
      description: "Routine chest screening for respiratory check.",
      status: "Normal"
    },
    {
      id: 3,
      title: "MRI Scan - Brain",
      type: "Radiology",
      date: "2024-02-10",
      doctor: "Dr. Melanie",
      description: "Detailed imaging for migraine analysis.",
      status: "Attention"
    },
    {
      id: 4,
      title: "Amoxicillin Prescription",
      type: "Prescription",
      date: "2024-01-05",
      doctor: "Dr. Smith",
      description: "Antibiotic course for throat infection.",
      status: "Archived"
    },
    {
      id: 5,
      title: "Lipid Profile",
      type: "Lab",
      date: "2024-03-01",
      doctor: "Dr. Caroline",
      description: "Cholesterol and triglyceride levels.",
      status: "Normal"
    }
  ];

  const categories = ['All', 'Lab', 'Radiology', 'Prescription'];

  const filteredReports = reports.filter(report => {
    const matchesFilter = activeFilter === 'All' || report.type === activeFilter;
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (type) => {
    switch (type) {
      case 'Lab': return <FaFlask />;
      case 'Radiology': return <FaXRay />;
      case 'Prescription': return <FaFilePrescription />;
      default: return <FaFileMedical />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Normal': return '#28a745';
      case 'Attention': return '#ffc107';
      case 'Archived': return '#6c757d';
      default: return '#0b5c63';
    }
  };

  return (
    <div className="reports-container">
      
      <div className="reports-controls">
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>


      <div className="reports-grid">
        {filteredReports.map(report => (
          <div key={report.id} className="report-card">
            <div className="report-header-group">
              <div className={`report-icon-box ${report.type.toLowerCase()}`}>
                {React.cloneElement(getIcon(report.type), { style: { display: 'block' } })}
              </div>
              <div className="report-title-section">
                <h3>{report.title}</h3>
                <span className="status-badge" style={{
                  color: getStatusColor(report.status),
                  background: `${getStatusColor(report.status)}15`,
                  border: `1px solid ${getStatusColor(report.status)}30`
                }}>
                  {report.status}
                </span>
              </div>
            </div>

            <p className="report-desc">{report.description}</p>

            <div className="report-meta">
              <div className="meta-item">
                <FaCalendarAlt />
                {new Date(report.date).toLocaleDateString()}
              </div>
              <div className="meta-item doctor-meta">
                <FaUserMd className="dr-avatar-mini" />
                {report.doctor}
              </div>
            </div>

            <div className="report-actions">
              <button className="action-btn view" title="View Report">
                <FaEye /> View
              </button>
              <button className="action-btn download" title="Download PDF">
                <FaDownload /> Download
              </button>
            </div>
          </div>
        ))}

        {filteredReports.length === 0 && (
          <div className="no-reports">
            <p>No reports found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
