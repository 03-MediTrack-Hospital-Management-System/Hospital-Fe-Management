import React from 'react';
import { FaUserCircle, FaHeart } from 'react-icons/fa';

export default function GlobalHeader({ user = { name: "Dr. John Doe", role: "Cardiologist" }, onLogout }) {
    return (
        <header className="d-flex justify-content-between align-items-center px-4 py-3 glass-effect shadow-sm border-bottom sticky-top" style={{ zIndex: 500 }}>
            <div className="d-flex align-items-center gap-2 text-primary fs-4 fw-bold">
                <FaHeart className="text-danger" />
                <span className="d-none d-md-inline text-dark">VVCARE</span>
            </div>

            <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-3 pe-4 border-end">
                    <div className="text-end d-none d-sm-block">
                        <span className="d-block fw-bold text-dark">{user.name}</span>
                        <span className="d-block small text-secondary">{user.role}</span>
                    </div>
                    <div className="text-secondary opacity-75">
                        <FaUserCircle size={40} />
                    </div>
                </div>

                <button
                    onClick={onLogout}
                    className="btn btn-outline-danger d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-bold shadow-sm"
                    style={{ transition: 'all 0.3s ease' }}
                >
                    <span className="d-none d-lg-inline">Logout</span>
                </button>
            </div>
        </header>
    );
}
