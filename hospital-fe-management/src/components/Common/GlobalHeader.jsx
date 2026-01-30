import React from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';
import "../../styles/components/GlobalHeader.css";

/**
 * GlobalHeader component for Admin, Doctor and Patient portals.
 * @param {Object} user - Optional user object { name, role, avatar }
 */
export default function GlobalHeader({ user = { name: "Dr. John Doe", role: "Cardiologist" } }) {
    return (
        <header className="patient-dashboard-header global-header-styled">
            <div className="logo">
                <FaHeart /> <span>VVCARE</span>
            </div>

            <div className="header-profile-section">
                <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-role">{user.role}</span>
                </div>
                <div className="user-avatar-wrapper">
                    <FaUserCircle size={32} />
                </div>
            </div>
        </header>
    );
}
