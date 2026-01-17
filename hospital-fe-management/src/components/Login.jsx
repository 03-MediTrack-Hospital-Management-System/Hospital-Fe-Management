import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import hospitalImg from "../assets/hospital1.jpg";


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem(
        "users",
        JSON.stringify([
          { email: "patient@gmail.com", password: "1234", role: "PATIENT" },
          { email: "doctor@gmail.com", password: "1234", role: "DOCTOR" },
          { email: "admin@gmail.com", password: "1234", role: "ADMIN" },
        ])
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (!user) return alert("Invalid email or password");

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    if (user.role === "PATIENT") navigate("/patient-dashboard");
    if (user.role === "DOCTOR") navigate("/doctor-dashboard");
    if (user.role === "ADMIN") navigate("/admin-dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        fontFamily: "Inter, sans-serif",
      }}
    >
 {/* LEFT PANEL */}
<div
  style={{
    flex: "1 1 300px",
    background: "linear-gradient(135deg,#0b5c63,#5fc4c6)",
    color: "#fff",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
  }}
>
  {/* TOP CONTENT */}
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "1.5rem",
        fontWeight: "700",
      }}
    >
      <CiHeart /> VV Care
    </div>
    <small>Hospitals</small>

    <div style={{ marginTop: "40px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "5px" }}>
        Your Health
      </h2>
      <h2 style={{ fontSize: "2rem" }}>Our Priority</h2>
      <p style={{ marginTop: "10px", maxWidth: "280px" }}>
        Experience seamless healthcare management with advanced technology.
      </p>
    </div>
  </div>

  {/* IMAGE AREA (BOTTOM FILL) */}
  <div
    style={{
      marginTop: "30px",
      flex: 1,                       // 🔥 fills empty space
      backgroundImage: `url(${hospitalImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "12px",
    }}
  />
</div>


      {/* RIGHT PANEL */}
      <div
        style={{
          flex: "1 1 300px",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "380px" }}>
          <h2 style={{ marginBottom: "5px" }}>Welcome Back</h2>
          <p style={{ color: "#555", marginBottom: "25px" }}>
            Sign in to access your health portal
          </p>

          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <button style={buttonStyle}>Login</button>

            <p style={{ textAlign: "center", marginTop: "10px" }}>
              <a href="#" style={{ color: "#0b5c63" }}>
                Forgot Password?
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0 18px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#0b5c63",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "600",
  cursor: "pointer",
};

export default Login;
