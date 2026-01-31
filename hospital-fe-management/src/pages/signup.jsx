import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCalendarAlt
} from "react-icons/fa";
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
    weight: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find((u) => u.email === formData.email);

      if (exists) {
        setIsLoading(false);
        alert("User already exists");
        return;
      }

      let role = "PATIENT";
      if (formData.email === "admin@gmail.com") role = "ADMIN";
      if (formData.email === "reception@gmail.com") role = "RECEPTION";

      users.push({
        email: formData.email,
        password: formData.password,
        role,
        profile: formData
      });

      localStorage.setItem("users", JSON.stringify(users));
      setIsLoading(false);
      setShowSuccess(true);

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }, 1000);
  };

  const InputField = ({ icon: Icon, name, ...props }) => (
    <div className="input-group mb-3">
      <span className="input-group-text bg-light border-0">
        {Icon && <Icon className="text-secondary opacity-75" />}
      </span>
      <input
        className="form-control bg-light border-0 py-3"
        name={name}
        value={formData[name]}
        onChange={handleChange}
        {...props}
      />
    </div>
  );

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">

      {showSuccess && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
          style={{ background: "linear-gradient(135deg, #0b5c63 0%, #2aa7a1 100%)" }}>
          <div className="bg-white text-success rounded-circle d-flex align-items-center justify-content-center mb-4 fs-1 fw-bold">
            ✓
          </div>
          <h3 className="fw-bold">Account Created!</h3>
          <p>Redirecting to login page...</p>
        </div>
      )}

      <div className="container">
        <div className="card border-0 shadow-lg rounded-5 overflow-hidden">
          <div className="row g-0">

            <div
              className="col-lg-5 d-none d-lg-flex flex-column justify-content-center p-5 text-white"
              style={{ background: "linear-gradient(135deg, #0b5c63 0%, #2aa7a1 100%)" }}
            >
              <h6 className="text-uppercase opacity-75 fw-bold">
                VV Care Hospitals
              </h6>
              <h2 className="fw-bold display-5">
                Your Health,<br />
                <span className="opacity-75">Our Priority</span>
              </h2>
              <p className="lead opacity-75">
                Join thousands of patients managing their health digitally.
              </p>
              <img
                src={hospitalImg}
                alt="Hospital"
                className="img-fluid rounded-4 mt-4"
              />
            </div>

            <div className="col-lg-7 p-5 bg-white">
              <div className="mx-auto" style={{ maxWidth: "520px" }}>
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-dark">
                    Create <span style={{ color: "#0b5c63" }}>Account</span>
                  </h3>
                  <p className="text-muted small">
                    Begin your journey to better health management
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                    <h6 className="fw-bold text-uppercase small mb-0"
                      style={{ color: "#0b5c63" }}>
                      {showPersonal ? "Step 2: Personal Details" : "Step 1: Basic Information"}
                    </h6>
                    <span className="badge rounded-pill text-white"
                      style={{ backgroundColor: "#2aa7a1" }}>
                      {showPersonal ? "2 / 2" : "1 / 2"}
                    </span>
                  </div>

                  {!showPersonal && (
                    <>
                      <InputField icon={FaUser} name="fullName" placeholder="Full Name" required autoFocus />
                      <InputField icon={FaEnvelope} name="email" type="email" placeholder="Email Address" required />
                      <InputField icon={FaPhone} name="phone" placeholder="Phone Number" required />
                      <InputField icon={FaLock} name="password" type="password" placeholder="Create Password" required />

                      <button
                        type="button"
                        className="btn w-100 fw-bold"
                        style={{ borderColor: "#2aa7a1", color: "#0b5c63" }}
                        onClick={() => setShowPersonal(true)}
                      >
                        Add Personal Details
                      </button>
                    </>
                  )}

                  {showPersonal && (
                    <>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <InputField icon={FaCalendarAlt} type="date" name="dob" />
                        </div>
                        <div className="col-md-6">
                          <select
                            className="form-select bg-light border-0 py-3"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <option value="">Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <InputField name="bloodGroup" placeholder="Blood Group" />
                        </div>
                        <div className="col-md-4">
                          <InputField name="height" placeholder="Height (cm)" />
                        </div>
                        <div className="col-md-4">
                          <InputField name="weight" placeholder="Weight (kg)" />
                        </div>
                      </div>

                      <button
                        type="button"
                        className="btn btn-link text-muted fw-bold mt-3"
                        onClick={() => setShowPersonal(false)}
                      >
                        ← Back to Basic Info
                      </button>
                    </>
                  )}

                  <button
                    type="submit"
                    className="btn w-100 py-3 fw-bold rounded-4 mt-4 text-white"
                    style={{ background: "linear-gradient(135deg, #0b5c63 0%, #2aa7a1 100%)" }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <span className="text-muted small">Already have an account?</span>{" "}
                  <Link to="/login" className="fw-bold" style={{ color: "#0b5c63" }}>
                    Login here
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="text-decoration-none text-muted fw-bold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

