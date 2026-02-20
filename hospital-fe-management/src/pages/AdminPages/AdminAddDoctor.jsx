import "../../styles/admin.css"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import { useState } from "react";
import { FaUserMd, FaArrowLeft, FaSave, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { authenticatedFetch } from "../../utils/api";

export default function AdminAddDoctor() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loadingToast = toast.loading("Saving doctor details...");

        try {
            // Generate a unique dummy phone number to avoid backend unique constraint "roll back" errors
            const uniqueId = Date.now().toString().slice(-6);
            const dummyMobile = `9000${uniqueId}`;

            const payload = {
                fullName: formData.fullName,
                name: formData.fullName,
                username: formData.email,
                email: formData.email,
                password: formData.password,
                role: "ROLE_DOCTOR",
                dob: "2000-01-01",
                gender: "Male",
                bloodGroup: "O+",
                height: "170",
                weight: "70",
                age: 35,
                specialization: "General",
                speciality: "General",
                condition: "None",
                address: "Not Provided",
                phone: dummyMobile,
                phoneNumber: dummyMobile,
                mobile: dummyMobile
            };

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
                throw new Error(message || "Failed to create doctor");
            }

            toast.success("Doctor added successfully!", { id: loadingToast });

            // Update local storage for UI consistency
            const existingDoctors = JSON.parse(localStorage.getItem("hospital_doctors") || "[]");
            const newDoctor = {
                id: Date.now(),
                name: formData.fullName.startsWith("Dr. ") ? formData.fullName : `Dr. ${formData.fullName}`,
                specialization: "General",
                patients: 0,
                status: "Active"
            };
            localStorage.setItem("hospital_doctors", JSON.stringify([...existingDoctors, newDoctor]));

            setTimeout(() => {
                navigate("/admin/doctors");
            }, 2000);
        } catch (error) {
            console.error("Error creating doctor:", error);
            toast.error(error.message, { id: loadingToast });
        }
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

            <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5" style={{ maxWidth: '600px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column gap-4 mb-5">
                        <div className="w-100">
                            <label className="form-label small fw-bold text-muted text-uppercase mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="e.g. Dr. Sarah Wilson"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-control form-control-lg bg-light border-0 shadow-none rounded-3 px-4 py-3"
                                required
                            />
                        </div>

                        <div className="w-100">
                            <label className="form-label small fw-bold text-muted text-uppercase mb-2">Email Address</label>
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

                        <div className="w-100">
                            <label className="form-label small fw-bold text-muted text-uppercase mb-2">Access Password</label>
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

                    <div className="d-flex justify-content-end gap-3 pt-4 border-top">
                        <button
                            type="button"
                            onClick={() => navigate("/admin/doctors")}
                            className="btn btn-lg btn-outline-secondary px-5 rounded-pill fw-bold"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-lg btn-primary px-5 rounded-pill shadow-sm d-flex align-items-center gap-2 fw-bold"
                        >
                            <FaSave /> Save Doctor
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
