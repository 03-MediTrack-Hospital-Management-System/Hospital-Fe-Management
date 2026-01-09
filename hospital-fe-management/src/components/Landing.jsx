import React from "react";
import { CiHeart } from "react-icons/ci";
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
          <div className="about-feature" >
            <h2 className="about-head">Patient-Centric Care</h2>
            <p>Every decision we make prioritizes patient comfort, safety, and satisfaction. Your health journey is our top priority.</p>
          </div>
          <div className="about-feature">
            <h2 className="about-head">Advanced Technology</h2>
            <p>State-of-the-art digital infrastructure for seamless appointment scheduling, instant reports, and comprehensive health monitoring.</p>
          </div>
          <div className="about-feature">
            <h2 className="about-head">Trusted & Secure</h2>
            <p>Industry-leading security with HIPAA compliance to ensure your medical data remains confidential and protected.</p>
          </div>
        </section>
        <section className="hero-specailits-section">
          <div className="specialties">

          </div>

          </section>
        
      </div>
    </section>

  );
}

export default Landing;
