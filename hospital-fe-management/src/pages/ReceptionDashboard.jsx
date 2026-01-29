
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Receptioncomponent/Sidebar";
import PatientRegisterPopup from "../components/Receptioncomponent/PatientRegisterPopup";
import GenerateBillsModal from "../components/Receptioncomponent/GenerateBillsModal";
import OverviewCards from "../components/Receptioncomponent/OverviewCards";
import PatientChart from "../components/Receptioncomponent/PatientChart";
import Reports from "../components/Receptioncomponent/Reports";
import LatestPatients from "../components/Receptioncomponent/LatestPatients";
import DoctorAppointments from "../components/Receptioncomponent/DoctorAppointments";
import "../styles/reception.css";
import { FaHeart } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

export default function ReceptionDashboard() {
  const [showPatientPopup, setShowPatientPopup] = useState(false);
  const [showBillsModal, setShowBillsModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
     
      <section className="patient-dashboard-header">
        <div className="logo">
          <FaHeart /> <span>VVCARE</span>
        </div>

        <button className="logout-btn" onClick={() => navigate("/login")}>
          <IoExitOutline /> Logout
        </button>
      </section>

    
      <section className="patient-dashboard-content">
        <Sidebar
          onAddPatient={() => setShowPatientPopup(true)}
          onGenerateBills={() => setShowBillsModal(true)}
        />

        <main className="patient-dashboard-content-center">
          <h1>Reception Dashboard</h1>

          <OverviewCards />

          <div className="dashboard-middle">
            <PatientChart />
            <Reports />
          </div>

          <LatestPatients />
        </main>

        <DoctorAppointments />
      </section>

    
      {showPatientPopup && (
        <PatientRegisterPopup onClose={() => setShowPatientPopup(false)} />
      )}

      {showBillsModal && (
        <GenerateBillsModal onClose={() => setShowBillsModal(false)} />
      )}
    </>
  );
}