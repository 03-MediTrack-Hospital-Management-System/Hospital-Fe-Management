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
        <>
            <div className="mb-4">
                <button
                    onClick={() => navigate("/admin/doctors")}
                    className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-2"
                >
                    <FaArrowLeft /> Back to Doctors
                </button>
                <div className="admin-info">
                    <h2 className="fw-bold mb-1">Add New Doctor</h2>
                    <p className="text-muted mb-0">Onboard a new medical staff member</p>
                </div>
            </div>

            <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5" style={{ maxWidth: '900px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="row g-4 mb-5">
                        <div className="col-lg-3 text-center">
                            <div className="mx-auto" style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: '#f8fafc',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '2px dashed #cbd5e1',
                                marginBottom: '15px',
                                cursor: 'pointer'
                            }}>
                                <FaCamera size={30} color="#94a3b8" />
                            </div>
                            <span className="text-secondary small fw-medium">Upload Photo</span>
                        </div>

                        <div className="col-lg-9">
                            <div className="row g-3">
                                <div className="col-md-6 text-start">
                                    <label className="form-label fw-semibold text-dark">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="form-control form-control-lg bg-light border-0"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 text-start">
                                    <label className="form-label fw-semibold text-dark">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="form-control form-control-lg bg-light border-0"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 text-start">
                                    <label className="form-label fw-semibold text-dark">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control form-control-lg bg-light border-0"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 text-start">
                                    <label className="form-label fw-semibold text-dark">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control form-control-lg bg-light border-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h4 className="fw-bold mb-4 pb-2 border-bottom">Professional Information</h4>
                    <div className="row g-4 mb-5 text-start">
                        <div className="col-md-6">
                            <label className="form-label fw-semibold text-dark">Specialization</label>
                            <select
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleChange}
                                className="form-select form-control-lg bg-light border-0"
                            >
                                <option>General</option>
                                <option>Cardiology</option>
                                <option>Neurology</option>
                                <option>Orthopedics</option>
                                <option>Pediatrics</option>
                                <option>Dermatology</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-semibold text-dark">Experience (Years)</label>
                            <input
                                type="number"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="form-control form-control-lg bg-light border-0"
                            />
                        </div>
                        <div className="col-12">
                            <label className="form-label fw-semibold text-dark">Qualifications</label>
                            <input
                                type="text"
                                name="qualification"
                                value={formData.qualification}
                                onChange={handleChange}
                                className="form-control form-control-lg bg-light border-0"
                                placeholder="e.g. MBBS, MD, FRCS"
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-end gap-3 pt-4 border-top">
                        <button
                            type="button"
                            onClick={() => navigate("/admin/doctors")}
                            className="btn btn-lg btn-outline-secondary px-5 rounded-3"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary px-5 rounded-3 shadow-sm d-flex align-items-center gap-2"
                        >
                            <FaSave /> Save Doctor
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
