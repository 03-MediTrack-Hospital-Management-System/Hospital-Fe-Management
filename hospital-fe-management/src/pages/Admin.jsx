import "../styles/admin.css";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const recentBills = [
    { id: 1, patient: "John Smith", amount: "$250", date: "2024-12-15", status: "paid" },
    { id: 2, patient: "Sarah Johnson", amount: "$180", date: "2024-12-16", status: "pending" },
    { id: 3, patient: "Michael Brown", amount: "$320", date: "2024-12-17", status: "paid" },
  ];

  const lowStockItems = [
    { id: 1, name: "Aspirin 75mg", category: "Cardiovascular", stock: 40, min: 100 },
  ];

  return (
    <div className="dashboard-container">
      <div className="admin-header-enhanced">
        <div className="admin-left">
          <div className="admin-avatar-lg">AD</div>
          <div className="admin-info">
            <h1>Admin Dashboard</h1>
            <p>VV Care Hospitals · System Control · Administrator</p>
          </div>
        </div>

        <div className="admin-actions">
          <button className="btn-primary" onClick={() => navigate("/admin/add-doctor")}>
            + Add Doctor
          </button>
          <button className="btn-outline" onClick={() => navigate("/admin/add-patient")}>
            + Add Patient
          </button>
          <button className="btn-ghost" onClick={() => navigate("/admin/settings")}>
            System Settings →
          </button>
        </div>
      </div>
      <div className="stats">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div>
            <h4>3</h4>
            <span>Total Patients</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🧑‍⚕️</div>
          <div>
            <h4>3</h4>
            <span>Active Doctors</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div>
            <h4>$750</h4>
            <span>Total Revenue</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-icon">📦</div>
          <div>
            <h4>1</h4>
            <span>Low Stock Alerts</span>
          </div>
        </div>
      </div>
      
      <div className="grid">
        <div className="card">
          <h3 className="section-title">Recent Bills</h3>

          {recentBills.map((bill) => (
            <div key={bill.id} className="bill-item">
              <div>
                <strong>{bill.patient}</strong>
                <div className="muted">{bill.date}</div>
              </div>

              <div className="bill-right">
                <span>{bill.amount}</span>
                <span className={`status ${bill.status}`}>
                  {bill.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Low Stock */}
        <div className="card warning">
          <h3 className="section-title">Low Stock Items</h3>

          {lowStockItems.map((item) => (
            <div key={item.id} className="stock-item">
              <div>
                <strong>{item.name}</strong>
                <div className="muted">{item.category}</div>
              </div>

              <div className="stock-alert">
                <b>{item.stock} units</b>
                <small>Min: {item.min}</small>
              </div>
            </div>
          ))}

          <button
            className="btn-primary footer-btn"
            onClick={() => navigate("/admin/inventory")}
          >
            📦 Manage Inventory
          </button>
        </div>

      </div>
    </div>
  );
}
