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
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users || users.length === 0) {
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
      (u) =>
        u.email === formData.email.trim() &&
        u.password === formData.password.trim()
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    // Save logged in user
    localStorage.setItem("currentUser", JSON.stringify(user));

    if (user.role === "PATIENT") navigate("/patient");
    if (user.role === "DOCTOR") navigate("/doctor");
    if (user.role === "ADMIN") navigate("/admin");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexWrap: "wrap" }}>
      {/* LEFT */}
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
        <div>
          <h2><CiHeart /> VV Care</h2>
          <p>Your Health, Our Priority</p>
        </div>

        <div
          style={{
            flex: 1,
            backgroundImage: `url(${hospitalImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            marginTop: "30px",
          }}
        />
      </div>

      {/* RIGHT */}
      <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit} style={{ width: "320px" }}>
          <h2>Welcome Back</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#0b5c63",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
};

export default Login;
