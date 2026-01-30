import React from "react";
import PatientSidebar from "./PatientSidebar";
import PatientCalendar from "./PatientCalendar";
import GlobalHeader from "../Common/GlobalHeader";


export default function PatientLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <GlobalHeader user={{ name: "John Doe", role: "Patient" }} />

            <div className="container-fluid p-0">
                <div className="d-flex">
                    {/* Sidebar - Dynamic Width */}
                    <div className="d-none d-md-block">
                        <PatientSidebar />
                    </div>

                    {/* Main Content - Grows to fill space */}
                    <main className="flex-grow-1 p-4" style={{ minWidth: 0 }}>
                        {children}
                    </main>

                    {/* Right Sidebar (Calendar) - Fixed Width */}
                    <aside className="d-none d-lg-block bg-white border-start p-4 min-vh-100" style={{ width: '300px', flexShrink: 0 }}>
                        <PatientCalendar />
                    </aside>
                </div>
            </div>
        </div>
    );
}
