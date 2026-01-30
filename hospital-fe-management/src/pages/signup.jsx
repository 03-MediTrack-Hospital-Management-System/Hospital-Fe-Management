import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaCalendarAlt } from "react-icons/fa";
import hospitalImg from "../assets/hospital1.jpg";

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

      let role = "PATIENT";

      if (formData.email === "admin@gmail.com") {
        role = "ADMIN";
      } else if (formData.email === "reception@gmail.com") {
        role = "RECEPTION";
      }

      users.push({
        email: formData.email,
        password: formData.password,
        role,
        profile: formData,
      });

      localStorage.setItem("users", JSON.stringify(users));

      setIsLoading(false);
      setShowSuccess(true);

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }, 1000);
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <div className="input-group mb-3">
      <span className="input-group-text bg-light border-0 ps-3">
        {Icon ? <Icon className="text-secondary opacity-50" /> : <FaUser className="text-secondary opacity-50" />}
      </span>
      <input
        className="form-control bg-light border-0 py-3 ps-2"
        style={{ fontSize: '0.9rem' }}
        {...props}
      />
    </div>
  );

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center auth-bg py-5">

      {/* Success Message Overlay */}
      {showSuccess && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-teal text-white"
          style={{ zIndex: 2000, backdropFilter: 'blur(10px)', opacity: 0.95 }}
        >
          <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mb-4 text-teal display-4 shadow-lg scale-up" style={{ width: '120px', height: '120px' }}>✓</div>
          <h3 className="display-4 fw-bold animate-fade-in">Account Created!</h3>
          <p className="lead animate-fade-in delay-100">Redirecting to login page...</p>
        </div>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="card glass-effect border-0 overflow-hidden rounded-5 shadow-lg" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="row g-0">
            {/* Left Panel - Dark Teal Sidebar */}
            <div className="col-lg-5 text-white p-5 d-none d-lg-flex flex-column justify-content-center position-relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(8, 60, 56, 0.95), rgba(11, 92, 99, 0.9))' }}>

              {/* Abstract Shapes */}
              <div style={{ position: 'absolute', top: '-15%', left: '-15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>

              <div className="position-relative z-2 stagger-1">
                <h4 className="fw-bold mb-4 opacity-75 text-uppercase tracking-widest">VV Care Hospitals</h4>
                <h2 className="display-4 fw-bold mb-4">Your Health,<br /><span className="text-teal-gradient">Our Priority</span></h2>
                <p className="opacity-90 lead fw-light mb-5">
                  Join thousands of patients managing their health digitally. Secure, fast, and reliable.
                </p>

                <div className="rounded-4 overflow-hidden shadow-lg transform-hover" style={{ height: '240px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <img src={hospitalImg} alt="Hospital" className="w-100 h-100 object-fit-cover opacity-90 hover-scale" style={{ transition: 'transform 0.5s ease' }} />
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="col-lg-7 p-5 bg-white position-relative">
              <div className="mx-auto" style={{ maxWidth: '550px' }}>
                <div className="text-center mb-5 stagger-1">
                  <h3 className="fw-bold text-dark-teal mb-2 display-6">Create Account</h3>
                  <p className="text-secondary small">Begin your journey to better health management</p>
                </div>

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">

                  <div className="stagger-2">
                    <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-light">
                      <h6 className="text-teal fw-bold small text-uppercase tracking-wide mb-0">
                        {showPersonal ? "Step 2: Personal Details" : "Step 1: Basic Information"}
                      </h6>
                      <span className="badge bg-teal bg-opacity-10 text-teal rounded-pill px-3">{showPersonal ? "2 / 2" : "1 / 2"}</span>
                    </div>

                    {!showPersonal ? (
                      <div className="animate-fade-in">
                        <InputField icon={FaUser} name="fullName" placeholder="Full Name" onChange={handleChange} required />
                        <InputField icon={FaEnvelope} name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
                        <InputField icon={FaPhone} name="phone" placeholder="Phone Number" onChange={handleChange} required />
                        <InputField icon={FaLock} name="password" type="password" placeholder="Create Password" onChange={handleChange} required />

                        <div className="mb-3 animate-fade-in delay-100">
                          <label className="form-label small text-secondary fw-bold ms-1">Would you like to add personal details?</label>
                          <div className="d-flex gap-3 mt-1">
                            <button
                              type="button"
                              className={`btn flex-grow-1 py-2 fw-bold text-start ps-3 rounded-3 border ${showPersonal === false ? 'border-light bg-light text-secondary' : ''}`}
                              onClick={() => setShowPersonal("yes")}
                              style={{ background: 'white' }}
                            >
                              <span className="text-teal me-2">●</span> Yes, add details now
                            </button>
                          </div>
                          <select
                            className="form-select bg-light border-0 py-3 mt-2 text-secondary d-none"
                            onChange={(e) => setShowPersonal(e.target.value === "yes")}
                          >
                            <option value="">Select Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">Skip for now</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div className="animate-slide-up">
                        <div className="row g-3">
                          <div className="col-md-6"><InputField icon={FaCalendarAlt} type="date" name="dob" onChange={handleChange} /></div>
                          <div className="col-md-6">
                            <div className="input-group mb-3">
                              <span className="input-group-text bg-light border-0 ps-3"><FaUser className="text-secondary opacity-50" /></span>
                              <select className="form-select bg-light border-0 py-3 text-secondary ps-2" name="gender" onChange={handleChange} style={{ fontSize: '0.9rem' }}>
                                <option value="">Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4"><InputField icon={FaUser} name="bloodGroup" placeholder="Blood Group" onChange={handleChange} /></div>
                          <div className="col-md-4"><InputField icon={FaUser} name="height" placeholder="Height (cm)" onChange={handleChange} /></div>
                          <div className="col-md-4"><InputField icon={FaUser} name="weight" placeholder="Weight (kg)" onChange={handleChange} /></div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-link text-decoration-none text-secondary small fw-bold mb-3"
                          onClick={() => setShowPersonal(false)}
                        >
                          ← Back to Basic Info
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="mt-2 stagger-3">
                    <button
                      className="btn btn-teal w-100 py-3.5 rounded-4 fw-bold text-white shadow-md hover-scale"
                      type="submit"
                      disabled={isLoading}
                      style={{ background: 'linear-gradient(135deg, #0b5c63 0%, #2aa7a1 100%)', letterSpacing: '0.5px' }}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </button>
                  </div>
                </form>

                <div className="text-center mt-5 stagger-4">
                  <span className="text-secondary small">Already have an account? </span>
                  <Link to="/login" className="text-teal fw-bold text-decoration-none hover-underline">Login here</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 stagger-5">
          <Link to="/" className="text-decoration-none text-white opacity-75 small fw-bold hover-opacity">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;