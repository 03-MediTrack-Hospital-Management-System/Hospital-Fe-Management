import "../styles/admin.css";
import { useState } from "react";
import { FaBoxOpen, FaExclamationTriangle, FaSearch, FaFilter, FaPlus, FaCamera, FaFlask, FaDownload, FaTrash, FaEdit } from "react-icons/fa";
import AdminSidebar from "../components/AdminComponent/AdminSidebar";

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const showLowStock = false;
  const sortBy = "name";

  const [medicines, setMedicines] = useState([
    { id: 1, name: "Aspirin 75mg", category: "Cardiology", stock: 40, min: 100, price: 12.5, expiry: "2024-12-31", supplier: "MediCorp" },
    { id: 2, name: "Paracetamol 500mg", category: "General", stock: 250, min: 100, price: 5.2, expiry: "2025-06-30", supplier: "PharmaPlus" },
    { id: 3, name: "Amoxicillin 250mg", category: "Antibiotic", stock: 60, min: 80, price: 18.75, expiry: "2024-10-15", supplier: "BioHealth" },
    { id: 4, name: "Insulin Glargine", category: "Diabetes", stock: 20, min: 50, price: 42.3, expiry: "2025-03-20", supplier: "DiabetoCare" },
    { id: 5, name: "Metformin 500mg", category: "Diabetes", stock: 120, min: 80, price: 8.9, expiry: "2025-08-10", supplier: "MediCorp" },
    { id: 6, name: "Atorvastatin 20mg", category: "Cardiology", stock: 85, min: 60, price: 15.4, expiry: "2025-05-15", supplier: "CardioPharm" },
    { id: 7, name: "Omeprazole 20mg", category: "Gastro", stock: 45, min: 50, price: 9.8, expiry: "2024-11-30", supplier: "PharmaPlus" },
    { id: 8, name: "Levothyroxine 50mcg", category: "Endocrine", stock: 70, min: 40, price: 11.2, expiry: "2025-09-25", supplier: "BioHealth" },
  ]);

  const totalStock = medicines.reduce((sum, med) => sum + med.stock, 0);
  const lowStockCount = medicines.filter(med => med.stock < med.min).length;
  const categories = ["All", ...new Set(medicines.map(med => med.category))];

  const filteredMedicines = medicines
    .filter(med => {
      const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase()) ||
        med.supplier.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === "All" || med.category === selectedCategory;
      const matchesLowStock = !showLowStock || med.stock < med.min;
      return matchesSearch && matchesCategory && matchesLowStock;
    })
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "stock") return a.stock - b.stock;
      if (sortBy === "category") return a.category.localeCompare(b.category);
      return 0;
    });

  const handleAddStock = (id, amount) => {
    setMedicines(meds =>
      meds.map(med =>
        med.id === id ? { ...med, stock: med.stock + amount } : med
      )
    );
  };

  const handleDeleteMedicine = (id) => {
    if (window.confirm("Are you sure you want to delete this medicine?")) {
      setMedicines(meds => meds.filter(med => med.id !== id));
    }
  };

  const handleAddMedicine = () => {
    alert("Add Medicine Modal would open here");
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-header-enhanced">
          <div className="admin-info">
            <h1>Inventory Management</h1>
            <p>Monitor medicine stock and alerts</p>
          </div>

          <div className="admin-actions">
            <button className="btn-primary" onClick={handleAddMedicine}>
              <FaPlus style={{ marginRight: '8px' }} /> Add Medicine
            </button>
          </div>
        </div>

        <div className="stats-grid" style={{ padding: 0, marginBottom: '20px' }}>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'rgba(11, 92, 99, 0.1)', color: '#0b5c63' }}>
              <FaBoxOpen size={20} />
            </div>
            <div>
              <h4>{medicines.length}</h4>
              <span>Total Medicines</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ background: '#dcfce7', color: '#16a34a' }}>
              <strong>Stock</strong>
            </div>
            <div>
              <h4>{totalStock}</h4>
              <span>Total Units</span>
            </div>
          </div>
          <div className="stat-card" style={lowStockCount > 0 ? { borderLeft: '4px solid #ef4444' } : {}}>
            <div className="stat-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>
              <FaExclamationTriangle size={20} />
            </div>
            <div>
              <h4 style={{ color: '#ef4444' }}>{lowStockCount}</h4>
              <span>Low Stock Alerts</span>
            </div>
          </div>
        </div>

        <div className="admin-toolbar">
          <div className="search-bar-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search medicine or supplier..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <FaFilter color="#64748b" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FaDownload /> Export
            </button>
          </div>
        </div>

        <div className="card dashboard-card">

          <table className="data-table">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Min Level</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredMedicines.map((med) => {
                const isLow = med.stock < med.min;
                return (
                  <tr key={med.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="admin-avatar-sm" style={{ width: '35px', height: '35px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                          <FaFlask size={14} />
                        </div>
                        <div>
                          <span style={{ fontWeight: '600', color: '#334155', display: 'block' }}>{med.name}</span>
                          <span style={{ fontSize: '12px', color: '#94a3b8' }}>{med.supplier}</span>
                        </div>
                      </div>
                    </td>
                    <td><span style={{ background: '#f8fafc', padding: '4px 10px', borderRadius: '6px', fontSize: '13px', color: '#475569', border: '1px solid #e2e8f0' }}>{med.category}</span></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontWeight: '600' }}>{med.stock}</span>
                        {isLow && <FaExclamationTriangle color="#ef4444" size={12} title="Low Stock" />}
                      </div>
                    </td>
                    <td>{med.min}</td>
                    <td>${med.price.toFixed(2)}</td>
                    <td>
                      <span className={`status ${isLow ? 'pending' : 'paid'}`} style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                        {isLow ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="icon-btn" onClick={() => handleAddStock(med.id, 10)} title="Add Stock"><FaPlus size={12} /></button>
                        <button className="icon-btn" onClick={() => handleDeleteMedicine(med.id)} title="Delete"><FaTrash color="#ef4444" size={12} /></button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {filteredMedicines.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
              <p>No medicines found.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
