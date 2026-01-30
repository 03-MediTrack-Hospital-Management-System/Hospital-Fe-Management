import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Navbar() {
  const navigate = useNavigate();



  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 20) {
        navbar.classList.add('glass-effect', 'shadow-sm');
        navbar.classList.remove('bg-transparent', 'py-3');
        navbar.classList.add('py-2');
      } else {
        navbar.classList.add('bg-transparent', 'py-3');
        navbar.classList.remove('glass-effect', 'shadow-sm', 'py-2');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top transition-all py-3 animate-slide-down" style={{ transition: 'all 0.4s ease' }}>
      <div className="container">

        <div className="navbar-brand d-flex align-items-center gap-3 cursor-pointer hover-scale" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
          <div className="bg-dark text-white rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px' }}>
            <span className="fs-5">♥</span>
          </div>
          <div className="d-flex flex-column">
            <h3 className="m-0 fs-4 fw-bold text-dark tracking-tight">VV Care</h3>
            <span className="text-secondary fw-medium" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>HOSPITALS</span>
          </div>
        </div>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <div className="d-flex gap-4 mt-3 mt-lg-0 align-items-center">
            <button className="btn btn-link text-dark text-decoration-none fw-semibold px-3 hover-text-teal hover-underline-animation position-relative" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="btn btn-teal px-4 py-2 rounded-pill fw-bold shadow-sm hover-scale btn-shine" onClick={() => navigate("/signup")}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;