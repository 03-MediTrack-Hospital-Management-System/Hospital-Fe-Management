import PatientLayout from "../../components/PatientComponent/PatientLayout";
import ReportsList from "../../components/PatientComponent/ReportsList";
import "../../styles/reception.css";

export default function PatientReports() {
  return (
    <PatientLayout>
      <div className="container-fluid p-4 p-lg-5">
        <div className="mb-5 pb-3 border-bottom border-light">
          <h1 className="display-4 fw-extrabold mb-2" style={{ color: '#0b5c63', letterSpacing: '-1px' }}>
            Medical Reports
          </h1>
          <p className="lead text-secondary opacity-75">
            Access and download your specialised medical history documents and clinical findings.
          </p>
        </div>
        <ReportsList />
      </div>
    </PatientLayout>
  );
}
