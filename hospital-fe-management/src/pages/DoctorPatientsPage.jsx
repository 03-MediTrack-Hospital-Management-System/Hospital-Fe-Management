import DoctorSidebar from "../components/DoctorComponent/DoctorSidebar";
import DoctorPatients from "../components/DoctorComponent/DoctorPatients";
import GlobalHeader from "../components/Common/GlobalHeader";
import { FaSearch } from "react-icons/fa";
import "../styles/reception.css";
import { useState } from "react";

export default function DoctorPatientsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div id="patient-root">
            <GlobalHeader />

            <div id="patient-layout" className="doctor-layout-override" style={{ height: 'calc(100vh - 80px)', minHeight: 'auto' }}>
                <DoctorSidebar />

                <main id="patient-main" style={{ padding: '40px' }}>
                    <div style={{ marginBottom: '35px' }}>
                        <h1 style={{ fontSize: '36px', color: '#0b5c63', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
                            My Patients
                        </h1>
                        <p style={{ margin: 0, fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
                            Overview of your assigned patients and their health status.
                        </p>
                    </div>


                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginBottom: '25px' }}>
                        <div style={{ position: 'relative', width: '300px' }}>
                            <FaSearch style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                            <input
                                type="text"
                                placeholder="Search patients by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '12px',
                                    border: '1px solid #f1f5f9',
                                    outline: 'none',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                                    fontSize: '14px',
                                    background: 'white'
                                }}
                            />
                        </div>
                    </div>

                    <div className="patients-list-container" style={{ background: 'transparent' }}>
                        <DoctorPatients searchTerm={searchTerm} />
                    </div>
                </main>
            </div>
        </div>
    );
}

