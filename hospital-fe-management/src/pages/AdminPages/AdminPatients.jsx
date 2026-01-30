import "../../styles/admin.css"
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import { FaUserInjured, FaSearch, FaEye, FaSortAmountDown } from "react-icons/fa";
import { useState } from "react";

export default function AdminPatients() {
    const [searchTerm, setSearchTerm] = useState("");

    const patients = [
        { id: 1, name: "John Smith", age: 45, condition: "Hypertension", lastVisit: "2024-12-15", status: "Stable" },
        { id: 2, name: "Sarah Johnson", age: 32, condition: "Migraine", lastVisit: "2024-12-20", status: "Follow-up" },
        { id: 3, name: "Michael Brown", age: 28, condition: "Routine Checkup", lastVisit: "2024-12-22", status: "Discharged" },
        { id: 4, name: "Emily White", age: 55, condition: "Diabetes", lastVisit: "2025-01-05", status: "Critical" },
        { id: 5, name: "David Wilson", age: 62, condition: "Arthritis", lastVisit: "2025-01-10", status: "Stable" },
    ];

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="admin-main">
                <div className="admin-header-enhanced">
                    <div className="admin-info">
                        <h1>Patient Records</h1>
                        <p>Total Patients: {patients.length}</p>
                    </div>

                    <div className="admin-actions">
                        <button className="btn-outline">
                            <FaSortAmountDown /> Sort by Date
                        </button>
                    </div>
                </div>

                <div className="admin-toolbar">
                    <div className="search-bar-container">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search by name or condition..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="card dashboard-card">

                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Condition</th>
                                <th>Last Visit</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPatients.map((patient) => (
                                <tr key={patient.id}>
                                    <td>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div className="admin-avatar-sm" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <FaUserInjured color="#0b5c63" />
                                            </div>
                                            <span style={{ fontWeight: '600', color: '#1e293b' }}>{patient.name}</span>
                                        </div>
                                    </td>
                                    <td>{patient.age}</td>
                                    <td><span className="badge-condition" style={{ background: 'rgba(11, 92, 99, 0.05)', color: '#0b5c63', padding: '4px 8px', borderRadius: '6px', fontSize: '12px' }}>{patient.condition}</span></td>
                                    <td>{patient.lastVisit}</td>
                                    <td>
                                        <span style={{
                                            padding: '4px 10px',
                                            borderRadius: '12px',
                                            fontSize: '12px',
                                            fontWeight: '600',
                                            background: patient.status === 'Critical' ? '#fee2e2' : patient.status === 'Stable' ? '#dcfce7' : '#fef9c3',
                                            color: patient.status === 'Critical' ? '#ef4444' : patient.status === 'Stable' ? '#166534' : '#854d0e',
                                        }}>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn-outline" style={{ padding: '6px 14px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <FaEye /> View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredPatients.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
                            <p>No patients found.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
