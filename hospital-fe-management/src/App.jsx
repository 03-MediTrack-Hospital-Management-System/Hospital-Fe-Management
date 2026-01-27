import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import "./styles/main.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/signup";
import PatientDashboard from "./pages/PatientDashboard";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfilePage from "./pages/UserProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import Inventory from "./pages/Inventory.jsx";
import ReceptionDashboard from "./pages/ReceptionDashboard.jsx";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/patient" ||
    location.pathname === "/doctor" ||
    location.pathname === "/admin" ||
    location.pathname === "/profile" ||
    location.pathname === "/admin/inventory"||
    location.pathname === "/reception";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/patient"
          element={
            <ProtectedRoute role="PATIENT">
              <PatientDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/profile" element={<UserProfilePage />} />

        <Route
          path="/doctor"
          element={
            <ProtectedRoute role="DOCTOR">
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/inventory"
          element={
            <ProtectedRoute role="ADMIN">
              <Inventory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reception"
          element={
            <ProtectedRoute role="RECEPTION">
              <ReceptionDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
