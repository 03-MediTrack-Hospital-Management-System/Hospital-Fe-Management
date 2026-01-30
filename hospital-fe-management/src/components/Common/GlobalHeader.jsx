import React from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';


/**
 * GlobalHeader component for Admin, Doctor and Patient portals.
 * @param {Object} user - Optional user object { name, role, avatar }
 */
export default function GlobalHeader({ user = { name: "Dr. John Doe", role: "Cardiologist" } }) {
    return (
        <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-white shadow-sm border-bottom sticky-top">
            <div className="d-flex align-items-center gap-2 text-primary fs-4 fw-bold">
                <FaHeart className="text-danger" />
                <span className="d-none d-md-inline text-dark">VVCARE</span>
            </div>

            <div className="d-flex align-items-center gap-3">
                <div className="text-end d-none d-sm-block">
                    <span className="d-block fw-bold text-dark">{user.name}</span>
                    <span className="d-block small text-secondary">{user.role}</span>
                </div>
                <div className="text-secondary opacity-75">
                    <FaUserCircle size={40} />
                </div>
            </div>
        </header>
    );
}
