import DoctorSidebar from "../components/DoctorComponent/DoctorSidebar";
import GlobalHeader from "../components/Common/GlobalHeader";
import { FaHeart, FaUserMd, FaEnvelope, FaPhone, FaHospital, FaAward, FaCalendarAlt } from "react-icons/fa";
import "../styles/reception.css";

export default function DoctorProfile() {
    return (
        <div id="patient-root">
            <GlobalHeader />

            <div id="patient-layout" className="doctor-layout-override" style={{ height: 'calc(100vh - 80px)', minHeight: 'auto' }}>
                <DoctorSidebar />

                <main id="patient-main" style={{ padding: '40px' }}>
                    <div style={{ marginBottom: '35px' }}>
                        <h1 style={{ fontSize: '36px', color: '#0b5c63', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                            My Profile
                        </h1>
                        <p style={{ margin: 0, fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
                            Manage your personal and professional information.
                        </p>
                    </div>


                    <div className="profile-container" style={{ maxWidth: '1000px', margin: '0 0' }}>
                        <div className="profile-header-card" style={{
                            background: 'linear-gradient(135deg, #0b5c63 0%, #1ea6a9 100%)',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '24px',
                            padding: '50px 40px',
                            boxShadow: '0 15px 35px rgba(11, 92, 99, 0.15)',
                            marginBottom: '40px'
                        }}>
                            <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '100%', background: 'rgba(255,255,255,0.03)', transform: 'skewX(-20deg)' }}></div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', position: 'relative', zIndex: 1 }}>
                                <div className="profile-avatar" style={{ width: '150px', height: '150px', border: '5px solid rgba(255,255,255,0.2)', background: 'white', color: '#0b5c63', borderRadius: '24px' }}>
                                    <FaUserMd size={60} />
                                </div>
                                <div className="profile-info">
                                    <h2 style={{ color: 'white', fontSize: '38px', marginBottom: '10px', fontWeight: '800' }}>Dr. John Doe</h2>
                                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', fontWeight: '500' }}><FaHospital style={{ marginRight: '8px' }} /> Cardiology Department</p>
                                    <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                                        <span style={{ background: 'rgba(0,0,0,0.15)', padding: '8px 18px', borderRadius: '12px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', backdropFilter: 'blur(10px)' }}><FaAward /> Senior Consultant</span>
                                        <span style={{ background: 'rgba(0,0,0,0.15)', padding: '8px 18px', borderRadius: '12px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', backdropFilter: 'blur(10px)' }}><FaCalendarAlt /> 12 Years Exp.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="profile-grid" style={{ marginTop: '0', padding: '0', gap: '25px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                            <div className="details-card" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', background: 'white', padding: '30px' }}>
                                <h3 style={{ fontSize: '20px', color: '#0b5c63', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}><FaEnvelope /> Contact Information</h3>
                                <div className="info-row" style={{ padding: '16px 0', borderBottom: '1px solid #f8fafc' }}>
                                    <span style={{ color: '#64748b' }}>Email Address</span>
                                    <span style={{ fontWeight: '600' }}>dr.johndoe@vvcare.com</span>
                                </div>
                                <div className="info-row" style={{ padding: '16px 0', borderBottom: '1px solid #f8fafc' }}>
                                    <span style={{ color: '#64748b' }}>Phone Number</span>
                                    <span style={{ fontWeight: '600' }}>+1 (555) 123-4567</span>
                                </div>
                                <div className="info-row" style={{ padding: '16px 0', borderBottom: 'none' }}>
                                    <span style={{ color: '#64748b' }}>Office Location</span>
                                    <span style={{ fontWeight: '600' }}>Room 304, Block A, Main Wing</span>
                                </div>
                            </div>

                            <div className="details-card" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9', background: 'white', padding: '30px' }}>
                                <h3 style={{ fontSize: '20px', color: '#0b5c63', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}><FaAward /> Professional Details</h3>
                                <div className="info-row" style={{ padding: '16px 0', borderBottom: '1px solid #f8fafc' }}>
                                    <span style={{ color: '#64748b' }}>Medical License</span>
                                    <span style={{ fontWeight: '600' }}>MD-12345-US</span>
                                </div>
                                <div className="info-row" style={{ padding: '16px 0', borderBottom: '1px solid #f8fafc' }}>
                                    <span style={{ color: '#64748b' }}>Specialization</span>
                                    <span style={{ fontWeight: '600' }}>Cardiothoracic Surgery</span>
                                </div>
                                <div className="info-row" style={{ padding: '16px 0', borderBottom: 'none' }}>
                                    <span style={{ color: '#64748b' }}>Education</span>
                                    <span style={{ fontWeight: '600' }}>Harvard Medical School</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

