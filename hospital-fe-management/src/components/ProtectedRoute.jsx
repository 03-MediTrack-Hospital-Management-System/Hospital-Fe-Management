import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

if (role && user.role !== role) {
  if (user.role === "ADMIN") return <Navigate to="/admin" replace />;
  if (user.role === "DOCTOR") return <Navigate to="/doctor" replace />;
  if (user.role === "PATIENT") return <Navigate to="/patient" replace />;
}


  return children;
}
