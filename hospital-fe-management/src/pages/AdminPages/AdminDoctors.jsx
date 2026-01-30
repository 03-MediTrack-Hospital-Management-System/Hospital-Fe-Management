import "../../styles/admin.css"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import { FaUserMd, FaPlus, FaEdit, FaTrash, FaSearch, FaFilter } from "react-icons/fa";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function AdminDoctors() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterSpecialization, setFilterSpecialization] = useState("All");

    const doctors = [
        { id: 1, name: "Dr. Sarah Wilson", specialization: "Cardiology", patients: 154, status: "Active" },
        { id: 2, name: "Dr. James Carter", specialization: "Neurology", patients: 89, status: "On Leave" },
        { id: 3, name: "Dr. Emily Davis", specialization: "Pediatrics", patients: 210, status: "Active" },
        { id: 4, name: "Dr. Robert Brown", specialization: "Orthopedics", patients: 120, status: "Active" },
        { id: 5, name: "Dr. Lisa White", specialization: "Dermatology", patients: 75, status: "Active" },
    ];

    const filteredDoctors = doctors.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterSpecialization === "All" || doctor.specialization === filterSpecialization;
        return matchesSearch && matchesFilter;
    });

    const specializations = ["All", ...new Set(doctors.map(d => d.specialization))];

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="admin-main">
                <div className="admin-header-enhanced">
                    <div className="admin-info">
                        <h1>Manage Doctors</h1>
                        <p>View and manage medical staff</p>
                    </div>
                    <button className="btn-primary" onClick={() => navigate("/admin/doctors/add")}>
                        <FaPlus style={{ marginRight: '8px' }} /> Add New Doctor
                    </button>
                </div>

                <div className="admin-toolbar">
                    <div className="search-bar-container">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search doctors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="filter-group">
                        <FaFilter color="#64748b" />
                        <select
                            value={filterSpecialization}
                            onChange={(e) => setFilterSpecialization(e.target.value)}
                            className="filter-select"
                        >
                            {specializations.map(spec => (
                                <option key={spec} value={spec}>{spec}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="card dashboard-card">

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Specialization</th>
                                <th>Patients</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDoctors.map((doctor) => (
                                <tr key={doctor.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div className="admin-avatar-sm" style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(11, 92, 99, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0b5c63', fontSize: '18px' }}>
                                                <FaUserMd />
                                            </div>
                                            <span style={{ fontWeight: '600', color: '#334155' }}>{doctor.name}</span>
                                        </div>
                                    </td>
                                    <td><span style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px', fontSize: '13px', color: '#475569' }}>{doctor.specialization}</span></td>
                                    <td style={{ fontWeight: '500' }}>{doctor.patients}</td>
                                    <td>
                                        <span className={`status ${doctor.status === 'Active' ? 'paid' : 'pending'}`} style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                                            {doctor.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button className="icon-btn" title="Edit"><FaEdit color="#64748b" /></button>
                                            <button className="icon-btn" title="Delete"><FaTrash color="#ef4444" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredDoctors.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                            <p>No doctors found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
