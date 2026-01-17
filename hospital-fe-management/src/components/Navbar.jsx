import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function gotoLogin() {
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <div className="logo-icon">♥</div>
          <div>
            <h3>VV Care Hospitals</h3>
            <span>Excellence in Healthcare</span>
          </div>
        </div>

        <div className="nav-actions">
          <button className="login-btn" onClick={gotoLogin}>
            Login
          </button> 
          <button className="login-btn" onClick={() => navigate("/signup")}>
            signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
