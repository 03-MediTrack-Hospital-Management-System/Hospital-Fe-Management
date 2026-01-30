import "../../styles/components/PatientDoctors.css";

export default function PatientDoctors() {
  return (
    <div className="reports-card patient-doctors-section">
      <h3>My Doctors</h3>

      <div className="doctors-grid">
        <div className="doctor-item-card">
          <div className="doctor-icon-wrapper" style={{ background: '#ffe4e6' }}>❤️</div>
          <div className="doctor-info-text">
            <span>Cardiologist</span>
            <p>Dr. Caroline</p>
          </div>
        </div>

        <div className="doctor-item-card active">
          <div className="doctor-icon-wrapper" style={{ background: 'rgba(255,255,255,0.2)' }}>👶</div>
          <div className="doctor-info-text">
            <span>Pediatrician</span>
            <p>Dr. Malik</p>
          </div>
        </div>

        <div className="doctor-item-card">
          <div className="doctor-icon-wrapper" style={{ background: '#f3e8ff' }}>🧠</div>
          <div className="doctor-info-text">
            <span>Neurologist</span>
            <p>Dr. Melanie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
