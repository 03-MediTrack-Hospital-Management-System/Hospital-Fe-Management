import PatientLayout from "../components/PatientComponent/PatientLayout";
import PatientOverview from "../components/PatientComponent/PatientOverview";
import PatientDoctors from "../components/PatientComponent/PatientDoctors";
import "../styles/pages/PatientDashboard.css";

export default function PatientDashboard() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <PatientLayout>
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <p>Welcome back, John! Here is your health overview for {today}.</p>
      </div>

      <PatientOverview />

      <div className="dashboard-middle">
        <PatientDoctors />
      </div>
    </PatientLayout>
  );
}
