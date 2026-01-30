import DoctorSidebar from "../../components/DoctorComponent/DoctorSidebar";
import DoctorAppointments from "../../components/DoctorComponent/DoctorAppointments";
import GlobalHeader from "../../components/Common/GlobalHeader";
import { FaHeart, FaCalendarCheck, FaClock, FaHistory, FaBan } from "react-icons/fa";
import "../../styles/reception.css";
import { useState } from "react";

export default function DoctorAppointmentsPage() {
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <div id="patient-root">
            <GlobalHeader />

            <div id="patient-layout" className="doctor-layout-override" style={{ height: 'calc(100vh - 80px)', minHeight: 'auto' }}>
                <DoctorSidebar />

                <main id="patient-main" style={{ padding: '40px' }}>
                    <div style={{ marginBottom: '35px' }}>
                        <h1 style={{ fontSize: '36px', color: '#0b5c63', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                            Appointments
                        </h1>
                        <p style={{ margin: 0, fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
                            Manage your schedule and patient visits.
                        </p>
                    </div>


                    <div className="custom-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '25px', background: '#f1f5f9', padding: '4px', borderRadius: '12px', width: 'fit-content' }}>
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            style={{
                                padding: '8px 20px',
                                borderRadius: '8px',
                                color: activeTab === 'upcoming' ? '#0b5c63' : '#64748b',
                                fontWeight: '600',
                                background: activeTab === 'upcoming' ? '#fff' : 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                fontSize: '14px',
                                boxShadow: activeTab === 'upcoming' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                                transition: 'all 0.2s ease'
                            }}>
                            <FaCalendarCheck size={14} /> Upcoming
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            style={{
                                padding: '8px 20px',
                                borderRadius: '8px',
                                color: activeTab === 'history' ? '#0b5c63' : '#64748b',
                                fontWeight: '600',
                                background: activeTab === 'history' ? '#fff' : 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                fontSize: '14px',
                                boxShadow: activeTab === 'history' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                                transition: 'all 0.2s ease'
                            }}>
                            <FaHistory size={14} /> Past Visits
                        </button>
                        <button
                            onClick={() => setActiveTab('cancelled')}
                            style={{
                                padding: '8px 20px',
                                borderRadius: '8px',
                                color: activeTab === 'cancelled' ? '#0b5c63' : '#64748b',
                                fontWeight: '600',
                                background: activeTab === 'cancelled' ? '#fff' : 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '8px',
                                fontSize: '14px',
                                boxShadow: activeTab === 'cancelled' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                                transition: 'all 0.2s ease'
                            }}>
                            <FaBan size={14} /> Cancelled
                        </button>
                    </div>

                    <div className="appointment-list-container" style={{ background: 'transparent' }}>
                        {activeTab === 'upcoming' && <DoctorAppointments />}
                        {activeTab === 'history' && <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8', background: 'white', borderRadius: '18px', border: '1px solid #f1f5f9' }}>No past appointment history available.</div>}
                        {activeTab === 'cancelled' && <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8', background: 'white', borderRadius: '18px', border: '1px solid #f1f5f9' }}>No cancelled appointments.</div>}
                    </div>
                </main>
            </div>
        </div>
    );
}

