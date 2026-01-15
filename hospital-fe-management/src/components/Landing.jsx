import React from "react";
import { CiHeart } from "react-icons/ci";
import {
  FaHeart,
  FaBrain,
  FaBone,
  FaChild,
  FaShieldAlt,
  FaUtensils,
  FaHeartbeat,
  FaLungs,
} from "react-icons/fa";

function Landing() {
  return (
    <section className="hero">
      <div className="hero-main-landing">
        <div className="container hero-content">
          <div className="hero-left">
            <span className="badge">Trusted Healthcare Provider</span>

            <h1>
              Professional <br />
              <span>Healthcare Solutions</span>
            </h1>

            <p>
              VV Care provides comprehensive healthcare management with advanced
              technology. Streamlined appointments, digital prescriptions, and
              round-the-clock medical support.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Get Started →</button>
              <button className="secondary-btn ">Access Portal</button>
            </div>

            <div className="rating">
              <div className="avatars">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div>
                <strong>10,000+</strong> Satisfied Patients
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="stat-card">
              <h2>15K+</h2>
              <p>Active Patients</p>
            </div>
            <div className="stat-card">
              <h2>200+</h2>
              <p>Medical Experts</p>
            </div>
            <div className="stat-card">
              <h2>30+</h2>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h2>24/7</h2>
              <p>Available</p>
            </div>
          </div>
        </div>
        <section className="hero-about-section">
          <div className="hero-about">
            <h2>ABOUT VV CARE HOSPITALS</h2>
            <p>
              VV Care Hospitals is a leading healthcare institution committed to
              providing exceptional medical services with cutting-edge
              technology and a patient-first approach. Our mission is to make
              quality healthcare accessible and efficient for everyone.
            </p>
          </div>
          <div className="about-feature">
            <h2 className="about-head">Patient-Centric Care</h2>
            <p>
              Every decision we make prioritizes patient comfort, safety, and
              satisfaction. Your health journey is our top priority.
            </p>
          </div>
          <div className="about-feature">
            <h2 className="about-head">Advanced Technology</h2>
            <p>
              State-of-the-art digital infrastructure for seamless appointment
              scheduling, instant reports, and comprehensive health monitoring.
            </p>
          </div>
          <div className="about-feature">
            <h2 className="about-head">Trusted & Secure</h2>
            <p>
              Industry-leading security with HIPAA compliance to ensure your
              medical data remains confidential and protected.
            </p>
          </div>
        </section>
        <h1 className="section-title">Our Specialties</h1>

        <section className="specialties-cards">
          <div className="specialty-card">
            <span className="icon-box cardio">
              <FaHeart />
            </span>

            <h3>Cardiology</h3>
            <p>Expert heart care with advanced diagnostics and treatments.</p>

            <a href="#" aria-label="Go to Cardiology page"></a>
          </div>

          <div className="specialty-card">
            <span className="icon-box neuro">
              <FaBrain />
            </span>

            <h3>Neurology</h3>
            <p>Advanced treatment for brain and nervous system disorders.</p>

            <a href="#" aria-label="Go to Neurology page"></a>
          </div>

          <div className="specialty-card">
            <span className="icon-box ortho">
              <FaBone />
            </span>

            <h3>Orthopedics</h3>
            <p>Comprehensive bone, joint, and spine care solutions.</p>

            <a href="#" aria-label="Go to Orthopedics page"></a>
          </div>

          <div className="specialty-card">
            <span className="icon-box pedia">
              <FaChild />
            </span>

            <h3>Pediatrics</h3>
            <p>Compassionate healthcare for infants, children, and teens.</p>

            <a href="#" aria-label="Go to Pediatrics page"></a>
          </div>

          <div className="specialty-card">
            <span className="icon-box onco">
              <FaShieldAlt />
            </span>

            <h3>Oncology</h3>
            <p>Comprehensive cancer diagnosis and treatment services.</p>

            <a href="#" aria-label="Go to Oncology page"></a>
          </div>

          <div className="specialty-card">
            <span className="icon-box gastro">
              <FaUtensils />
            </span>

            <h3>Gastroenterology</h3>
            <p>Digestive system care with expert specialists.</p>

            <a href="#" aria-label="Go to Gastroenterology page"></a>
          </div>

          <div className="specialty-card">
            <span className="icon-box nephro">
              <FaHeartbeat />
            </span>

            <h3>Nephrology</h3>
            <p>Advanced kidney care and dialysis services.</p>

            <a href="#" aria-label="Go to Nephrology page"></a>
          </div>

          <div className="specialty-card">
            <span className="icon-box pulmo">
              <FaLungs />
            </span>

            <h3>Pulmonology</h3>
            <p>Expert treatment for lung and respiratory conditions.</p>

            <a href="#" aria-label="Go to Pulmonology page"></a>
          </div>
        </section>
        <section className="Footer-hero-Landing">
          <footer className="vv-footer">
            <div className="footer-top">
              <h2>
                Ready to Experience Better <br /> Healthcare Management?
              </h2>
              <p>
                Join thousands of satisfied patients who trust VV Care for their
                healthcare needs. Start your journey to better health today.
              </p>
              <button className="footer-cta">
             <a href="/login">   Get Started Now <span>→</span></a>
              </button>
            </div>

            <div className="footer-content">
              <div className="footer-brand">
                <div className="brand-logo">
                  <CiHeart />
                </div>
                <h3>VV Care</h3>
                <p>
                  Transforming healthcare with innovation, compassion, and
                  excellence since 1994.
                </p>
              </div>

              <div className="footer-links">
                <h4>Quick Links</h4>
                <a href="#">About Us</a>
                <a href="#">Our Services</a>
                <a href="#">Find Doctors</a>
                <a href="#">Careers</a>
              </div>

              <div className="footer-links">
                <h4>Services</h4>
                <a href="#">Book Appointment</a>
                <a href="#">Emergency Care</a>
                <a href="#">Online Pharmacy</a>
                <a href="#">Lab Tests</a>
              </div>

              <div className="footer-contact">
                <h4>Contact Us</h4>
                <p>📍 123 Healthcare Boulevard, Medical City, MC 12345</p>
                <p>📞 +1 (800) VV-CARE</p>
                <p>✉ hello@vvcare.com</p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2024 VV Care. All rights reserved.</p>
              <div className="footer-policy">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </section>
  );
}

export default Landing;
