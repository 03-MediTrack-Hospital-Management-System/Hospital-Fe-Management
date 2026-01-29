import Sidebar from "../components/Receptioncomponent/Sidebar";
import PatientOverview from "../components/PatientComponent/PatientOverview";
import PatientChart from "../components/PatientComponent/PatientChart";
import PatientReports from "../components/PatientComponent/PatientReports";
import PatientAppointments from "../components/PatientComponent/PatientAppointments";
import React from "react";
import "../styles/patient.css";
import { FaHeart } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

export default function PatientDashboard() {
  return (
    <>
      {/* HEADER */}
      <section className="patient-dashboard-header">
        <div className="logo">
          <FaHeart /> <span>VVCARE</span>
        </div>

        <button className="logout-btn">
          <IoExitOutline /> Logout
        </button>
      </section>

      {/* CONTENT */}
      <section className="patient-dashboard-content">
        <Sidebar />

        <main className="patient-dashboard-content-center">
          <h1>My Dashboard</h1>

          <PatientOverview />

          <div className="dashboard-middle">
            <PatientChart />
            <PatientReports />
          </div>
        </main>

        <PatientAppointments />
      </section>
    </>
  );
}
