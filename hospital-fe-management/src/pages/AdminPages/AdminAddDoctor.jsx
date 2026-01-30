import "../../styles/admin.css"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import { useState } from "react";
import { FaUserMd, FaArrowLeft, FaSave, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdminAddDoctor() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialization: "General",
        qualification: "",
        experience: "",
        status: "Active"
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Doctor added successfully (Mock)");
        navigate("/admin/doctors");
    };

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="admin-main">
                <div className="admin-header-enhanced">
                    <div className="admin-info">
                        <button onClick={() => navigate("/admin/doctors")} className="btn-ghost" style={{ paddingLeft: 0, marginBottom: '10px' }}>
                            <FaArrowLeft /> Back to Doctors
                        </button>
                        <h1>Add New Doctor</h1>
                        <p>Onboard a new medical staff member</p>
                    </div>
                </div>

                <div className="card dashboard-card" style={{ maxWidth: '800px' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                            <div style={{ width: '120px', textAlign: 'center' }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    background: '#f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '2px dashed #cbd5e1',
                                    marginBottom: '10px',
                                    cursor: 'pointer'
                                }}>
                                    <FaCamera size={30} color="#94a3b8" />
                                </div>
                                <span style={{ fontSize: '13px', color: '#64748b' }}>Upload Photo</span>
                            </div>

                            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#334155' }}>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="search-input"
                                        required
                                        style={{ background: '#fff' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#334155' }}>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="search-input"
                                        required
                                        style={{ background: '#fff' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#334155' }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="search-input"
                                        required
                                        style={{ background: '#fff' }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#334155' }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="search-input"
                                        style={{ background: '#fff' }}
                                    />
                                </div>
                            </div>
                        </div>

                        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '30px 0' }} />

                        <h3 className="section-title">Professional Information</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#334155' }}>Specialization</label>
                                <select
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    className="search-input"
                                    style={{ background: '#fff' }}
                                >
                                    <option>General</option>
                                    <option>Cardiology</option>
                                    <option>Neurology</option>
                                    <option>Orthopedics</option>
                                    <option>Pediatrics</option>
                                    <option>Dermatology</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#334155' }}>Experience (Years)</label>
                                <input
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="search-input"
                                    style={{ background: '#fff' }}
                                />
                            </div>
                            <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: '#334155' }}>Qualifications</label>
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="search-input"
                                    placeholder="e.g. MBBS, MD, FRCS"
                                    style={{ background: '#fff' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                            <button type="button" onClick={() => navigate("/admin/doctors")} className="btn-outline">
                                Cancel
                            </button>
                            <button type="submit" className="btn-primary">
                                <FaSave /> Save Doctor
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
