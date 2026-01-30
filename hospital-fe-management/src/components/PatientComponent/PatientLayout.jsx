import React from "react";
import PatientSidebar from "./PatientSidebar";
import Calendar from "../Common/Calendar";
import GlobalHeader from "../Common/GlobalHeader";
import { useNavigate } from "react-router-dom";


export default function PatientLayout({ children }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        
        navigate('/login');
    };

    return (
        <div className="d-flex flex-column min-vh-100 global-dashboard-bg">
            <GlobalHeader
                user={{ name: "John Doe", role: "Patient" }}
                onLogout={handleLogout}
            />

            <div className="container-fluid p-0">
                <div className="d-flex" style={{ height: 'calc(100vh - 72.8px)' }}>
                    
                    <div className="d-none d-md-block h-100">
                        <PatientSidebar />
                    </div>


                    <main className="flex-grow-1 p-4 h-100 overflow-y-auto" style={{ minWidth: 0 }}>
                        {children}
                    </main>


                    <aside className="d-none d-lg-block bg-white border-start p-4 h-100 overflow-y-auto" style={{ width: '300px', flexShrink: 0 }}>
                        <Calendar />
                    </aside>
                </div>
            </div>
        </div>
    );
}
