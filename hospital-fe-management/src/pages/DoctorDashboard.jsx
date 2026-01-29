import Sidebar from "../components/Receptioncomponent/Sidebar";
import DoctorOverview from "../components/DoctorComponent/DoctorOverview";
import DoctorStats from "../components/DoctorComponent/DoctorStats";
import DoctorPatients from "../components/DoctorComponent/DoctorPatients";
import DoctorAppointments from "../components/DoctorComponent/DoctorAppointments";
import "../styles/reception.css";
import { FaHeart } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";

export default function DoctorDashboard() {
  return (
    <>
      {/* Header */}
      <section className="patient-dashboard-header">
        <div className="logo">
          <FaHeart /> <span>VVCARE</span>
        </div>

        <button className="logout-btn">
          <IoExitOutline /> Logout
        </button>
      </section>

      {/* Layout */}
      <section className="patient-dashboard-content">
        <Sidebar />

        <main className="patient-dashboard-content-center">
          <h1>Doctor Dashboard</h1>

          <DoctorOverview />

          <div className="dashboard-middle">
            <DoctorStats />
            <DoctorPatients />
          </div>
        </main>

        <DoctorAppointments />
      </section>
    </>
  );
}
