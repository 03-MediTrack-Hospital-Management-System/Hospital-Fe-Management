import React, { useState } from "react";
import hospitalImg from "../assets/hospital1.jpg";
import "../styles/Signup.css";

function Signup() {
  const [showPersonal, setShowPersonal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    height: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find((u) => u.email === formData.email);
      
      if (exists) {
        setIsLoading(false);
        alert("User already exists");
        return;
      }

   const role = formData.email === "admin@gmail.com"
  ? "ADMIN"
  : "PATIENT";

users.push({
  email: formData.email,
  password: formData.password,
  role,
  profile: formData,
});

      localStorage.setItem("users", JSON.stringify(users));
      
      // Show success state
      setIsLoading(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }, 1000);
  };

  return (
    <div className="signup-page-wrapper">
     
      {showSuccess && (
        <div className="signup-success show">
          <div className="signup-success-icon">✓</div>
          <h3>Account Created!</h3>
          <p>Redirecting to login page...</p>
        </div>
      )}

      <div className="signup-container-enhanced">
        {/* LEFT */}
        <div className="signup-left-panel-enhanced">
          <div className="signup-left-content">
            <div className="signup-brand">
              <h2>VV Care Hospitals</h2>
              <h1>Your Health, Our Priority</h1>
              <p>Experience seamless healthcare management.</p>
            </div>

            <div
              className="signup-bg-image-enhanced"
              style={{
                backgroundImage: `url(${hospitalImg})`,
              }}
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="signup-right-panel-enhanced">
          <div className="signup-form-enhanced">
            <div className="signup-form-header">
              <h2>Create Patient Account</h2>
              <p>Join thousands of patients managing their health digitally</p>
            </div>

            <form onSubmit={handleSubmit}>
              <h4 className="form-section-title">Basic Information</h4>

              <div className="signup-input-group">
                <div className="signup-input-icon"></div>
                <input 
                  className="signup-input"
                  name="fullName" 
                  placeholder="Full Name" 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="signup-input-group">
                <div className="signup-input-icon"></div>
                <input 
                  className="signup-input"
                  name="email" 
                  type="email" 
                  placeholder="Email" 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="signup-input-group">
                <div className="signup-input-icon"></div>
                <input 
                  className="signup-input"
                  name="phone" 
                  placeholder="Phone" 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="signup-input-group">
                <div className="signup-input-icon"></div>
                <input 
                  className="signup-input"
                  name="password" 
                  type="password" 
                  placeholder="Password" 
                  onChange={handleChange} 
                  required 
                />
              </div>

           
              <div className="signup-input-group">
                <select 
                  className="signup-select"
                  onChange={(e) => setShowPersonal(e.target.value === "yes")} 
                  required
                >
                  <option value="">Add Personal Details?</option>
                  <option value="yes">Yes</option>
                  <option value="no">Later</option>
                </select>
              </div>
              {showPersonal && (
                <div className="personal-details-section">
                  <h4 className="form-section-title">Personal Details</h4>
                  <div className="personal-details-grid">
                    <div className="signup-input-group">
                      <div className="signup-input-icon"></div>
                      <input 
                        className="signup-input"
                        type="date" 
                        name="dob" 
                        onChange={handleChange} 
                        placeholder="Date of Birth"
                      />
                    </div>

                    <div className="signup-input-group">
                      <select 
                        className="signup-select"
                        name="gender" 
                        onChange={handleChange}
                      >
                        <option value="">Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="signup-input-group">
                      <select 
                        className="signup-select"
                        name="bloodGroup" 
                        onChange={handleChange}
                      >
                        <option value="">Blood Group</option>
                        <option>A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option>
                        <option>O-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                      </select>
                    </div>

                    <div className="signup-input-group">
                      <div className="signup-input-icon"></div>
                      <input 
                        className="signup-input"
                        name="height" 
                        placeholder="Height (cm)" 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className="signup-input-group">
                      <div className="signup-input-icon"></div>
                      <input 
                        className="signup-input"
                        name="weight" 
                        placeholder="Weight (kg)" 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                </div>
              )}

              <button 
                className={`signup-submit-btn ${isLoading ? 'loading' : ''}`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="signup-login-link">
              Already have an account? <a href="/login">Login here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;