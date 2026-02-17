import "../../styles/admin.css";
import { FaEye } from "react-icons/fa";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";

export default function AdminPatients() {
  const patients = [
    { id: 1, name: "John Smith", age: 45, condition: "Diabetes", status: "Stable" },
    { id: 2, name: "Emily White", age: 52, condition: "Heart Issue", status: "Critical" },
  ];

  return (
    <>
      <div className="mb-4">
        <h4 className="mb-0 fw-bold">Patient Records</h4>
        <small className="text-muted">View registered patients</small>
      </div>

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.condition}</td>
                  <td>
                    <span className={`badge ${p.status === "Critical" ? "bg-danger" : "bg-success"}`}>
                      {p.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary">
                      <FaEye /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

}
