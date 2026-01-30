import { useParams, Link } from "react-router-dom";
import { specialties } from "../data/specialties";
import { specialtyImages } from "../utils/specialtyImages";
import Navbar from "../components/Common/Navbar";

function SpecialtyPage() {
  const { id } = useParams();
  const specialty = specialties.find(s => s.id === id);

  if (!specialty) {
    return <h2 className="text-center py-5">Specialty not found</h2>;
  }

  const image = specialtyImages[id];
  const themeColor = "rgba(8, 60, 56, 0.95)";
  const themeColorLight = "rgba(11, 92, 99, 0.9)";
  const themeColorLightBg = "rgba(11, 92, 99, 0.1)";

  return (
    <>
      {/* White Navbar */}
      <div className="bg-white shadow-sm">
        <Navbar />
      </div>

      {/* ================= HERO SECTION WITH BACKGROUND IMAGE ================= */}
      <div 
        className="position-relative pt-5 mt-4"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh'
        }}
      >
        {/* Blur Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: `linear-gradient(135deg, ${themeColor}, ${themeColorLight})`,
            backdropFilter: 'blur(8px)'
          }}
        ></div>
        
        <div className="container position-relative z-1 pt-5">
          <div className="row align-items-center min-vh-70 pt-4">
            {/* Content Column */}
            <div className="col-lg-6 mb-4 mb-lg-0 offset-lg-1">
              <h1 className="fw-bold display-4 text-white mb-3 lh-base">{specialty.title}</h1>
              <p className="text-light fs-4 fw-light mb-4">
                Specialized care tailored for your health needs
              </p>
              <p className="text-white fs-5 mb-4 lh-lg">
                Expert heart care with advanced diagnostics and treatments. Our 
                cardiology department is equipped with state-of-the-art technology to 
                provide comprehensive care for all heart-related conditions.
              </p>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-white bg-opacity-25 rounded-circle p-3 me-3">
                  <i className="bi bi-people-fill text-white fs-4"></i>
                </div>
                <div>
                  <p className="text-white-75 mb-0 fs-5">Patients treated:</p>
                  <h3 className="text-white fw-bold display-6">{specialty.count}++</h3>
                </div>
              </div>
            </div>
            
            {/* Image Column */}
            <div className="col-lg-4 mt-5 mt-lg-0 ms-lg-5">
              <img
                src={image}
                alt={specialty.title}
                className="img-fluid rounded-4 shadow-lg border border-white border-4"
                style={{ 
                  maxHeight: "400px", 
                  objectFit: "cover", 
                  width: "100%",
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3) !important',
                  transform: 'translateX(-20px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= OVERVIEW SECTION ================= */}
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <h2 className="fw-bold display-6 text-center mb-4" style={{color: themeColor}}>
              Overview
            </h2>
            <p className="text-muted fs-5 lh-lg text-center px-lg-5">
              We prioritize your heart health with a team of world-renowned 
              cardiologists and cardiac surgeons. From routine check-ups to 
              complex surgeries, we provide personalized care tailored to 
              each patient's needs.
            </p>
          </div>
        </div>

        {/* ================= GENERAL MEDICAL INFORMATION ================= */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <h3 className="fw-bold display-6 text-center mb-4" style={{color: themeColor}}>
              General Medical Information
            </h3>
            <p className="text-muted fs-5 lh-lg text-center mb-5">
              Our department follows evidence-based medical practices, using
              advanced diagnostics and patient-centered treatment plans.
              All specialties at VV Care focus on preventive care, accurate
              diagnosis, and long-term wellness.
            </p>
            
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100 rounded-4" style={{borderTop: `4px solid ${themeColor}`}}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <i className="bi bi-check-circle-fill me-3 mt-1 fs-4" style={{color: themeColor}}></i>
                      <div>
                        <h5 className="fw-bold mb-2" style={{color: themeColor}}>Experienced and certified specialists</h5>
                        <p className="text-muted mb-0">Our team consists of board-certified specialists with years of experience.</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start mb-3">
                      <i className="bi bi-check-circle-fill me-3 mt-1 fs-4" style={{color: themeColor}}></i>
                      <div>
                        <h5 className="fw-bold mb-2" style={{color: themeColor}}>Advanced diagnostic facilities</h5>
                        <p className="text-muted mb-0">State-of-the-art equipment for accurate diagnosis and monitoring.</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill me-3 mt-1 fs-4" style={{color: themeColor}}></i>
                      <div>
                        <h5 className="fw-bold mb-2" style={{color: themeColor}}>Personalized treatment plans</h5>
                        <p className="text-muted mb-0">Customized care plans designed for individual patient needs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100 rounded-4" style={{borderTop: `4px solid ${themeColor}`}}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-3">
                      <i className="bi bi-check-circle-fill me-3 mt-1 fs-4" style={{color: themeColor}}></i>
                      <div>
                        <h5 className="fw-bold mb-2" style={{color: themeColor}}>24/7 patient support services</h5>
                        <p className="text-muted mb-0">Round-the-clock assistance and emergency care availability.</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start mb-3">
                      <i className="bi bi-check-circle-fill me-3 mt-1 fs-4" style={{color: themeColor}}></i>
                      <div>
                        <h5 className="fw-bold mb-2" style={{color: themeColor}}>Modern medical equipment</h5>
                        <p className="text-muted mb-0">Latest technology for effective treatment and recovery.</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-start">
                      <i className="bi bi-check-circle-fill me-3 mt-1 fs-4" style={{color: themeColor}}></i>
                      <div>
                        <h5 className="fw-bold mb-2" style={{color: themeColor}}>Emergency care available</h5>
                        <p className="text-muted mb-0">Immediate medical attention for critical situations.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CONSULTATION CTA ================= */}
        <div className="row mb-5">
          <div className="col-lg-6 mx-auto">
            <div 
              className="rounded-4 p-5 shadow-lg text-center"
              style={{
                background: `linear-gradient(135deg, ${themeColor}, ${themeColorLight})`
              }}
            >
              <h3 className="fw-bold display-6 text-white mb-3">Need a Consultation?</h3>
              <p className="text-white fs-5 mb-4 lh-base">
                Our specialists are here to help. Book an appointment
                today for expert medical advice.
              </p>
              <div className="d-grid">
                <Link 
                  to="/login" 
                  className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold"
                  style={{ 
                    fontSize: '1.2rem',
                    color: themeColor
                  }}
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= PATIENT REVIEWS ================= */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fw-bold display-6 text-center mb-4" style={{color: themeColor}}>
              Patient Reviews
            </h3>
            <div className="row g-4">
              {[
                { 
                  name: "Rahul Sharma", 
                  review: "Excellent care and very professional doctors. The treatment was effective and the staff was very supportive throughout my recovery.", 
                  rating: 5 
                },
                { 
                  name: "Anita Verma", 
                  review: "Clean facilities and well explained treatment plan. The doctors took time to answer all my questions.", 
                  rating: 4 
                },
                { 
                  name: "Karthik R", 
                  review: "Highly recommended. Quick diagnosis and friendly staff. The entire process was smooth and efficient.", 
                  rating: 5 
                }
              ].map((r, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm rounded-4" style={{borderTop: `4px solid ${themeColor}`}}>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="rounded-circle p-2 me-3"
                          style={{backgroundColor: themeColorLightBg}}
                        >
                          <i className="bi bi-person-circle fs-3" style={{color: themeColor}}></i>
                        </div>
                        <div>
                          <h5 className="fw-bold mb-0" style={{color: themeColor}}>{r.name}</h5>
                          <div className="text-warning fs-5">
                            {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted fs-5 lh-base">{r.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BACK TO SPECIALTIES ================= */}
        <div className="text-center mb-4 pt-3">
          <Link 
            to="/specialties" 
            className="btn btn-lg rounded-pill px-5 py-2"
            style={{
              border: `2px solid ${themeColor}`,
              color: themeColor,
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = themeColor;
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = themeColor;
            }}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Specialties
          </Link>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer 
        className="py-5 mt-5"
        style={{backgroundColor: themeColor}}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h4 className="fw-bold display-6 mb-3 text-white">VV Care Hospital</h4>
              <p className="text-white fs-5 lh-base opacity-75">
                Providing compassionate and advanced healthcare since 1994. 
                Your health is our priority.
              </p>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="fw-bold fs-4 mb-3 text-white">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link to="/" className="text-white text-decoration-none fs-5 d-flex align-items-center opacity-75 hover-opacity-100">
                    <i className="bi bi-house-door me-2 fs-5"></i>Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/specialties" className="text-white text-decoration-none fs-5 d-flex align-items-center opacity-75 hover-opacity-100">
                    <i className="bi bi-heart-pulse me-2 fs-5"></i>Specialties
                  </Link>
                </li>
                <li className="mb-3">
                  <Link to="/doctors" className="text-white text-decoration-none fs-5 d-flex align-items-center opacity-75 hover-opacity-100">
                    <i className="bi bi-person-badge me-2 fs-5"></i>Doctors
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="fw-bold fs-4 mb-3 text-white">Contact Us</h5>
              <ul className="list-unstyled text-white opacity-75">
                <li className="mb-3 d-flex align-items-center fs-5">
                  <i className="bi bi-geo-alt me-2 fs-5"></i>
                  <span>123 Health Street, Medical City</span>
                </li>
                <li className="mb-3 d-flex align-items-center fs-5">
                  <i className="bi bi-telephone me-2 fs-5"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="d-flex align-items-center fs-5">
                  <i className="bi bi-envelope me-2 fs-5"></i>
                  <span>info@vvcarehospital.com</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-white border-opacity-25 my-4" />
          <div className="text-center">
            <p className="text-white fs-5 mb-0 opacity-75">
              © 2024 VV Care Hospital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SpecialtyPage;