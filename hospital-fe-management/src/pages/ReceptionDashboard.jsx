import React, { useState } from "react";
import Sidebar from "../components/ReceptionComponent/Sidebar";
import PatientRegisterPopup from "../components/ReceptionComponent/PatientRegisterPopup";
import GenerateBillsModal from "../components/ReceptionComponent/GenerateBillsModal";
import OverviewCards from "../components/ReceptionComponent/OverviewCards";
import PatientChart from "../components/ReceptionComponent/PatientChart";
import Reports from "../components/ReceptionComponent/Reports";
import LatestPatients from "../components/ReceptionComponent/LatestPatients";
import Calendar from "../components/Common/Calendar";
import GlobalHeader from "../components/Common/GlobalHeader";
import "../styles/reception.css";
import { useNavigate } from "react-router-dom";

export default function ReceptionDashboard() {
  const [showPatientPopup, setShowPatientPopup] = useState(false);
  const [showBillsModal, setShowBillsModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column min-vh-100 overflow-hidden global-dashboard-bg">
      <GlobalHeader
        user={{ name: "Receptionist", role: "Front Desk" }}
        onLogout={handleLogout}
      />

      <section className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar
          onAddPatient={() => setShowPatientPopup(true)}
          onGenerateBills={() => setShowBillsModal(true)}
        />

        <main className="patient-dashboard-content-center flex-grow-1 overflow-y-auto p-4">
          <h1>Reception Dashboard</h1>

          <OverviewCards />

          <div className="dashboard-middle">
            <PatientChart />
            <Reports />
          </div>

          <LatestPatients />
        </main>

        <div style={{ width: '320px', flexShrink: 0, borderLeft: '1px solid #e2e8f0', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)', padding: '20px' }}>
          <Calendar />
        </div>
      </section>


      {showPatientPopup && (
        <PatientRegisterPopup onClose={() => setShowPatientPopup(false)} />
      )}

      {showBillsModal && (
        <GenerateBillsModal onClose={() => setShowBillsModal(false)} />
      )}
    </div>
  );
}