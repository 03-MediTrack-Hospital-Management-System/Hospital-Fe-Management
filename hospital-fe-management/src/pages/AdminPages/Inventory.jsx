import { useState } from "react";
import {
  FaBoxOpen,
  FaSearch,
  FaPlus,
  FaTrash
} from "react-icons/fa";

import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";

export default function Inventory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [medicines, setMedicines] = useState([
    { id: 1, name: "Aspirin 75mg", category: "Cardiology", stock: 40, min: 100, price: 12.5, supplier: "MediCorp" },
    { id: 2, name: "Paracetamol 500mg", category: "General", stock: 250, min: 100, price: 5.2, supplier: "PharmaPlus" },
    { id: 3, name: "Amoxicillin", category: "Antibiotic", stock: 60, min: 80, price: 18.75, supplier: "BioHealth" },
    { id: 4, name: "Insulin", category: "Diabetes", stock: 20, min: 50, price: 42.3, supplier: "DiabetoCare" }
  ]);

  const categories = ["All", ...new Set(medicines.map(m => m.category))];

  const filtered = medicines.filter(m =>
    (category === "All" || m.category === category) &&
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteMedicine = id => {
    setMedicines(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">

      <header className="bg-white border-bottom px-4 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mb-0 fw-bold">Inventory Management</h4>
            <small className="text-muted">Manage medicines and stock</small>
          </div>
          <button className="btn btn-primary">
            <FaPlus className="me-2" /> Add Medicine
          </button>
        </div>
      </header>

      <div className="flex-grow-1 d-flex">
        <div className="d-none d-md-block col-md-3 col-lg-2 border-end bg-white">
          <AdminSidebar />
        </div>

        <div className="col p-4">

          <div className="card mb-3">
            <div className="card-body d-flex flex-wrap gap-3">
              <div className="input-group" style={{ maxWidth: 300 }}>
                <span className="input-group-text"><FaSearch /></span>
                <input
                  className="form-control"
                  placeholder="Search medicine"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>

              <select
                className="form-select"
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

          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
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
                          <span className={`badge ${low ? "bg-danger" : "bg-success"}`}>
                            {low ? "Low" : "In Stock"}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteMedicine(med.id)}
                          >
                            <FaTrash />
                          </button>
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
