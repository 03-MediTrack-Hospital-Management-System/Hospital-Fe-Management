import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaShieldAlt, FaUserMd, FaClock, FaHeart } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));

    if (!users || users.length === 0) {
      localStorage.setItem(
        "users",
        JSON.stringify([
          { email: "patient@gmail.com", password: "1234", role: "PATIENT" },
          { email: "doctor@gmail.com", password: "1234", role: "DOCTOR" },
          { email: "admin@gmail.com", password: "1234", role: "ADMIN" },
          { email: "reception@gmail.com", password: "1234", role: "RECEPTION" },
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
      setShowSuccess(true);

      setTimeout(() => {
        if (user.role === "PATIENT") navigate("/patient");
        if (user.role === "DOCTOR") navigate("/doctor");
        if (user.role === "ADMIN") navigate("/admin");
        if (user.role === "RECEPTION") navigate("/reception");
      }, 1500);
    }, 800);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center auth-bg py-5">

      <div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-teal text-white"
        style={{
          zIndex: 2000,
          opacity: showSuccess ? 0.95 : 0,
          visibility: showSuccess ? "visible" : "hidden",
          transition: "all 0.5s ease",
          backdropFilter: "blur(10px)"
        }}
      >
        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mb-4 text-teal display-4 shadow-lg scale-up" style={{ width: 120, height: 120 }}>
          ✓
        </div>
        <h3 className="fw-bold display-6 animate-fade-in">Welcome Back!</h3>
        <p className="lead animate-fade-in delay-100">Redirecting to your dashboard...</p>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="card glass-effect border-0 overflow-hidden rounded-5 shadow-lg" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="row g-0">

            <div className="col-lg-6 text-white p-5 d-none d-lg-flex flex-column justify-content-between position-relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(8, 60, 56, 0.95), rgba(11, 92, 99, 0.9))' }}>

              <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(80, 200, 198, 0.2) 0%, transparent 70%)', borderRadius: '50%' }}></div>
              <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(80, 200, 198, 0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>

              <div className="position-relative z-2 stagger-1">
                <div className="d-flex align-items-center gap-3 mb-5">
                  <div className="bg-white bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center backdrop-blur-sm shadow-sm" style={{ width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <FaHeart className="text-teal fs-3" />
                  </div>
                  <div>
                    <h3 className="fw-bold m-0 lh-1 tracking-tight">VV Care</h3>
                    <small className="opacity-75 text-uppercase letter-spacing-2">Hospitals</small>
                  </div>
                </div>

                <h2 className="display-5 fw-bold mb-4 leading-tight">Your Health,<br /><span className="text-teal-gradient">Our Priority</span></h2>
                <p className="lead opacity-90 mb-5 fw-light" style={{ fontSize: '1.1rem', maxWidth: '400px' }}>
                  Experience seamless healthcare management with advanced technology. Connect with top specialists instantly.
                </p>

                <div className="d-flex flex-column gap-4 stagger-2">
                  {[
                    { icon: FaShieldAlt, title: "Secure & Private", desc: "End-to-end encrypted medical records" },
                    { icon: FaUserMd, title: "Expert Care", desc: "Access to 50+ specialized doctors" },
                    { icon: FaClock, title: "24/7 Available", desc: "Round-the-clock medical support" }
                  ].map((item, idx) => (
                    <div key={idx} className="d-flex align-items-center gap-3 hover-up p-2 rounded-3" style={{ transition: 'all 0.3s' }}>
                      <div className="rounded-circle bg-teal bg-opacity-20 p-2 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
                        <item.icon className="text-white" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0">{item.title}</h6>
                        <small className="opacity-75">{item.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-between pt-5 mt-4 border-top border-white border-opacity-10 stagger-3">
                {[
                  { count: "15K+", label: "Patients" },
                  { count: "200+", label: "Doctors" },
                  { count: "30+", label: "Years" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="fw-bold fs-3">{stat.count}</div>
                    <span className="small opacity-75 text-uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 p-5 bg-white d-flex align-items-center position-relative">
              <div className="w-100 px-lg-5">
                <div className="text-center mb-5 stagger-1">
                  <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-teal bg-opacity-10 text-teal mb-3 shadow-sm floating-card" style={{ width: '80px', height: '80px' }}>
                    <div className="fs-2"><FaUserMd /></div>
                  </div>
                  <h2 className="fw-bold text-dark mb-2">Welcome Back</h2>
                  <p className="text-secondary">Sign in to access your dashboard</p>
                </div>

                {loginError && (
                  <div className="alert alert-danger text-center small py-3 rounded-3 shadow-sm stagger-2 animate-pulse border-0 bg-danger bg-opacity-10 text-danger fw-bold">
                    Invalid email or password. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div className="mb-2 stagger-2">
                    <label className="form-label small fw-bold text-secondary text-uppercase tracking-wide ms-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control py-3 px-4 bg-light border-0 rounded-4 shadow-sm"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ fontSize: '0.95rem' }}
                    />
                  </div>

                  <div className="mb-4 stagger-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <label className="form-label small fw-bold text-secondary text-uppercase tracking-wide ms-1">Password</label>
                      <a href="#" className="small text-teal fw-bold text-decoration-none hover-opacity">Forgot?</a>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="form-control py-3 px-4 bg-light border-0 rounded-4 shadow-sm"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      style={{ fontSize: '0.95rem' }}
                    />
                  </div>

                  <button
                    className="btn btn-teal w-100 py-3.5 rounded-4 fw-bold fs-6 shadow-md hover-scale stagger-4"
                    disabled={isLoading}
                    style={{ background: 'linear-gradient(135deg, #0b5c63 0%, #2aa7a1 100%)', border: 'none', letterSpacing: '0.5px', transition: 'all 0.3s ease' }}
                  >
                    {isLoading ? (
                      <span className="d-flex align-items-center justify-content-center gap-2">
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Signing In...
                      </span>
                    ) : "Sign In"}
                  </button>
                </form>

                <div className="mt-5 text-center stagger-5">
              

                  <p className="small text-secondary m-0">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-teal fw-bold text-decoration-none hover-underline">
                      Create Account
                    </Link>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="text-center mt-4 stagger-5">
          <Link to="/" className="text-decoration-none text-white opacity-75 small fw-bold hover-opacity">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
