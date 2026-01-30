import PatientLayout from "../components/PatientComponent/PatientLayout";
import AppointmentList from "../components/PatientComponent/AppointmentList";
import "../styles/reception.css";

export default function PatientAppointments() {
  return (
    <PatientLayout>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#0b5c63', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
          My Appointments
        </h1>
        <p style={{ margin: 0, fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
          Manage your upcoming and past medical appointments.
        </p>
      </div>
      <AppointmentList />
    </PatientLayout>
  );
}
