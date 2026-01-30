import { FaCalendarCheck, FaFileMedical, FaUserMd } from "react-icons/fa";

export default function PatientOverview() {
  return (
    <div className="row g-4">
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card glass-effect border-0 p-4 h-100 position-relative overflow-hidden hover-up">
          <div className="position-absolute top-0 end-0 p-3 opacity-10">
            <FaCalendarCheck size={80} className="text-teal" />
          </div>
          <div className="d-flex align-items-center gap-3 position-relative z-1">
            <div className="p-3 bg-teal bg-opacity-10 rounded-4 text-teal shadow-sm floating-card">
              <FaCalendarCheck size={28} />
            </div>
            <div>
              <h2 className="display-5 fw-bold text-dark mb-0">6</h2>
              <p className="mb-0 text-secondary small text-uppercase fw-bold tracking-wide">Appointments</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card glass-effect border-0 p-4 h-100 position-relative overflow-hidden hover-up">
          <div className="position-absolute top-0 end-0 p-3 opacity-10">
            <FaFileMedical size={80} className="text-success" />
          </div>
          <div className="d-flex align-items-center gap-3 position-relative z-1">
            <div className="p-3 bg-success bg-opacity-10 rounded-4 text-success shadow-sm floating-card" style={{ animationDelay: '0.5s' }}>
              <FaFileMedical size={28} />
            </div>
            <div>
              <h2 className="display-5 fw-bold text-dark mb-0">12</h2>
              <p className="mb-0 text-secondary small text-uppercase fw-bold tracking-wide">Medical Reports</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card glass-effect border-0 p-4 h-100 position-relative overflow-hidden hover-up">
          <div className="position-absolute top-0 end-0 p-3 opacity-10">
            <FaUserMd size={80} className="text-danger" />
          </div>
          <div className="d-flex align-items-center gap-3 position-relative z-1">
            <div className="p-3 bg-danger bg-opacity-10 rounded-4 text-danger shadow-sm floating-card" style={{ animationDelay: '1s' }}>
              <FaUserMd size={28} />
            </div>
            <div>
              <h2 className="display-5 fw-bold text-dark mb-0">3</h2>
              <p className="mb-0 text-secondary small text-uppercase fw-bold tracking-wide">Doctors Visited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

