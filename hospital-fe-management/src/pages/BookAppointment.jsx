import React, { useState } from "react";

export default function BookAppointment() {
  const [form, setForm] = useState({
    doctor: "",
    department: "",
    date: "",
    time: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully (Dummy)");
    setForm({ doctor: "", department: "", date: "", time: "" });
  };

  return (
    <div className="container mt-4">
      <h4>Book Appointment</h4>

      <form onSubmit={handleSubmit} className="mt-3 col-md-6">
        <input
          className="form-control mb-2"
          placeholder="Doctor Name"
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Department"
          name="department"
          value={form.department}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className="form-control mb-2"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          className="form-control mb-3"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary">Book Appointment</button>
      </form>
    </div>
  );
}
