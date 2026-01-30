import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import GlobalHeader from "../../components/Common/GlobalHeader";
import {
  FaUserMd,
  FaUsers,
  FaChartLine,
  FaBoxOpen,
  FaExclamationTriangle
} from "react-icons/fa";

export default function Admin() {
  const navigate = useNavigate();

  const recentBills = [
    { id: 1, patient: "John Smith", amount: "$250", date: "2024-12-15", status: "paid" },
    { id: 2, patient: "Sarah Johnson", amount: "$180", date: "2024-12-16", status: "pending" },
    { id: 3, patient: "Michael Brown", amount: "$320", date: "2024-12-17", status: "paid" },
  ];

  const lowStockItems = [
    { id: 1, name: "Aspirin 75mg", stock: 40, min: 100 },
    { id: 2, name: "Insulin Glargine", stock: 20, min: 50 },
  ];

  return (
    <div className="container-fluid min-vh-100 p-0 bg-light">
      <GlobalHeader
        user={{ name: "Admin User", role: "Administrator" }}
        onLogout={() => navigate("/login")}
      />

      <div className="row g-0 min-vh-100">
       
        <div className="col-12 col-md-3 col-lg-2 border-end bg-white">
          <AdminSidebar />
        </div>

        <div className="col-12 col-md-9 col-lg-10 p-4 overflow-auto">
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">Admin Dashboard</h2>
              <p className="text-muted mb-0">VV Care Hospitals · System Control</p>
            </div>

            <div className="d-flex gap-2 mt-3 mt-md-0">
              <button className="btn btn-primary" onClick={() => navigate("/admin/doctors")}>
                Manage Doctors
              </button>
              <button className="btn btn-outline-secondary" onClick={() => navigate("/admin/patients")}>
                Manage Patients
              </button>
            </div>
          </div>

          <div className="row g-3 mb-4">
            <StatCard icon={<FaUsers />} label="Total Patients" value="342" />
            <StatCard icon={<FaUserMd />} label="Doctors" value="24" />
            <StatCard icon={<FaChartLine />} label="Revenue" value="$75,200" />
            <StatCard icon={<FaExclamationTriangle />} label="Low Stock" value="5" danger />
          </div>

          <div className="row g-4">
            <div className="col-12 col-lg-7">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="fw-bold">Recent Transactions</h5>
                    <button className="btn btn-sm btn-outline-secondary">View All</button>
                  </div>

                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBills.map(bill => (
                        <tr key={bill.id}>
                          <td>{bill.patient}</td>
                          <td>{bill.date}</td>
                          <td>{bill.amount}</td>
                          <td>
                            <span className={`badge ${bill.status === "paid" ? "bg-success" : "bg-warning"}`}>
                              {bill.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="fw-bold">Inventory Status</h5>
                    <FaBoxOpen />
                  </div>

                  {lowStockItems.map(item => (
                    <div key={item.id} className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>{item.name}</span>
                        <span className="text-danger">{item.stock} left</span>
                      </div>
                      <div className="progress mt-1">
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: `${(item.stock / item.min) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={() => navigate("/admin/inventory")}
                  >
                    Manage Inventory
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, danger }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="card shadow-sm">
        <div className="card-body d-flex align-items-center gap-3">
          <div className={`fs-4 ${danger ? "text-danger" : "text-primary"}`}>
            {icon}
          </div>
          <div>
            <h6 className="mb-0">{value}</h6>
            <small className="text-muted">{label}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
