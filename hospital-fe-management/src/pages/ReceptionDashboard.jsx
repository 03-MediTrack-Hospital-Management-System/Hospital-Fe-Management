
import React, { useState } from "react";
import Sidebar from "../components/ReceptionComponent/Sidebar";
import PatientRegisterPopup from "../components/ReceptionComponent/PatientRegisterPopup";
import GenerateBillsModal from "../components/ReceptionComponent/GenerateBillsModal";
import OverviewCards from "../components/ReceptionComponent/OverviewCards";
import PatientChart from "../components/ReceptionComponent/PatientChart";
import Reports from "../components/ReceptionComponent/Reports";
import LatestPatients from "../components/ReceptionComponent/LatestPatients";
import DoctorAppointments from "../components/ReceptionComponent/DoctorAppointments";
import "../styles/reception.css";
import { FaHeart } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

export default function ReceptionDashboard() {
  const [showPatientPopup, setShowPatientPopup] = useState(false);
  const [showBillsModal, setShowBillsModal] = useState(false);

  return (
    <>

      <section className="patient-dashboard-header">
        <div className="logo">
          <FaHeart /> <span>VVCARE</span>
        </div>
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