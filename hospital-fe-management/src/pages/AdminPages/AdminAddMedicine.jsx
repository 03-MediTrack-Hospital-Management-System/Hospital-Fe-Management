import "../../styles/admin.css";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import GlobalHeader from "../../components/Common/GlobalHeader";
import Footer from "../../components/Common/Footer";
import { useState } from "react";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdminAddMedicine() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        category: "General",
        stock: "",
        minStock: "",
        price: "",
        supplier: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Load current inventory
        const saved = localStorage.getItem("hospital_inventory");
        let medicines = [];
        if (saved) {
            medicines = JSON.parse(saved);
        } else {
            // Default list fallback
            medicines = [
                { id: 1, name: "Aspirin 75mg", category: "Cardiology", stock: 40, min: 100, price: 12.5, supplier: "MediCorp" },
                { id: 2, name: "Paracetamol 500mg", category: "General", stock: 250, min: 100, price: 5.2, supplier: "PharmaPlus" },
                { id: 3, name: "Amoxicillin", category: "Antibiotic", stock: 60, min: 80, price: 18.75, supplier: "BioHealth" },
                { id: 4, name: "Insulin", category: "Diabetes", stock: 20, min: 50, price: 42.3, supplier: "DiabetoCare" }
            ];
        }

        const newMedicine = {
            id: Date.now(),
            name: formData.name,
            category: formData.category,
            supplier: formData.supplier,
            stock: parseInt(formData.stock),
            min: parseInt(formData.minStock),
            price: parseFloat(formData.price)
        };

        const updatedInventory = [...medicines, newMedicine];
        localStorage.setItem("hospital_inventory", JSON.stringify(updatedInventory));

        navigate("/admin/inventory");
    };


    return (
        <>
            <div className="mb-4">
                <button
                    onClick={() => navigate("/admin/inventory")}
                    className="btn btn-sm btn-outline-secondary mb-3 d-flex align-items-center gap-2"
                >
                    <FaArrowLeft /> Back to Inventory
                </button>
                <h2 className="fw-bold mb-1">Add New Medicine</h2>
                <p className="text-muted mb-0">Register a new medicine in the hospital inventory</p>
            </div>

            <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                <div className="card-body p-4 p-md-5">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-4 mb-5">
                            <div className="col-12">
                                <div className="row g-3 text-start">
                                    <div className="col-12">
                                        <label className="form-label fw-semibold text-dark">Medicine Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-control form-control-lg bg-light border-0"
                                            required
                                            placeholder="e.g. Amoxicillin 500mg"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-dark">Category</label>
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="form-select form-control-lg bg-light border-0"
                                        >
                                            <option>General</option>
                                            <option>Cardiology</option>
                                            <option>Antibiotic</option>
                                            <option>Diabetes</option>
                                            <option>Neurology</option>
                                            <option>Pediatrics</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-dark">Supplier</label>
                                        <input
                                            type="text"
                                            name="supplier"
                                            value={formData.supplier}
                                            onChange={handleChange}
                                            className="form-control form-control-lg bg-light border-0"
                                            placeholder="e.g. PharmaPlus"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h4 className="fw-bold mb-4 pb-2 border-bottom">Stock & Pricing</h4>
                        <div className="row g-4 mb-5">
                            <div className="col-md-4">
                                <label className="form-label fw-semibold text-dark">Initial Stock</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    className="form-control form-control-lg bg-light border-0"
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-semibold text-dark">Min. Stock Level</label>
                                <input
                                    type="number"
                                    name="minStock"
                                    value={formData.minStock}
                                    onChange={handleChange}
                                    className="form-control form-control-lg bg-light border-0"
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-semibold text-dark">Price (per unit)</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-light border-0">$</span>
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="form-control form-control-lg bg-light border-0"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end gap-3 pt-4 border-top">
                            <button
                                type="button"
                                onClick={() => navigate("/admin/inventory")}
                                className="btn btn-lg btn-outline-secondary px-5 rounded-3"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary px-5 rounded-3 shadow-sm d-flex align-items-center gap-2"
                            >
                                <FaSave /> Save Medicine
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
