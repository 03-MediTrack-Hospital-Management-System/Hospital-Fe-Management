import Sidebar from "../components/Receptioncomponent/Sidebar";
import OverviewCards from "../components/Receptioncomponent/OverviewCards";
import PatientChart from "../components/Receptioncomponent/PatientChart";
import Reports from "../components/Receptioncomponent/Reports";
import LatestPatients from "../components/Receptioncomponent/LatestPatients";
import DoctorAppointments from "../components/Receptioncomponent/DoctorAppointments";
import React from "react";
import "../styles/reception.css";
import { FaHeart } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

export default function ReceptionDashboard() {
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
          <h1>Dashboard</h1>

          <OverviewCards />

          <div className="dashboard-middle">
            <PatientChart />
            <Reports />
          </div>

          <LatestPatients />
        </main>

        <DoctorAppointments />
      </section>
    </>
  );
}
