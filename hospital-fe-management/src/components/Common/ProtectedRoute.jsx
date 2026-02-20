import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const userRole = user.role?.startsWith("ROLE_") ? user.role.substring(5) : user.role;

  if (role && userRole !== role) {
    if (userRole === "ADMIN") return <Navigate to="/admin" replace />;
    if (userRole === "DOCTOR") return <Navigate to="/doctor" replace />;
    if (userRole === "PATIENT") return <Navigate to="/patient" replace />;
  }


  return children;
}
