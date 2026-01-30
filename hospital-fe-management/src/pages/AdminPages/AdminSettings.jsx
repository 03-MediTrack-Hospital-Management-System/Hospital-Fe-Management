import "../../styles/admin.css"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import { useState } from "react";
import { FaHospital, FaUsers, FaShieldAlt, FaBell, FaSave, FaLock, FaUserShield, FaCheckCircle } from "react-icons/fa"; // Removed unused icons for cleanliness

export default function AdminSettings() {
    const [activeTab, setActiveTab] = useState('general');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'general':
                return (
                    <div className="card dashboard-card fade-in">
                        <div style={{ padding: '20px' }}>
                            <h3 className="section-title" style={{ marginTop: 0 }}>Hospital Information</h3>
                            <div className="setting-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                                <div className="form-group">
                                    <label>Hospital Name</label>
                                    <input type="text" defaultValue="VV Care Hospitals" className="search-input" />
                                </div>
                                <div className="form-group">
                                    <label>Contact Email</label>
                                    <input type="email" defaultValue="admin@vvcare.com" className="search-input" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" defaultValue="+1 (555) 123-4567" className="search-input" />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" defaultValue="123 Medical Drive, NY" className="search-input" />
                                </div>
                                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                    <label>Website URL</label>
                                    <input type="text" defaultValue="https://www.vvcare.com" className="search-input" />
                                </div>
                            </div>
                            <div style={{ marginTop: '30px', textAlign: 'right', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                                <button className="btn-primary">
                                    <FaSave /> Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'security':
                return (
                    <div className="card dashboard-card fade-in">
                        <div style={{ padding: '20px' }}>
                            <h3 className="section-title" style={{ marginTop: 0 }}>Security Settings</h3>
                            <div style={{ display: 'grid', gap: '20px' }}>
                                <div className="security-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ background: '#e0f2fe', padding: '10px', borderRadius: '8px', color: '#0284c7', height: 'fit-content' }}>
                                            <FaLock size={20} />
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '15px', color: '#334155', marginBottom: '4px' }}>Two-Factor Authentication (2FA)</strong>
                                            <span style={{ fontSize: '13px', color: '#64748b' }}>Require 2FA for all admin accounts to enhance security.</span>
                                        </div>
                                    </div>
                                    <div className="toggle-switch on" style={{ width: '44px', height: '24px', background: '#2563eb', borderRadius: '24px', position: 'relative', cursor: 'pointer' }}>
                                        <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', right: '3px', top: '3px' }}></div>
                                    </div>
                                </div>

                                <div className="security-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ background: '#fce7f3', padding: '10px', borderRadius: '8px', color: '#db2777', height: 'fit-content' }}>
                                            <FaUserShield size={20} />
                                        </div>
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '15px', color: '#334155', marginBottom: '4px' }}>Auto-Session Timeout</strong>
                                            <span style={{ fontSize: '13px', color: '#64748b' }}>Automatically log out inactive users after 15 minutes.</span>
                                        </div>
                                    </div>
                                    <div className="toggle-switch on" style={{ width: '44px', height: '24px', background: '#2563eb', borderRadius: '24px', position: 'relative', cursor: 'pointer' }}>
                                        <div style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', right: '3px', top: '3px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'team':
                return (
                    <div className="card dashboard-card fade-in">
                        <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <h3 className="section-title" style={{ margin: 0 }}>Team Management</h3>
                                <button className="btn-primary">Add New Member</button>
                            </div>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Last Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div className="admin-avatar-sm" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#cbd5e1' }}></div>
                                            Dr. Sarah Wilson
                                        </td>
                                        <td><span className="status ok">Administrator</span></td>
                                        <td><span className="status active" style={{ background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontSize: '12px' }}>Active</span></td>
                                        <td>2 mins ago</td>
                                    </tr>
                                    <tr>
                                        <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div className="admin-avatar-sm" style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#cbd5e1' }}></div>
                                            James Carter
                                        </td>
                                        <td><span className="status pending">Editor</span></td>
                                        <td><span className="status active" style={{ background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '12px', fontSize: '12px' }}>Active</span></td>
                                        <td>1 hour ago</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="admin-main">
                <div className="admin-header-enhanced">
                    <div className="admin-info">
                        <h1>Settings</h1>
                        <p>Manage your account and system preferences</p>
                    </div>
                </div>

                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    {/* Tabs Navigation */}
                    <div className="settings-tabs" style={{ display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid #e2e8f0', paddingBottom: '0' }}>
                        <button
                            onClick={() => setActiveTab('general')}
                            style={{
                                padding: '12px 24px',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'general' ? '2px solid #2563eb' : '2px solid transparent',
                                color: activeTab === 'general' ? '#2563eb' : '#64748b',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                fontSize: '14px'
                            }}
                        >
                            <FaHospital /> General
                        </button>
                        <button
                            onClick={() => setActiveTab('security')}
                            style={{
                                padding: '12px 24px',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'security' ? '2px solid #2563eb' : '2px solid transparent',
                                color: activeTab === 'security' ? '#2563eb' : '#64748b',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                fontSize: '14px'
                            }}
                        >
                            <FaShieldAlt /> Security
                        </button>
                        <button
                            onClick={() => setActiveTab('team')}
                            style={{
                                padding: '12px 24px',
                                background: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'team' ? '2px solid #2563eb' : '2px solid transparent',
                                color: activeTab === 'team' ? '#2563eb' : '#64748b',
                                fontWeight: '600',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                fontSize: '14px'
                            }}
                        >
                            <FaUsers /> Team
                        </button>
                    </div>

                    {renderTabContent()}
                </div>
            </main>
        </div>
    );
}
