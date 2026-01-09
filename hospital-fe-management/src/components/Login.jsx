import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!existingUser) {
      alert("Invalid email or password");
      return;
    }

  
    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));

    
    switch (existingUser.role) {
      case "PATIENT":
        navigate("/patient-dashboard");
        break;
      case "DOCTOR":
        navigate("/doctor-dashboard");
        break;
      case "ADMIN":
        navigate("/admin-dashboard");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div className="Login-container">
      <div className="login-card-left">
        <div>
          <div className="login-hero-icon">
            <CiHeart />
            <h2 className="login-card-left-head">VV Care</h2>
          </div>
          <h6>Hospitals</h6>
        </div>

        <div className="login-left-card-hero">
          <h3>Your Health</h3>
          <h3>Our Priority</h3>
          <p>
            Experience seamless healthcare management with advanced technology.
          </p>
        </div>
      </div>

      <div className="login-card-right">
        <div className="login-card-left-head">
          <h2>Welcome Back</h2>
          <p>Sign in to access your health portal</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

          <p>
            <a href="#">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
