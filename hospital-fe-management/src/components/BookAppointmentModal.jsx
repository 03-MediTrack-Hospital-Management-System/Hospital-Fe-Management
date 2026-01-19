import { useState } from "react";
import "../styles/modal.css";

export default function BookAppointmentModal({ onClose }) {
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing =
      JSON.parse(localStorage.getItem("appointments")) || [];

    localStorage.setItem(
      "appointments",
      JSON.stringify([...existing, formData])
    );

    alert("Appointment booked successfully ✅");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Book Appointment</h2>

        <form onSubmit={handleSubmit}>
          <label>Doctor</label>
          <select
            name="doctor"
            required
            onChange={handleChange}
          >
            <option value="">Select Doctor</option>
            <option>Dr. Emily Chen</option>
            <option>Dr. Michael Park</option>
            <option>Dr. Sarah Lee</option>
          </select>

          <label>Date</label>
          <input
            type="date"
            name="date"
            required
            onChange={handleChange}
          />

          <label>Time</label>
          <input
            type="time"
            name="time"
            required
            onChange={handleChange}
          />

          <label>Reason</label>
          <textarea
            name="reason"
            placeholder="Consultation reason"
            onChange={handleChange}
          />

          <div className="modal-actions">
            <button
              type="button"
              className="btn-outline"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="btn-primary">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
