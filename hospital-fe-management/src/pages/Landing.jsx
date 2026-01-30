import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import Navbar from "../components/Common/Navbar";
import {
  FaHeart,
  FaBrain,
  FaBone,
  FaChild,
  FaShieldAlt,
  FaUtensils,
  FaHeartbeat,
  FaLungs,
  FaUserMd,
  FaLeaf,
  FaClock
} from "react-icons/fa";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page overflow-hidden bg-hero-gradient">
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section py-5 position-relative">
        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill bg-white shadow-sm mb-4 border border-1 border-light stagger-1">
                <FaShieldAlt className="text-teal" />
                <span className="text-dark small fw-bold text-uppercase tracking-wider">Trusted Healthcare Provider</span>
              </div>

              <h1 className="display-3 fw-bold mb-4 text-dark lh-sm stagger-2">
                Professional <br className="d-none d-lg-block" />
                <span className="text-teal">Healthcare</span> <span className="text-teal">Solutions</span>
              </h1>

              <p className="lead text-secondary mb-5 stagger-3" style={{ maxWidth: '90%' }}>
                VV Care provides comprehensive healthcare management with advanced
                technology. Streamlined appointments, digital prescriptions, and
                round-the-clock medical support.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5 stagger-4">
                <button
                  onClick={() => navigate('/signup')}
                  className="btn btn-teal btn-lg px-4 py-3 rounded-3 shadow-md fw-bold d-flex align-items-center gap-2 border-0 hover-scale"
                >
                  Get Started <span className="fs-5">→</span>
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="btn btn-white btn-lg px-4 py-3 rounded-3 shadow-sm fw-bold text-dark border border-2 hover-scale"
                >
                  Access Portal
                </button>
              </div>

              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4 stagger-5">
                <div className="d-flex align-items-center">
                  <div className="d-flex position-relative me-3">
                    {[1, 2, 3, 4].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-circle bg-teal border border-2 border-white opacity-75"
                        style={{
                          width: '40px',
                          height: '40px',
                          marginLeft: i > 0 ? '-15px' : '0',
                          zIndex: 4 - i
                        }}
                      ></div>
                    ))}
                  </div>
                  <div>
                    <strong className="d-block text-dark fw-bold">10,000+ Satisfied Patients</strong>
                    <div className="text-warning small d-flex gap-1 justify-content-center justify-content-lg-start">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats Grid */}
            <div className="col-lg-6">
              <div className="row g-4 perspective-container">
                {/* Card 1: Active Patients - Teal Icon Box */}
                <div className="col-md-6 pt-md-5">
                  <div className="card border-0 glass-effect h-100 p-4 hover-up rounded-4 floating-card stagger-1" style={{ animationDelay: '0s' }}>
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-4 bg-teal text-white shadow-sm" style={{ width: '64px', height: '64px' }}>
                        <FaUserMd size={28} />
                      </div>
                    </div>
                    <h2 className="display-6 fw-bold text-dark mb-1">15K+</h2>
                    <p className="text-secondary m-0 fw-medium">Active Patients</p>
                  </div>
                </div>

                {/* Card 2: Medical Experts - Dark Icon Box */}
                <div className="col-md-6">
                  <div className="card border-0 glass-effect h-100 p-4 hover-up rounded-4 floating-card stagger-3" style={{ animationDelay: '1.5s' }}>
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-4 bg-dark text-white shadow-sm" style={{ width: '64px', height: '64px' }}>
                        <FaHeartbeat size={28} />
                      </div>
                    </div>
                    <h2 className="display-6 fw-bold text-dark mb-1">200+</h2>
                    <p className="text-secondary m-0 fw-medium">Medical Experts</p>
                  </div>
                </div>

                {/* Card 3: Experience - Dark Icon Box */}
                <div className="col-md-6 pt-md-5 mt-md-n5">
                  <div className="card border-0 glass-effect h-100 p-4 hover-up rounded-4 floating-card stagger-2" style={{ animationDelay: '0.5s' }}>
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-4 bg-dark text-white shadow-sm" style={{ width: '64px', height: '64px' }}>
                        <FaLeaf size={28} />
                      </div>
                    </div>
                    <h2 className="display-6 fw-bold text-dark mb-1">30+</h2>
                    <p className="text-secondary m-0 fw-medium">Years Experience</p>
                  </div>
                </div>

                {/* Card 4: Available - Teal Icon Box */}
                <div className="col-md-6 mt-md-n5">
                  <div className="card border-0 glass-effect h-100 p-4 hover-up rounded-4 floating-card stagger-4" style={{ animationDelay: '2s' }}>
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-4 bg-teal text-white shadow-sm" style={{ width: '64px', height: '64px' }}>
                        <FaClock size={28} />
                      </div>
                    </div>
                    <h2 className="display-6 fw-bold text-dark mb-1">24/7</h2>
                    <p className="text-secondary m-0 fw-medium">Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge bg-light-teal text-teal border border-teal rounded-pill px-3 py-2 mb-3">CENTRES OF EXCELLENCE</span>
            <h2 className="display-5 fw-bold text-dark">Our Medical <span className="text-teal">Specialties</span></h2>
            <p className="text-secondary mt-3 mx-auto" style={{ maxWidth: '600px' }}>
              World-class medical care across multiple specialties with experienced doctors and advanced facilities
            </p>
          </div>

          <div className="row g-4">
            {[
              { icon: <FaHeart />, title: "Cardiology", count: "5000+", color: "bg-danger", link: "/specialty/cardiology" },
              { icon: <FaBrain />, title: "Neurology", count: "3500+", color: "bg-primary", link: "/specialty/neurology" },
              { icon: <FaBone />, title: "Orthopedics", count: "4200+", color: "bg-warning", link: "/specialty/orthopedics" },
              { icon: <FaChild />, title: "Pediatrics", count: "6000+", color: "bg-danger", link: "/specialty/pediatrics" },
              { icon: <FaShieldAlt />, title: "Oncology", count: "2500+", color: "bg-primary", link: "/specialty/oncology" },
              { icon: <FaUtensils />, title: "Gastroenterology", count: "3800+", color: "bg-success", link: "/specialty/gastroenterology" },
              { icon: <FaHeartbeat />, title: "Nephrology", count: "1400+", color: "bg-info", link: "/specialty/nephrology" },
              { icon: <FaLungs />, title: "Pulmonology", count: "2100+", color: "bg-teal", link: "/specialty/pulmonology" }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <Link to={item.link} className="text-decoration-none d-block h-100">
                  <div className="card h-100 border border-light-subtle shadow-sm hover-up transition-all p-4 rounded-4">
                    <div className={`d-inline-flex align-items-center justify-content-center p-3 rounded-3 ${item.color} text-white mb-4`} style={{ width: '60px', height: '60px' }}>
                      <div className="fs-4">{item.icon}</div>
                    </div>
                    <h3 className="h5 fw-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-secondary small mb-4">Expert care & treatment</p>
                    <div className="d-flex justify-content-between align-items-center pt-3 border-top border-light-subtle">
                      <span className="text-secondary x-small">Patients Treated</span>
                      <span className={`fw-bold ${item.color === 'bg-teal' ? 'text-teal' : item.color.replace('bg-', 'text-')}`}>{item.count}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row g-5 mb-5 pb-5 border-bottom border-secondary border-opacity-25">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-3">
                Ready to Experience Better <br /> Healthcare Management?
              </h2>
              <p className="text-secondary lead">
                Join thousands of satisfied patients who trust VV Care.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/signup" className="btn btn-teal btn-lg rounded-pill px-5 fw-bold">
                Get Started Now →
              </Link>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="text-teal fs-3"><CiHeart /></span>
                <h3 className="h4 fw-bold m-0">VV Care</h3>
              </div>
              <p className="text-secondary">
                Transforming healthcare with innovation, compassion, and excellence since 1994.
              </p>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="h6 fw-bold text-white text-uppercase mb-3">Quick Links</h4>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">About Us</a></li>
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">Our Services</a></li>
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">Find Doctors</a></li>
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">Careers</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h4 className="h6 fw-bold text-white text-uppercase mb-3">Services</h4>
              <ul className="list-unstyled d-flex flex-column gap-2">
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">Appointments</a></li>
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">Emergency</a></li>
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">Pharmacy</a></li>
                <li><a href="#" className="text-secondary text-decoration-none hover-text-teal transition-all">Lab Tests</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="h6 fw-bold text-white text-uppercase mb-3">Contact Us</h4>
              <ul className="list-unstyled d-flex flex-column gap-2 text-secondary">
                <li>📍 123 Healthcare Boulevard, Medical City</li>
                <li>📞 +1 (800) VV-CARE</li>
                <li>✉ hello@vvcare.com</li>
              </ul>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-4 mt-5 border-top border-secondary border-opacity-25">
            <p className="text-secondary m-0">© 2024 VV Care. All rights reserved.</p>
            <div className="d-flex gap-3 mt-3 mt-md-0">
              <a href="#" className="text-secondary text-decoration-none small hover-text-white">Privacy Policy</a>
              <a href="#" className="text-secondary text-decoration-none small hover-text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
