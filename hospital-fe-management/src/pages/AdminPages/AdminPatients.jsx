import React, { useState, useEffect } from "react";
import "../../styles/admin.css";
import { FaEdit, FaTrash, FaPlus, FaExclamationTriangle } from "react-icons/fa";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";
import { useNavigate } from "react-router-dom";
import { fetchAllPatients } from "../../utils/api";
import { toast } from "react-hot-toast";

export default function AdminPatients() {
  const navigate = useNavigate();
  const initialPatients = [
    { id: 1, name: "John Smith", age: 45, condition: "Diabetes", status: "Stable" },
    { id: 2, name: "Emily White", age: 52, condition: "Heart Issue", status: "Critical" },
  ];

  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [patientToDelete, setPatientToDelete] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const loadPatients = async () => {
    setIsLoading(true);
    let apiData = [];
    let fetchError = false;

    try {
      apiData = await fetchAllPatients();
    } catch (error) {
      console.error("Error loading patients from API:", error);
      fetchError = true;
    }

    try {
      const localData = JSON.parse(localStorage.getItem("hospital_patients") || "[]");

      // Map backend fields to frontend fields
      const mappedApiData = apiData.map(p => ({
        id: p.id || p._id || Math.random().toString(36).substr(2, 9),
        name: p.fullName || p.name,
        age: p.age || "N/A",
        condition: p.condition || p.reason || "General",
        status: p.status || "Stable"
      }));

      // Combine: API first, then Local, then Demo (as final fallback)
      const combined = [...mappedApiData, ...localData, ...initialPatients];
      const unique = combined.reduce((acc, current) => {
        const isDuplicate = acc.find(item =>
          (item.id && current.id && String(item.id) === String(current.id)) ||
          (item.name.toLowerCase() === current.name.toLowerCase())
        );
        if (!isDuplicate) return acc.concat([current]);
        return acc;
      }, []);

      setPatients(unique);

      if (fetchError && localData.length === 0) {
        toast.error("Connecting to server... showing local patient data.", { id: "p-fetch-warn" });
      }
    } catch (error) {
      console.error("Critical UI error in loadPatients:", error);
      setPatients(initialPatients);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleEdit = (patient) => {
    setSelectedPatient({ ...patient });
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedPatientsList = patients.map(p => p.id === selectedPatient.id ? selectedPatient : p);
    setPatients(updatedPatientsList);

    // Update localStorage for non-initial patients
    const savedPatients = JSON.parse(localStorage.getItem("hospital_patients") || "[]");
    const updatedSavedPatients = savedPatients.map(p => p.id === selectedPatient.id ? selectedPatient : p);
    localStorage.setItem("hospital_patients", JSON.stringify(updatedSavedPatients));

    setIsEditModalOpen(false);
  };

  const handleDeleteRequest = (patient) => {
    setPatientToDelete(patient);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (!patientToDelete) return;

    const id = patientToDelete.id;
    const isInitial = initialPatients.some(p => p.id === id);

    if (isInitial) {
      setPatients(prev => prev.filter(p => p.id !== id));
    } else {
      try {
        const saved = localStorage.getItem("hospital_patients");
        const parsed = saved ? JSON.parse(saved) : [];
        const savedPatients = Array.isArray(parsed) ? parsed : [];
        const updatedPatients = savedPatients.filter(p => p.id !== id);
        localStorage.setItem("hospital_patients", JSON.stringify(updatedPatients));
        setPatients([...initialPatients, ...updatedPatients]);
      } catch (error) {
        console.error("Error during patient deletion persistence:", error);
      }
    }

    setIsDeleteModalOpen(false);
    setPatientToDelete(null);
    setSuccessMessage("Patient record deleted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-0 fw-bold">Patient Records</h4>
          <small className="text-muted">View registered patients</small>
        </div>
        <button className="btn btn-primary d-flex align-items-center gap-2" onClick={() => navigate("/admin/users/add?role=Patient")}>
          <FaPlus /> Add Patient
        </button>
      </div>

      <div className="card shadow-sm border-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Condition</th>
                <th>Status</th>
                <th style={{ width: "120px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2 text-muted">Fetching patient records...</p>
                  </td>
                </tr>
              ) : patients.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-5 text-muted">
                    No patients found in the database.
                  </td>
                </tr>
              ) : (
                patients.map(p => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.condition}</td>
                    <td>
                      <span className={`status-pill status-pill-${p.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {p.status}
                      </span>
                    </td>
                    <td>
                      <div className="action-btn-group">
                        <button className="action-btn action-btn-edit" onClick={() => handleEdit(p)} title="Edit Patient">
                          <FaEdit />
                        </button>
                        <button className="action-btn action-btn-delete" onClick={() => handleDeleteRequest(p)} title="Delete Patient">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
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
                <h5 className="modal-title fw-bold">Edit Patient Information</h5>
                <button type="button" className="btn-close" onClick={() => setIsEditModalOpen(false)}></button>
              </div>
              <form onSubmit={handleSaveEdit}>
                <div className="modal-body p-4">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Patient Name</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-3 py-2"
                      value={selectedPatient.name}
                      onChange={(e) => setSelectedPatient({ ...selectedPatient, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Age</label>
                    <input
                      type="number"
                      className="form-control bg-light border-0 px-3 py-2"
                      value={selectedPatient.age}
                      onChange={(e) => setSelectedPatient({ ...selectedPatient, age: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Medical Condition</label>
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-3 py-2"
                      value={selectedPatient.condition}
                      onChange={(e) => setSelectedPatient({ ...selectedPatient, condition: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-select bg-light border-0 px-3 py-2"
                      value={selectedPatient.status}
                      onChange={(e) => setSelectedPatient({ ...selectedPatient, status: e.target.value })}
                    >
                      <option value="Stable">Stable</option>
                      <option value="Critical">Critical</option>
                      <option value="Recovered">Recovered</option>
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
                  Are you sure you want to delete the record for <strong>{patientToDelete?.name}</strong>? This action cannot be undone.
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
