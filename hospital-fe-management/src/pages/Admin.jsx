import "../styles/admin.css";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminComponent/AdminSidebar";
import GlobalHeader from "../components/Common/GlobalHeader";
import { FaUserMd, FaUserInjured, FaUsers, FaChartLine, FaBoxOpen, FaExclamationTriangle } from "react-icons/fa";

export default function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const recentBills = [
    { id: 1, patient: "John Smith", amount: "$250", date: "2024-12-15", status: "paid" },
    { id: 2, patient: "Sarah Johnson", amount: "$180", date: "2024-12-16", status: "pending" },
    { id: 3, patient: "Michael Brown", amount: "$320", date: "2024-12-17", status: "paid" },
  ];

  const lowStockItems = [
    { id: 1, name: "Aspirin 75mg", category: "Cardiovascular", stock: 40, min: 100 },
    { id: 2, name: "Insulin Glargine", category: "Diabetes", stock: 20, min: 50 },
  ];

  return (
    <div className="admin-container d-flex flex-column min-vh-100 overflow-hidden global-dashboard-bg">
      <GlobalHeader
        user={{ name: "Admin User", role: "Administrator" }}
        onLogout={handleLogout}
      />
      <div className="d-flex flex-grow-1 overflow-hidden">
        <AdminSidebar />
        <main className="admin-main flex-grow-1 p-4 overflow-y-auto" style={{ background: 'transparent' }}>
          <div className="admin-header-enhanced">
            <div className="admin-left">
              <div className="admin-avatar-lg">AD</div>
              <div className="admin-info">
                <h1>Admin Dashboard</h1>
                <p>VV Care Hospitals · System Control · Administrator</p>
              </div>
            </div>

            <div className="admin-actions">
              <button className="btn-primary" onClick={() => navigate("/admin/doctors")}>
                Manage Doctors
              </button>
              <button className="btn-outline" onClick={() => navigate("/admin/patients")}>
                Manage Patients
              </button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
                <FaUsers />
              </div>
              <div>
                <h4>342</h4>
                <span>Total Patients</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(11, 92, 99, 0.1)', color: '#0b5c63' }}>
                <FaUserMd />
              </div>
              <div>
                <h4>24</h4>
                <span>Active Doctors</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#fae8ff', color: '#d946ef' }}>
                <FaChartLine />
              </div>
              <div>
                <h4>$75,200</h4>
                <span>Monthly Revenue</span>
              </div>
            </div>

            <div className="stat-card warning">
              <div className="stat-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>
                <FaExclamationTriangle />
              </div>
              <div>
                <h4 style={{ color: '#ef4444' }}>5</h4>
                <span>Low Stock Alerts</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="card dashboard-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 className="section-title" style={{ margin: 0 }}>Recent Transactions</h3>
                <button className="btn-outline" style={{ padding: '5px 12px', fontSize: '12px' }}>View All</button>
              </div>

              <table className="data-table">
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
                      <td><strong>{bill.patient}</strong></td>
                      <td className="muted">{bill.date}</td>
                      <td>{bill.amount}</td>
                      <td>
                        <span className={`status ${bill.status}`}>
                          {bill.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card dashboard-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <div>
                  <h3 className="section-title" style={{ margin: 0 }}>Inventory Status</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>Real-time stock monitoring</p>
                </div>
                <button className="icon-btn" onClick={() => navigate("/admin/inventory")}>
                  <FaBoxOpen color="#64748b" />
                </button>
              </div>

              <div className="alert-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {lowStockItems.map((item) => (
                  <div key={item.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#334155' }}>{item.name}</span>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: '#ef4444' }}>{item.stock} left</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${(item.stock / item.min) * 100}%`, height: '100%', background: '#ef4444', borderRadius: '3px' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>Target: {item.min} units</span>
                      <span style={{ fontSize: '11px', color: '#ef4444', background: '#fef2f2', padding: '2px 6px', borderRadius: '4px' }}>Critical</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #f8fafc' }}>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: '#0b5c63' }} onClick={() => navigate("/admin/inventory")}>
                  Manage Stock
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
