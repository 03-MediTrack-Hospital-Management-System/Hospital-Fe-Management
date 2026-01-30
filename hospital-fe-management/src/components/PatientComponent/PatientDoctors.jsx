

export default function PatientDoctors() {
  return (
    <div className="card border-0 shadow-sm p-4 h-100">
      <h3 className="h5 fw-bold text-dark mb-4">My Doctors</h3>

      <div className="d-flex flex-column gap-3">
        <div className="d-flex align-items-center gap-3 p-3 rounded-3 border bg-white hover-shadow transition-all">
          <div className="d-flex align-items-center justify-content-center rounded-circle bg-danger bg-opacity-10 fs-4" style={{ width: '50px', height: '50px' }}>
            ❤️
          </div>
          <div>
            <span className="d-block text-secondary small text-uppercase fw-bold">Cardiologist</span>
            <p className="mb-0 fw-bold text-dark">Dr. Caroline</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 p-3 rounded-3 border bg-primary bg-opacity-10 border-primary shadow-sm">
          <div className="d-flex align-items-center justify-content-center rounded-circle bg-white fs-4" style={{ width: '50px', height: '50px' }}>
            👶
          </div>
          <div>
            <span className="d-block text-primary small text-uppercase fw-bold">Pediatrician</span>
            <p className="mb-0 fw-bold text-dark">Dr. Malik</p>
          </div>
        </div>

        <div className="d-flex align-items-center gap-3 p-3 rounded-3 border bg-white hover-shadow transition-all">
          <div className="d-flex align-items-center justify-content-center rounded-circle bg-info bg-opacity-10 fs-4" style={{ width: '50px', height: '50px' }}>
            🧠
          </div>
          <div>
            <span className="d-block text-secondary small text-uppercase fw-bold">Neurologist</span>
            <p className="mb-0 fw-bold text-dark">Dr. Melanie</p>
          </div>
        </div>
      </div>
    </div>
  );
}
