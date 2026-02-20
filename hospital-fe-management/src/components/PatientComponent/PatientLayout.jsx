import React, { useState } from "react";
import PatientSidebar from "./PatientSidebar";
import Calendar from "../Common/Calendar";
import GlobalHeader from "../Common/GlobalHeader";
import { useNavigate } from "react-router-dom";

export default function PatientLayout({ children }) {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [user, setUser] = useState({ name: "Patient", role: "Patient" });

    React.useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            try {
                const parsed = JSON.parse(storedUser);
                setUser({
                    name: parsed.fullName || parsed.name || "Patient",
                    role: "Patient"
                });
            } catch (e) {
                console.error("Error parsing user info", e);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        navigate('/login');
    };

    return (
        <div className="d-flex flex-column min-vh-100 global-dashboard-bg overflow-hidden">
            <GlobalHeader
                user={user}
                onLogout={handleLogout}
            />

            <div className="container-fluid p-0 flex-grow-1 overflow-hidden">
                <div className="d-flex h-100">
                    <div style={{
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        width: isCollapsed ? '90px' : '260px',
                        flexShrink: 0
                    }}>
                        <PatientSidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
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
