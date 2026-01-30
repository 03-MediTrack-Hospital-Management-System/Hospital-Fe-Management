import "../../styles/admin.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";

export default function AdminDoctors() {
  const doctors = [
    { id: 1, name: "Dr. Sarah Wilson", specialization: "Cardiology", patients: 120, status: "Active" },
    { id: 2, name: "Dr. James Carter", specialization: "Neurology", patients: 80, status: "On Leave" },
  ];

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">

      <header className="bg-white border-bottom px-4 py-3">
        <div>
          <h4 className="mb-0 fw-bold">Manage Doctors</h4>
          <small className="text-muted">View and manage doctors</small>
        </div>
      </header>

      <div className="flex-grow-1 d-flex">

        <div className="d-none d-md-block col-md-3 col-lg-2 border-end bg-white">
          <AdminSidebar />
        </div>

        <div className="col p-4">
          <div className="card">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Specialization</th>
                  <th>Patients</th>
                  <th>Status</th>
                  <th style={{ width: "120px" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {doctors.map((doc) => (
                  <tr key={doc.id}>
                    <td>{doc.name}</td>
                    <td>{doc.specialization}</td>
                    <td>{doc.patients}</td>
                    <td>
                      <span
                        className={`badge ${
                          doc.status === "Active" ? "bg-success" : "bg-warning"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">
                          <FaEdit />
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
