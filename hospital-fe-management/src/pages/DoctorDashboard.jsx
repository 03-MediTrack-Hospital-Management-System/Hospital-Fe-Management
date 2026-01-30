import DoctorSidebar from "../components/DoctorComponent/DoctorSidebar";
import DoctorOverview from "../components/DoctorComponent/DoctorOverview";
import DoctorStats from "../components/DoctorComponent/DoctorStats";
import DoctorPatients from "../components/DoctorComponent/DoctorPatients";
import DoctorAppointments from "../components/DoctorComponent/DoctorAppointments";
import GlobalHeader from "../components/Common/GlobalHeader";
import "../styles/reception.css";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="doctor-dashboard-container d-flex flex-column min-vh-100 overflow-hidden global-dashboard-bg">
      <GlobalHeader onLogout={handleLogout} />

      <div className="d-flex flex-grow-1 overflow-hidden">
        <DoctorSidebar />

        <main className="flex-grow-1 p-4 overflow-y-auto" style={{ background: 'transparent' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '36px', color: '#0b5c63', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
              Doctor Dashboard
            </h1>
            <p style={{ margin: 0, fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
              Welcome back, Dr. John Doe. Here's your overview for today.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
            <DoctorOverview />

            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '30px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <DoctorStats />
                <DoctorPatients />
              </div>

              <div className="dashboard-appointments-mini" style={{ background: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '20px', color: '#0b5c63', marginBottom: '25px', fontWeight: '700' }}>Today's Schedule</h3>
                <DoctorAppointments />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>


  );
}
