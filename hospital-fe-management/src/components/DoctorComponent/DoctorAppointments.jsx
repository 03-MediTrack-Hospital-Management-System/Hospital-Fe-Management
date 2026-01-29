export default function DoctorAppointments() {
  return (
    <aside className="patient-dashboard-content-right">
      <h3>Upcoming Appointments</h3>

      <div className="doctor-card active">
        🕘 10:00 AM
        <p>Patient: Rahul</p>
      </div>

      <div className="doctor-card">
        🕚 11:30 AM
        <p>Patient: Neha</p>
      </div>

      <div className="doctor-card">
        🕐 1:00 PM
        <p>Patient: Arjun</p>
      </div>
    </aside>
  );
}
