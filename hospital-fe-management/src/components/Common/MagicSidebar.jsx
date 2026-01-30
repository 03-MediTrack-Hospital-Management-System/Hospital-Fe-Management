import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/MagicSidebar.css';
import { FaHospitalSymbol, FaSignOutAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MagicSidebar({ title, role, menuItems, onLogout }) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside className={`magic-sidebar ${isCollapsed ? 'collapsed' : ''}`}>

            <button
                className="sidebar-toggle-btn"
                onClick={() => setIsCollapsed(!isCollapsed)}
                title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
                {isCollapsed ? <FaChevronRight size={12} /> : <FaChevronLeft size={12} />}
            </button>

            <div className="sidebar-header">
                <div className="d-flex align-items-center justify-content-center bg-teal text-white rounded-3 shadow-sm" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
                    <FaHospitalSymbol size={20} />
                </div>
                {!isCollapsed && (
                    <div className="d-flex flex-column animate-fade-in" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                        <span className="sidebar-brand text-dark">{title || "VV Care"}</span>
                        {role && <span className="text-secondary small fw-bold" style={{ fontSize: '0.7rem', display: 'block', marginTop: '-4px' }}>{role}</span>}
                    </div>
                )}
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;

                    if (item.onClick) {
                        return (
                            <button
                                key={index}
                                className={`magic-nav-item ${item.isActive ? 'active' : ''}`}
                                onClick={item.onClick}
                                title={isCollapsed ? item.label : ""}
                            >
                                <Icon />
                                <span>{item.label}</span>
                            </button>
                        );
                    }

                    return (
                        <NavLink
                            key={index}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) => `magic-nav-item ${isActive ? 'active' : ''}`}
                            title={isCollapsed ? item.label : ""}
                        >
                            <Icon />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <button
                    className="logout-btn"
                    onClick={onLogout}
                    title={isCollapsed ? "Logout" : ""}
                >
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
