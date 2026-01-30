import React, { useState } from 'react';
import PatientLayout from "../components/PatientComponent/PatientLayout";
import "../styles/reception.css";
import { FaUser, FaBell, FaLock, FaGlobe, FaPalette, FaSave, FaCheckCircle, FaShieldAlt } from "react-icons/fa";
import ChangePasswordModal from '../components/PatientComponent/ChangePasswordModal';
import { color } from 'chart.js/helpers';

export default function PatientSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="details-card animation-fade-in">
            <h3 style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '15px', marginBottom: '20px' }}>General Preferences</h3>

            <div className="setting-item">
              <div className="setting-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: '#e0f2fe', padding: '8px', borderRadius: '8px', color: '#0284c7' }}><FaBell /></div>
                  <div>
                    <h4>Push Notifications</h4>
                    <p>Receive updates about appointments</p>
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${notifications ? 'on' : ''}`}
                onClick={() => setNotifications(!notifications)}
              ></div>
            </div>

            {/* <div className="setting-item">
              <div className="setting-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: '#f0fdf4', padding: '8px', borderRadius: '8px', color: '#16a34a' }}><FaGlobe /></div>
                  <div>
                    <h4>Language</h4>
                    <p>Select your interface language</p>
                  </div>
                </div>
              </div>
              <select style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }}>
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div> */}

            {/* <div className="setting-item">
              <div className="setting-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: '#f3e8ff', padding: '8px', borderRadius: '8px', color: '#9333ea' }}><FaPalette /></div>
                  <div>
                    <h4>Dark Mode</h4>
                    <p>Reduce eye strain at night</p>
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${darkMode ? 'on' : ''}`}
                onClick={() => setDarkMode(!darkMode)}
              ></div>
            </div> */}
          </div>
        );
      case 'security':
        return (
          <div className="details-card animation-fade-in">
            <h3 style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '15px', marginBottom: '20px' }}>Security Settings</h3>

            <div className="setting-item">
              <div className="setting-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: '#fff7ed', padding: '8px', borderRadius: '8px', color: '#ea580c' }}><FaShieldAlt /></div>
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p>Add an extra layer of security</p>
                  </div>
                </div>
              </div>
              <div
                className={`toggle-switch ${twoFactor ? 'on' : ''}`}
                onClick={() => setTwoFactor(!twoFactor)}
              ></div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: '#fee2e2', padding: '8px', borderRadius: '8px', color: '#dc2626' }}><FaLock /></div>
                  <div>
                    <h4>Change Password</h4>
                    <p>Update your password regularly</p>
                  </div>
                </div>
              </div>
              <button
                className="btn-outline"
                onClick={() => setShowPasswordModal(true)}
                style={{
                  padding: "8px 18px",
                  border: "1.5px solid #0b5c63",
                  background: "transparent",
                  color: "#0b5c63",
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}>Update</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PatientLayout>
      <div className="settings-container">
        <div style={{ marginBottom: '30px' }}>
          <h1>Settings</h1>
          <p style={{ color: '#64748b' }}>Manage your account preferences and security.</p>
        </div>

        <div className="tabs-container" style={{ display: 'flex', gap: '20px', marginBottom: '25px', borderBottom: '1px solid #e2e8f0' }}>
          <button
            className={`tab-btn ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
            style={{
              padding: '10px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'general' ? '3px solid #0b5c63' : '3px solid transparent',
              color: activeTab === 'general' ? '#0b5c63' : '#64748b',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FaUser /> General
          </button>
          <button
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
            style={{
              padding: '10px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === 'security' ? '3px solid #0b5c63' : '3px solid transparent',
              color: activeTab === 'security' ? '#0b5c63' : '#64748b',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <FaLock /> Security
          </button>
        </div>

        {renderTabContent()}

        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-primary">
            <FaSave /> Save Changes
          </button>
        </div>

        {showPasswordModal && (
          <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />
        )}
      </div>
    </PatientLayout>
  );
}
