import PatientLayout from "../../components/PatientComponent/PatientLayout";
import ReportsList from "../../components/PatientComponent/ReportsList";
import "../../styles/reception.css";

export default function PatientReports() {
  return (
    <PatientLayout>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '36px', color: '#0b5c63', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.5px' }}>
          Medical Reports
        </h1>
        <p style={{ margin: 0, fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
          Access and download your medical history documents.
        </p>
      </div>
      <ReportsList />
    </PatientLayout>
  );
}
