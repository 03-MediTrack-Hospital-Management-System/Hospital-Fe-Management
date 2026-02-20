import React, { useState } from "react";
import toast from "react-hot-toast";
import { authenticatedFetch } from "../../utils/api";

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "Male",
    dob: "",
    age: "",
    reason: "",
    password: "Password@123" // Default password for new patient accounts
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const loadingToast = toast.loading("Enrolling patient in database...");

    try {
      const payload = {
        fullName: formData.name,
        name: formData.name,
        username: formData.email,
        email: formData.email,
        password: formData.password,
        role: "ROLE_PATIENT",
        dob: formData.dob || "2000-01-01",
        gender: formData.gender,
        bloodGroup: "O+",
        height: "170",
        weight: "70",
        age: parseInt(formData.age) || 25,
        address: "Not Provided",
        phone: formData.mobile,
        phoneNumber: formData.mobile,
        mobile: formData.mobile,
        condition: formData.reason,
        reason: formData.reason
      };

      const response = await authenticatedFetch("http://localhost:8081/auth/admin/create-user", {
        method: "POST",
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to enroll patient");
      }

      toast.success("Patient Enrolled Successfully ✅", { id: loadingToast });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        gender: "Male",
        dob: "",
        age: "",
        reason: "",
        password: "Password@123"
      });
    } catch (error) {
      console.error("Enrollment error:", error);
      toast.error(error.message || "Failed to save to database", { id: loadingToast });
    } finally {
      setIsLoading(false);
    }
  };


  const containerStyle = {
    maxWidth: "500px",
    margin: "auto",
    padding: "25px",
    borderRadius: "14px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    fontFamily: "'Poppins', 'Inter', 'Segoe UI', sans-serif"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#0f766e",
    fontWeight: "600",
    fontSize: "22px"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    color: "#1f2937",
    outline: "none"
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "none",
    height: "80px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg, #0f766e, #2563eb)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "15px"
  };


  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Patient Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          style={inputStyle}
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          style={inputStyle}
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />

        <select
          style={inputStyle}
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          style={inputStyle}
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        <input
          style={inputStyle}
          name="age"
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <textarea
          style={textareaStyle}
          name="reason"
          placeholder="Reason for Visit"
          value={formData.reason}
          onChange={handleChange}
        />

        <button style={buttonStyle} type="submit">
          Enroll Patient
        </button>
      </form>
    </div>
  );
};

export default PatientRegister;