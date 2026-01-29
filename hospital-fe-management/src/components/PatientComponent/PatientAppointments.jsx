export default function PatientAppointments() {
  return (
    <aside className="patient-dashboard-content-right">
      <h3>My Doctors</h3>

      <div className="doctor-card">
        ❤️ Cardiologist
        <p>Dr. Caroline</p>
      </div>

      <div className="doctor-card active">
        👶 Pediatrician
        <p>Dr. Malik</p>
      </div>

      <div className="doctor-card">
        🧠 Neurologist
        <p>Dr. Melanie</p>
      </div>
    </aside>
  );
}
