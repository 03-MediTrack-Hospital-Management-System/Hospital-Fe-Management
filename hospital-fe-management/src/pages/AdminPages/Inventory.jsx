import { useState } from "react";
import {
  FaBoxOpen,
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
  FaSave,
  FaTimes
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";

function EditMedicineModal({ medicine, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...medicine });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '24px', overflow: 'hidden' }}>
          <div className="modal-header border-0 bg-primary text-white p-4">
            <h5 className="modal-title fw-bold">Edit Medicine</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onCancel}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="mb-3">
                <label className="form-label fw-bold small text-uppercase">Medicine Name</label>
                <input
                  type="text"
                  className="form-control border-0 bg-light p-3"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small text-uppercase">Stock</label>
                  <input
                    type="number"
                    className="form-control border-0 bg-light p-3"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small text-uppercase">Min Stock</label>
                  <input
                    type="number"
                    className="form-control border-0 bg-light p-3"
                    value={formData.min}
                    onChange={(e) => setFormData({ ...formData, min: parseInt(e.target.value) })}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small text-uppercase">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control border-0 bg-light p-3"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold small text-uppercase">Category</label>
                  <input
                    type="text"
                    className="form-control border-0 bg-light p-3"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold small text-uppercase">Supplier</label>
                <input
                  type="text"
                  className="form-control border-0 bg-light p-3"
                  value={formData.supplier}
                  onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="modal-footer border-0 p-4 pt-0">
              <button type="button" className="btn btn-light px-4 py-2 rounded-3 fw-bold" onClick={onCancel}>
                <FaTimes className="me-2" /> Cancel
              </button>
              <button type="submit" className="btn btn-primary px-4 py-2 rounded-3 fw-bold">
                <FaSave className="me-2" /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Inventory() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [successMessage, setSuccessMessage] = useState("");
  const [editingMedicine, setEditingMedicine] = useState(null);

  const [medicines, setMedicines] = useState(() => {
    const saved = localStorage.getItem("hospital_inventory");
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, name: "Aspirin 75mg", category: "Cardiology", stock: 40, min: 100, price: 12.5, supplier: "MediCorp" },
      { id: 2, name: "Paracetamol 500mg", category: "General", stock: 250, min: 100, price: 5.2, supplier: "PharmaPlus" },
      { id: 3, name: "Amoxicillin", category: "Antibiotic", stock: 60, min: 80, price: 18.75, supplier: "BioHealth" },
      { id: 4, name: "Insulin", category: "Diabetes", stock: 20, min: 50, price: 42.3, supplier: "DiabetoCare" }
    ];
  });

  const categories = ["All", ...new Set(medicines.map(m => m.category))];

  const filtered = medicines.filter(m =>
    (category === "All" || m.category === category) &&
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteMedicine = id => {
    const updated = medicines.filter(m => m.id !== id);
    setMedicines(updated);
    localStorage.setItem("hospital_inventory", JSON.stringify(updated));
    setSuccessMessage("Medicine record removed successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleUpdateMedicine = (updatedMed) => {
    const updated = medicines.map(m => m.id === updatedMed.id ? updatedMed : m);
    setMedicines(updated);
    localStorage.setItem("hospital_inventory", JSON.stringify(updated));
    setEditingMedicine(null);
    setSuccessMessage("Medicine updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };


  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-0 fw-bold">Inventory Management</h4>
          <small className="text-muted">Manage medicines and stock</small>
        </div>
        <button className="btn btn-primary" onClick={() => navigate("/admin/inventory/add")}>
          <FaPlus className="me-2" /> Add Medicine
        </button>
      </div>

      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body d-flex flex-wrap gap-3">
          <div className="input-group" style={{ maxWidth: 300 }}>
            <span className="input-group-text bg-light border-0"><FaSearch /></span>
            <input
              className="form-control bg-light border-0"
              placeholder="Search medicine"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <select
            className="form-select bg-light border-0"
            style={{ maxWidth: 200 }}
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Medicine</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Min</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(med => {
                const low = med.stock < med.min;
                return (
                  <tr key={med.id}>
                    <td>
                      <strong>{med.name}</strong>
                      <div className="text-muted small">{med.supplier}</div>
                    </td>
                    <td>{med.category}</td>
                    <td>{med.stock}</td>
                    <td>{med.min}</td>
                    <td>${med.price}</td>
                    <td>
                      <span className={`status-pill ${low ? "status-pill-critical" : "status-pill-active"}`} style={{ minWidth: '95px' }}>
                        {low ? "Low Stock" : "In Stock"}
                      </span>
                    </td>
                    <td>
                      <div className="action-btn-group">
                        <button
                          className="action-btn action-btn-edit"
                          onClick={() => setEditingMedicine(med)}
                          title="Edit Medicine"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="action-btn action-btn-delete"
                          onClick={() => deleteMedicine(med.id)}
                          title="Delete Medicine"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="text-center text-muted p-4">
              No medicines found.
            </div>
          )}
        </div>
      </div>

      {successMessage && (
        <div className="success-toast">
          {successMessage}
        </div>
      )}

      {editingMedicine && (
        <EditMedicineModal
          medicine={editingMedicine}
          onSave={handleUpdateMedicine}
          onCancel={() => setEditingMedicine(null)}
        />
      )}
    </>
  );

}
