import React, { useState, useRef, useEffect } from "react";
import { FaUserPlus, FaArrowLeft, FaSave, FaUserMd, FaUserInjured, FaCamera, FaCheckCircle } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../../styles/admin.css";
import { authenticatedFetch } from "../../utils/api";
import { toast } from "react-hot-toast";

export default function AdminAddUser() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [role, setRole] = useState("DOCTOR");
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const [roleInput, setRoleInput] = useState(searchParams.get("role") || "Doctor");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loadingToast = toast.loading("Processing user registration...");

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("You must be logged in as an administrator to create users.");
            }

            // Ensure role has ROLE_ prefix
            const apiRole = role.startsWith("ROLE_") ? role : `ROLE_${role}`;

            // Generate a unique dummy phone number to avoid backend unique constraint "roll back" errors
            const uniqueId = Date.now().toString().slice(-6);
            const dummyMobile = `9000${uniqueId}`;

            // Base fields common to both
            let payload = {
                fullName: formData.fullName,
                name: formData.fullName,
                username: formData.email,
                email: formData.email,
                password: formData.password,
                role: apiRole,
                dob: "2000-01-01",
                gender: "Male",
                bloodGroup: "O+",
                height: "170",
                weight: "70",
                age: role === "DOCTOR" ? 35 : 25,
                address: "Not Provided",
                phone: dummyMobile,
                phoneNumber: dummyMobile,
                mobile: dummyMobile
            };

            // Tailor the payload for the profile service
            if (role === "DOCTOR") {
                payload.specialization = "General";
                payload.speciality = "General";
                payload.condition = "None";
            } else {
                // Patients don't have specialization, but might need condition/reason
                payload.condition = "General Checkup";
                payload.reason = "General Checkup";
            }

            const response = await authenticatedFetch("http://localhost:8081/auth/admin/create-user", {
                method: "POST",
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                let message = errorText;
                try {
                    const parsed = JSON.parse(errorText);
                    message = parsed.message || (parsed.error ? `${parsed.error}: ${parsed.message}` : errorText);
                } catch (e) { }

                if (response.status === 403) {
                    throw new Error("Permission denied. Ensure you are logged in as an administrator.");
                }
                throw new Error(message || `Failed to create user (Status: ${response.status})`);
            }

            // Success!
            toast.success(`${roleInput} added successfully!`, { id: loadingToast });

            // Always add to local storage for persistence in this session (demo UI fallback)
            if (role === "DOCTOR") {
                const existingDoctors = JSON.parse(localStorage.getItem("hospital_doctors") || "[]");
                const newDoctor = {
                    id: Date.now(),
                    name: formData.fullName.startsWith("Dr. ") ? formData.fullName : `Dr. ${formData.fullName}`,
                    specialization: "General",
                    patients: 0,
                    status: "Active"
                };
                localStorage.setItem("hospital_doctors", JSON.stringify([...existingDoctors, newDoctor]));
            } else {
                const existingPatients = JSON.parse(localStorage.getItem("hospital_patients") || "[]");
                const newPatient = {
                    id: Date.now(),
                    name: formData.fullName,
                    age: "N/A",
                    condition: "General Checkup",
                    status: "Stable"
                };
                localStorage.setItem("hospital_patients", JSON.stringify([...existingPatients, newPatient]));
            }

            setIsSuccess(true);
            setTimeout(() => {
                navigate(role === "DOCTOR" ? "/admin/doctors" : "/admin/patients");
            }, 3000);
        } catch (error) {
            console.error("Error creating user:", error);
            toast.error(error.message, { id: loadingToast });
        }
    };

    if (isSuccess) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100%' }}>
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
                        The new {roleInput.toLowerCase()} has been successfully registered.
                    </p>
                    <button
                        className="btn btn-primary btn-lg w-100 rounded-3 shadow-sm"
                        onClick={() => navigate(role === "DOCTOR" ? "/admin/doctors" : "/admin/patients")}
                    >
                        View List
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-2 p-md-4">
            <div className="mb-4">
                <button
                    onClick={() => navigate("/admin")}
                    className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-2"
                >
                    <FaArrowLeft /> Back
                </button>
                <h3 className="fw-bold mb-1">Onboard New {roleInput}</h3>
            </div>

            <div className="card shadow-sm border-0 rounded-4 overflow-hidden" style={{ maxWidth: '600px' }}>
                <div className="p-4 p-md-5">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label small fw-bold text-muted text-uppercase">User Role</label>
                            <select
                                name="manualRole"
                                value={roleInput}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setRoleInput(value);
                                    if (value === "Doctor") setRole("DOCTOR");
                                    else if (value === "Patient") setRole("PATIENT");
                                }}
                                className="form-select bg-light border-0 shadow-none p-3"
                                required
                            >
                                <option value="Doctor">Doctor</option>
                                <option value="Patient">Patient</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold text-muted text-uppercase">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-control bg-light border-0 shadow-none p-3"
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-bold text-muted text-uppercase">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control bg-light border-0 shadow-none p-3"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label small fw-bold text-muted text-uppercase">Access Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="form-control bg-light border-0 shadow-none p-3"
                                required
                            />
                        </div>

                        <div className="d-flex gap-3">
                            <button
                                type="button"
                                onClick={() => navigate("/admin")}
                                className="btn btn-outline-secondary flex-grow-1 p-3 fw-bold rounded-3"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary flex-grow-1 p-3 fw-bold rounded-3 shadow-sm"
                            >
                                <FaSave className="me-2" /> Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
