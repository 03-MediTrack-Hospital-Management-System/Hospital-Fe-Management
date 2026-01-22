import "../styles/inventory.css";
import { useState, useEffect } from "react";
import { Search, AlertTriangle, Package, Filter, Plus, Camera, TestTube, Download, Edit, Trash2 } from "lucide-react";

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const [showLowStock, setShowLowStock] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  // Calculate statistics
  const totalStock = medicines.reduce((sum, med) => sum + med.stock, 0);
  const lowStockCount = medicines.filter(med => med.stock < med.min).length;
  const categories = ["All", ...new Set(medicines.map(med => med.category))];

  // Filter and sort medicines
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
    const newMedicine = {
      id: medicines.length + 1,
      name: "New Medicine",
      category: "General",
      stock: 0,
      min: 50,
      price: 0,
      expiry: "2024-12-31",
      supplier: "New Supplier"
    };
    setMedicines([...medicines, newMedicine]);
  };

  return (
    <div className="inventory-container">
      {/* HEADER WITH STATS */}
      <div className="inventory-header">
        <div>
          <h1>Inventory Management</h1>
          <p className="subtitle">Monitor medicine stock, testing & scan controls</p>
        </div>

        <div className="header-stats">
          <div className="stat-card">
            <Package className="stat-icon" size={20} />
            <div>
              <h3>{medicines.length}</h3>
              <p>Total Medicines</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon stock-icon">📦</div>
            <div>
              <h3>{totalStock}</h3>
              <p>Total Stock</p>
            </div>
          </div>
          <div className="stat-card low-stat">
            <AlertTriangle className="stat-icon" size={20} />
            <div>
              <h3 className="low-count">{lowStockCount}</h3>
              <p>Low Stock</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTROL PANEL */}
      <div className="control-panel">
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search medicine or supplier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="controls-right">
          <div className="filter-group">
            <Filter size={16} />
            <select 
              className="filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <select 
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="stock">Sort by Stock</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>

          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={showLowStock}
              onChange={(e) => setShowLowStock(e.target.checked)}
            />
            <span className="toggle-slider"></span>
            <span>Low Stock Only</span>
          </label>

          <div className="button-group">
            <button className="btn-outline" title="Download Report">
              <Download size={16} /> Export
            </button>
            <button className="btn-outline" title="Testing">
              <TestTube size={16} /> Testing
            </button>
            <button className="btn-primary" title="Scan Medicine">
              <Camera size={16} /> Scan
            </button>
            <button className="btn-success" onClick={handleAddMedicine}>
              <Plus size={16} /> Add Medicine
            </button>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Category</th>
              <th>Supplier</th>
              <th>Stock Level</th>
              <th>Min. Required</th>
              <th>Price ($)</th>
              <th>Expiry Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMedicines.map((med) => {
              const isLow = med.stock < med.min;
              const stockPercentage = Math.min((med.stock / med.min) * 100, 100);
              
              return (
                <tr key={med.id} className={isLow ? "low-stock-row" : ""}>
                  <td className="medicine-name">
                    <div className="name-wrapper">
                      <strong>{med.name}</strong>
                      {isLow && <AlertTriangle className="low-indicator" size={14} />}
                    </div>
                  </td>
                  <td>
                    <span className="category-tag">{med.category}</span>
                  </td>
                  <td>{med.supplier}</td>
                  <td>
                    <div className="stock-display">
                      <span className="stock-number">{med.stock}</span>
                      <div className="stock-bar">
                        <div 
                          className={`stock-fill ${isLow ? 'low' : 'normal'}`}
                          style={{ width: `${stockPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>{med.min}</td>
                  <td className="price">${med.price.toFixed(2)}</td>
                  <td>
                    <span className={`expiry-date ${new Date(med.expiry) < new Date(Date.now() + 90*24*60*60*1000) ? 'warning' : ''}`}>
                      {new Date(med.expiry).toLocaleDateString()}
                    </span>
                  </td>
                  <td>
                    {isLow ? (
                      <span className="status low">
                        <AlertTriangle size={12} /> Low Stock
                      </span>
                    ) : (
                      <span className="status ok">✅ Available</span>
                    )}
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="btn-action edit"
                        onClick={() => handleAddStock(med.id, 10)}
                        title="Add 10 units"
                      >
                        +10
                      </button>
                      <button 
                        className="btn-action edit"
                        onClick={() => handleAddStock(med.id, 50)}
                        title="Add 50 units"
                      >
                        +50
                      </button>
                      <button 
                        className="btn-action delete"
                        onClick={() => handleDeleteMedicine(med.id)}
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* SUMMARY & ALERTS */}
      <div className="summary-section">
        {lowStockCount > 0 ? (
          <div className="alert-banner warning">
            <AlertTriangle size={20} />
            <div>
              <strong>Action Required:</strong> {lowStockCount} medicine{lowStockCount !== 1 ? 's' : ''} 
              {lowStockCount === 1 ? ' is' : ' are'} below minimum stock level.
            </div>
            <button className="btn-alert">Order Now</button>
          </div>
        ) : (
          <div className="alert-banner success">
            ✅ All medicines are adequately stocked.
          </div>
        )}

        <div className="summary-cards">
          <div className="summary-card">
            <h4>Stock Value</h4>
            <h2>${medicines.reduce((sum, med) => sum + (med.stock * med.price), 0).toFixed(2)}</h2>
          </div>
          <div className="summary-card">
            <h4>Avg. Stock Level</h4>
            <h2>{Math.round(medicines.reduce((sum, med) => sum + (med.stock / med.min * 100), 0) / medicines.length)}%</h2>
          </div>
          <div className="summary-card">
            <h4>Expiring Soon (90 days)</h4>
            <h2 className="expiring-count">
              {medicines.filter(med => new Date(med.expiry) < new Date(Date.now() + 90*24*60*60*1000)).length}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}