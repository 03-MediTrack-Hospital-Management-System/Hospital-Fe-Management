import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaUserMd, 
  FaStethoscope, 
  FaClock, 
  FaHome,
  FaTimes 
} from "react-icons/fa";

export default function BookAppointment() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    doctor: "",
    department: "",
    date: "",
    time: "",
    reason: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("Appointment booked successfully!");
      setForm({ doctor: "", department: "", date: "", time: "", reason: "" });
      setIsSubmitting(false);
      navigate("/patient"); 
    }, 1500);
  };


  const goToDashboard = () => {
    navigate("/patient");
  };


  const goBack = () => {
    navigate(-1);
  };


  const handleCancel = () => {
    setShowConfirm(true);
  };

  
  const confirmCancel = () => {
    setShowConfirm(false);
    navigate("/patient");
  };

  
  const closeConfirm = () => {
    setShowConfirm(false);
  };

  return (
    <div className="book-appointment-container">

      <div className="navigation-buttons">
        <button className="back-button" onClick={goToDashboard}>
          <FaHome /> Dashboard
        </button>
        <button className="back-button secondary" onClick={goBack}>
          <FaArrowLeft /> Back
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <button className="modal-close" onClick={closeConfirm}>
              <FaTimes />
            </button>
            <h3>Cancel Booking?</h3>
            <p>Are you sure you want to cancel this appointment booking?</p>
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={closeConfirm}>
                Continue Booking
              </button>
              <button className="modal-btn confirm" onClick={confirmCancel}>
                Yes, Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="appointment-card">
        <div className="appointment-header">
          <div className="header-icon">
            <FaCalendarAlt />
          </div>
          <div>
            <h2>Book Appointment</h2>
            <p>Schedule your visit with our healthcare professionals</p>
            <div className="appointment-subtitle">
              <span className="badge">Patient Portal</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="appointment-form">
          <div className="form-group">
            <label htmlFor="doctor">
              <FaUserMd className="input-icon" />
              Doctor Name
            </label>
            <input
              id="doctor"
              className="form-input"
              placeholder="Dr. John Smith"
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">
              <FaStethoscope className="input-icon" />
              Department
            </label>
            <select
              id="department"
              className="form-select"
              name="department"
              value={form.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="dermatology">Dermatology</option>
              <option value="gastroenterology">Gastroenterology</option>
              <option value="oncology">Oncology</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">
                <FaCalendarAlt className="input-icon" />
                Date
              </label>
              <input
                id="date"
                type="date"
                className="form-input"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">
                <FaClock className="input-icon" />
                Time
              </label>
              <input
                id="time"
                type="time"
                className="form-input"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Visit (Optional)</label>
            <textarea
              id="reason"
              className="form-textarea"
              placeholder="Briefly describe your symptoms or reason for appointment"
              name="reason"
              value={form.reason}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button 
              type="button" 
              className="secondary-btn cancel-btn" 
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={`primary-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Booking...
                </>
              ) : (
                'Book Appointment'
              )}
            </button>
          </div>
        </form>

        {/* Additional Information */}
        <div className="appointment-info">
          <h4>Things to Remember:</h4>
          <ul>
            <li>Arrive 15 minutes before your scheduled time</li>
            <li>Bring your health insurance card and ID</li>
            <li>Carry any previous medical records if applicable</li>
            <li>Fasting may be required for certain tests</li>
          </ul>
          
          <div className="dashboard-link">
            <FaHome />
            <span>Return to your <button onClick={goToDashboard}>Patient Dashboard</button> anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}