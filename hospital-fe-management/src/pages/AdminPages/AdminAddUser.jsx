import React, { useState, useRef, useEffect } from "react";
import { FaUserPlus, FaArrowLeft, FaSave, FaUserMd, FaUserInjured, FaCamera, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../styles/admin.css";

export default function AdminAddUser() {
    const navigate = useNavigate();
    const [role, setRole] = useState("DOCTOR");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        // Doctor specific
        specialization: "General",
        experience: "",
        qualification: "",
        // Patient specific
        age: "",
        gender: "Male",
        bloodGroup: "A+",
        condition: ""
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const [roleInput, setRoleInput] = useState("Doctor");

    // Removed isRoleDropdownOpen and dropdownRef states
    // Removed useEffect for handleClickOutside

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // If typing in the Role field, dynamically update the 'role' internal state
        if (name === "manualRole") {
            setRoleInput(value);
            const normalized = value.toLowerCase();
            if (normalized.includes("doc")) {
                setRole("DOCTOR");
            } else if (normalized.includes("pat")) {
                setRole("PATIENT");
            }
        }
    };

    // Mapping internal role for component logic
    useEffect(() => {
        const normalized = roleInput.toLowerCase();
        if (normalized.includes("doc")) {
            setRole("DOCTOR");
        } else if (normalized.includes("pat")) {
            setRole("PATIENT");
        }
    }, [roleInput]);

    // Removed handleRoleSelect

    const handleSubmit = (e) => {
        e.preventDefault();

        // Save to localStorage for persistence
        if (role === "DOCTOR") {
            const existingDoctors = JSON.parse(localStorage.getItem("hospital_doctors") || "[]");
            const newDoctor = {
                id: Date.now(),
                name: formData.fullName.startsWith("Dr. ") ? formData.fullName : `Dr. ${formData.fullName}`,
                specialization: formData.specialization,
                patients: 0,
                status: "Active"
            };
            localStorage.setItem("hospital_doctors", JSON.stringify([...existingDoctors, newDoctor]));
        } else {
            const existingPatients = JSON.parse(localStorage.getItem("hospital_patients") || "[]");
            const newPatient = {
                id: Date.now(),
                name: formData.fullName,
                age: formData.age,
                condition: formData.condition || "General Checkup",
                status: "Stable"
            };
            localStorage.setItem("hospital_patients", JSON.stringify([...existingPatients, newPatient]));
        }

        setIsSuccess(true);
        setTimeout(() => {
            navigate(role === "DOCTOR" ? "/admin/doctors" : "/admin/patients");
        }, 3000);
    };

    if (isSuccess) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
                <div className="card shadow border-0 rounded-4 p-5 text-center animation-fade-in" style={{ maxWidth: '500px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: '#f0fdf4',
                        color: '#22c55e',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        margin: '0 auto 25px',
                        boxShadow: '0 10px 20px rgba(34, 197, 94, 0.15)'
                    }}>
                        <FaCheckCircle />
                    </div>
                    <h2 style={{ color: '#1e293b', marginBottom: '12px', fontWeight: '800' }}>
                        {roleInput} Added!
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                        The new {roleInput.toLowerCase()} has been successfully registered in the system. <br />
                        Redirecting you to the {role === "DOCTOR" ? "Doctors" : "Patients"} list now...
                    </p>
                    <button
                        className="btn btn-primary btn-lg w-100 rounded-3 shadow-sm"
                        onClick={() => navigate(role === "DOCTOR" ? "/admin/doctors" : "/admin/patients")}
                    >
                        View List
                    </button>
                    <div className="progress mt-4" style={{ height: '4px' }}>
                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '100%' }}></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="admin-add-user-container">
            <div className="mb-4">
                <button
                    onClick={() => navigate("/admin")}
                    className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-2"
                >
                    <FaArrowLeft /> Back to Dashboard
                </button>
                <div className="admin-info">
                    <h2 className="fw-bold mb-1">Onboard New {roleInput}</h2>
                    <p className="text-muted mb-0">Manually enter the role and details to create a new account</p>
                </div>
            </div>

            <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5" style={{ maxWidth: '800px', background: '#ffffff' }}>
                <form onSubmit={handleSubmit}>
                    <div className="row g-4 mb-4">
                        <div className="col-12 text-start">
                            <label className="form-label fw-bold text-dark mb-2">User Role</label>
                            <input
                                type="text"
                                name="manualRole"
                                placeholder="e.g. Doctor, Patient"
                                value={roleInput}
                                onChange={(e) => handleChange(e)} // Use the general handleChange
                                className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3 fw-semibold"
                                required
                            />
                            <div className="mt-2 d-flex align-items-center gap-2 text-primary small fw-medium">
                                {role === 'DOCTOR' ? <FaUserMd size={14} /> : <FaUserInjured size={14} />}
                                Detected as: <strong>{role === 'DOCTOR' ? 'Medical Professional' : 'Patient Account'}</strong>
                            </div>
                        </div>

                        <div className="col-12 text-start">
                            <label className="form-label fw-bold text-dark mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder={role === "DOCTOR" ? "e.g. Sarah Wilson" : "e.g. John Doe"}
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                required
                            />
                        </div>

                        <div className="col-md-6 text-start">
                            <label className="form-label fw-bold text-dark mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@hospital.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                required
                            />
                        </div>

                        <div className="col-md-6 text-start">
                            <label className="form-label fw-bold text-dark mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+1 (234) 567-8900"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                required
                            />
                        </div>

                        <div className="col-12 text-start">
                            <label className="form-label fw-bold text-dark mb-2">Access Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a secure password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                required
                            />
                        </div>
                    </div>

                    <h4 className="fw-bold mb-4 pb-2 border-bottom d-flex align-items-center gap-2">
                        {role === "DOCTOR" ? <FaUserMd className="text-primary" /> : <FaUserInjured className="text-primary" />}
                        {role === "DOCTOR" ? "Professional Details" : "Health Profile"}
                    </h4>

                    {role === "DOCTOR" ? (
                        <div className="row g-4 mb-5 text-start">
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-dark mb-2">Specialization</label>
                                <select
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    className="form-select form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
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
                                <label className="form-label fw-bold text-dark mb-2">Years of Experience</label>
                                <input
                                    type="number"
                                    name="experience"
                                    placeholder="Years"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label className="form-label fw-bold text-dark mb-2">Qualifications</label>
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                    placeholder="e.g. MBBS, MD, FRCS"
                                    required
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="row g-4 mb-5 text-start">
                            <div className="col-md-4">
                                <label className="form-label fw-bold text-dark mb-2">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold text-dark mb-2">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="form-select form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold text-dark mb-2">Blood Group</label>
                                <select
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    className="form-select form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                >
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label className="form-label fw-bold text-dark mb-2">Current Medical Condition</label>
                                <textarea
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleChange}
                                    className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                    rows="3"
                                    placeholder="Describe current condition or recent symptoms..."
                                ></textarea>
                            </div>
                        </div>
                    )}

                    <div className="d-flex justify-content-end gap-3 pt-4 border-top">
                        <button
                            type="button"
                            onClick={() => navigate("/admin")}
                            className="btn btn-lg btn-outline-secondary px-5 rounded-pill fw-bold"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary px-5 rounded-pill shadow-sm d-flex align-items-center gap-2 fw-bold"
                        >
                            <FaSave /> Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
