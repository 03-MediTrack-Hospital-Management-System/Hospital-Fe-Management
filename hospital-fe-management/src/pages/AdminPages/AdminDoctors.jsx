import React, { useState, useEffect } from "react";
import "../../styles/admin.css";
import { FaEdit, FaTrash, FaPlus, FaExclamationTriangle } from "react-icons/fa";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";
import { useNavigate } from "react-router-dom";

export default function AdminDoctors() {
  const navigate = useNavigate();
  const initialDoctors = [
    { id: 1, name: "Dr. Sarah Wilson", specialization: "Cardiology", patients: 120, status: "Active" },
    { id: 2, name: "Dr. James Carter", specialization: "Neurology", patients: 80, status: "On Leave" },
  ];

  const [doctors, setDoctors] = useState(initialDoctors);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [docToDelete, setDocToDelete] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hospital_doctors");
      const parsed = saved ? JSON.parse(saved) : [];
      const savedDoctors = Array.isArray(parsed) ? parsed : [];
      setDoctors([...initialDoctors, ...savedDoctors]);
    } catch (error) {
      console.error("Error loading doctors:", error);
      setDoctors(initialDoctors);
    }
  }, []);

  const handleEdit = (doctor) => {
    setSelectedDoctor({ ...doctor });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedDoctorsList = doctors.map(d => d.id === selectedDoctor.id ? selectedDoctor : d);
    setDoctors(updatedDoctorsList);

    // Update localStorage for non-initial doctors
    const savedDoctors = JSON.parse(localStorage.getItem("hospital_doctors") || "[]");
    const updatedSavedDoctors = savedDoctors.map(d => d.id === selectedDoctor.id ? selectedDoctor : d);
    localStorage.setItem("hospital_doctors", JSON.stringify(updatedSavedDoctors));

    setIsEditModalOpen(false);
  };

  const handleDeleteRequest = (doc) => {
    setDocToDelete(doc);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (!docToDelete) return;

    const id = docToDelete.id;
    // Check if it's in initialDoctors or localStorage
    const isInitial = initialDoctors.some(d => d.id === id);

    if (isInitial) {
      setDoctors(prev => prev.filter(d => d.id !== id));
    } else {
      try {
        const saved = localStorage.getItem("hospital_doctors");
        const parsed = saved ? JSON.parse(saved) : [];
        const savedDoctors = Array.isArray(parsed) ? parsed : [];
        const updatedDoctors = savedDoctors.filter(d => d.id !== id);
        localStorage.setItem("hospital_doctors", JSON.stringify(updatedDoctors));
        setDoctors([...initialDoctors, ...updatedDoctors]);
      } catch (error) {
        console.error("Error during deletion persistence:", error);
      }
    }

    setIsDeleteModalOpen(false);
    setDocToDelete(null);
    setSuccessMessage("Doctor record deleted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-0 fw-bold">Manage Doctors</h4>
          <small className="text-muted">View and manage doctors</small>
        </div>
        <button className="btn btn-primary d-flex align-items-center gap-2" onClick={() => navigate("/admin/users/add")}>
          <FaPlus /> Add Doctor
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
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
                    <span className={`status-pill status-pill-${doc.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {doc.status}
                    </span>
                  </td>

                  <td>
                    <div className="action-btn-group">
                      <button className="action-btn action-btn-edit" onClick={() => handleEdit(doc)} title="Edit Doctor">
                        <FaEdit />
                      </button>
                      <button className="action-btn action-btn-delete" onClick={() => handleDeleteRequest(doc)} title="Delete Doctor">
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
      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal d-block show" style={{ background: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4 shadow">
              <div className="modal-header border-bottom-0 pt-4 px-4">
                <h5 className="modal-title fw-bold">Edit Doctor Information</h5>
                <button type="button" className="btn-close" onClick={() => setIsEditModalOpen(false)}></button>
              </div>
              <form onSubmit={handleSaveEdit}>
                <div className="modal-body p-4">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-3 py-2"
                      value={selectedDoctor.name}
                      onChange={(e) => setSelectedDoctor({ ...selectedDoctor, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Specialization</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-3 py-2"
                      value={selectedDoctor.specialization}
                      onChange={(e) => setSelectedDoctor({ ...selectedDoctor, specialization: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-select bg-light border-0 px-3 py-2"
                      value={selectedDoctor.status}
                      onChange={(e) => setSelectedDoctor({ ...selectedDoctor, status: e.target.value })}
                    >
                      <option value="Active">Active</option>
                      <option value="On Leave">On Leave</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer border-top-0 pb-4 px-4">
                  <button type="button" className="btn btn-light rounded-3 px-4" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                  <button type="submit" className="btn btn-primary rounded-3 px-4">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="modal d-block show" style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1060 }}>
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '400px' }}>
            <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
              <div className="modal-body p-4 text-center">
                <div className="mb-4 d-flex justify-content-center">
                  <div className="rounded-circle bg-danger-light d-flex align-items-center justify-content-center animation-pulse" style={{ width: '70px', height: '70px', background: '#fee2e2' }}>
                    <FaExclamationTriangle className="text-danger" size={32} />
                  </div>
                </div>
                <h4 className="fw-bold text-dark mb-2">Confirm Deletion</h4>
                <p className="text-secondary mb-4">
                  Are you sure you want to delete <strong>{docToDelete?.name}</strong>? This action cannot be undone.
                </p>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-light w-100 rounded-3 fw-semibold py-2"
                    onClick={() => setIsDeleteModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger w-100 rounded-3 fw-semibold py-2 shadow-sm"
                    onClick={confirmDelete}
                  >
                    Delete Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Success Message Toast */}
      {successMessage && (
        <div className="success-toast">
          <div className="rounded-circle bg-white bg-opacity-20 d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
            <FaPlus style={{ fontSize: '14px', transform: 'rotate(45deg)' }} />
          </div>
          <span className="fw-semibold">{successMessage}</span>
        </div>
      )}
    </>
  );

}
