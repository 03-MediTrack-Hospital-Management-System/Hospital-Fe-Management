import { useEffect } from "react";
import Navbar from "./components/Common/Navbar";
import Landing from "./pages/Landing";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PatientDashboard from "./pages/PatientDashboard";
import PatientAppointments from "./pages/PatientAppointments";
import PatientReports from "./pages/PatientReports";
import PatientProfile from "./pages/PatientProfile";
import PatientSettings from "./pages/PatientSettings";
import PatientFeedback from "./pages/PatientFeedback";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import UserProfilePage from "./pages/UserProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import Inventory from "./pages/Inventory.jsx";
import ReceptionDashboard from "./pages/ReceptionDashboard.jsx";
import AdminDoctors from "./pages/AdminDoctors";
import AdminPatients from "./pages/AdminPatients";
import AdminSettings from "./pages/AdminSettings";
import DoctorAppointmentsPage from "./pages/DoctorAppointmentsPage";
import DoctorPatientsPage from "./pages/DoctorPatientsPage";
import DoctorProfile from "./pages/DoctorProfile";
import AdminAddDoctor from "./pages/AdminAddDoctor";
import SpecialtyPage from "./pages/SpecialtyPage";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname.startsWith("/patient") ||
    location.pathname.startsWith("/doctor") ||
    location.pathname.startsWith("/admin") ||
    location.pathname === "/profile" ||
    location.pathname === "/reception";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/specialty/:id" element={<SpecialtyPage />} />
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

        <Route
          path="/patient/appointments"
          element={
            <ProtectedRoute role="PATIENT">
              <PatientAppointments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/reports"
          element={
            <ProtectedRoute role="PATIENT">
              <PatientReports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/profile"
          element={
            <ProtectedRoute role="PATIENT">
              <PatientProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/settings"
          element={
            <ProtectedRoute role="PATIENT">
              <PatientSettings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patient/feedback"
          element={
            <ProtectedRoute role="PATIENT">
              <PatientFeedback />
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
          path="/doctor/appointments"
          element={
            <ProtectedRoute role="DOCTOR">
              <DoctorAppointmentsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/patients"
          element={
            <ProtectedRoute role="DOCTOR">
              <DoctorPatientsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/doctor/profile"
          element={
            <ProtectedRoute role="DOCTOR">
              <DoctorProfile />
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
          path="/admin/doctors"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDoctors />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/patients"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminPatients />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminSettings />
            </ProtectedRoute>
          }
        />

        <Route path="/admin/doctors/add" element={<AdminAddDoctor />} />

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
