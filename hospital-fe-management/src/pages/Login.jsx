import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import hospitalImg from "../assets/hospital1.jpg";
import "../styles/Login.css";


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users || users.length === 0) {
      localStorage.setItem(
        "users",
        JSON.stringify([
          { email: "patient@gmail.com", password: "1234", role: "PATIENT" },
          { email: "doctor@gmail.com", password: "1234", role: "DOCTOR" },
          { email: "admin@gmail.com", password: "1234", role: "ADMIN" },
          { email: "reception@gmail.com", password: "1234", role: "RECEPTION" }
        ])
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLoginError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) =>
          u.email === formData.email.trim() &&
          u.password === formData.password.trim()
      );

      if (!user) {
        setLoginError(true);
        setIsLoading(false);
        return;
      }

    
      localStorage.setItem("currentUser", JSON.stringify(user));

      
      document.querySelector('.login-success').classList.add('show');
      
      setTimeout(() => {
        if (user.role === "PATIENT") navigate("/patient");
        if (user.role === "DOCTOR") navigate("/doctor");
        if (user.role === "ADMIN") navigate("/admin");
        if (user.role === "RECEPTION") navigate("/reception");
      }, 1500);
    }, 800);
  };

  return (
    <div className="login-page-wrapper">
      
      <div className="login-success">
        <div className="success-icon">✓</div>
        <h3>Welcome Back!</h3>
        <p>Redirecting to your dashboard...</p>
      </div>

      <div className="login-container-enhanced">
        <div className="login-left-panel-enhanced">
          <div className="login-left-content">
            <div className="login-brand">
              <h2><CiHeart className="brand-heart" /> VV Care</h2>
              <p className="brand-tagline">Your Health, Our Priority</p>
            </div>

            <div
              className="login-bg-image-enhanced"
              style={{
                backgroundImage: `url(${hospitalImg})`,
              }}
            />
          </div>
        </div>

        <div className="login-right-panel-enhanced">
          <form onSubmit={handleSubmit} className="login-form-enhanced">
            <div className="form-header">
              <h2>Welcome Back</h2>
              <p className="form-subtitle">Sign in to access your healthcare dashboard</p>
            </div>

            {loginError && (
              <div className="error-message">
                Invalid email or password. Please try again.
              </div>
            )}

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`login-input ${loginError ? 'error' : ''}`}
              />
              <div className="input-icon">✉️</div>
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className={`login-input ${loginError ? 'error' : ''}`}
              />
              <div className="input-icon">🔒</div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#forgot" className="forgot-password">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className={`login-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="button-spinner"></span>
                  Signing In...
                </>
              ) : (
                'Login'
              )}
            </button>

         

            <div className="signup-link">
              Don't have an account? <a href="/signup">Sign up here</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;