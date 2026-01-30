import React from "react";
import PatientSidebar from "./PatientSidebar";
import PatientCalendar from "./PatientCalendar";
import GlobalHeader from "../Common/GlobalHeader";
import "../../styles/reception.css";

export default function PatientLayout({ children }) {
    return (
        <div id="patient-root">
            <GlobalHeader user={{ name: "John Doe", role: "Patient" }} />

            <div id="patient-layout" style={{ height: 'calc(100vh - 80px)', minHeight: 'auto' }}>
                <PatientSidebar />

                <main id="patient-main" style={{ padding: '40px' }}>
                    {children}
                </main>

                <aside className="patient-dashboard-content-right" style={{ padding: '40px 20px' }}>
                    <PatientCalendar />
                </aside>
            </div>
        </div>
    );
}

