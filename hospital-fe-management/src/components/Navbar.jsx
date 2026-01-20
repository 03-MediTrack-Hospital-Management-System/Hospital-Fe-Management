import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  function gotoLogin() {
    navigate("/login");
  }

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        document.querySelector('.navbar').classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        {/* Logo with click to home */}
        <div className="logo" onClick={() => navigate("/")}>
          <div className="logo-icon">♥</div>
          <div>
            <h3>VV Care Hospitals</h3>
            <span>Excellence in Healthcare</span>
          </div>
        </div>

        <div className="nav-actions">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button> 
          <button className="login-btn" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;