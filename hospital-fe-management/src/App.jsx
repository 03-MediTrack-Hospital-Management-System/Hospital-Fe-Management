import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import ProtectedRoute from "./components/Common/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import PatientDashboard from "./pages/PatientDashboard";
import PatientAppointments from "./pages/PatientAppointments";
import PatientReports from "./pages/PatientReports";
import PatientProfile from "./pages/PatientProfile";
import PatientSettings from "./pages/PatientSettings";
import PatientFeedback from "./pages/PatientFeedback";

import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorAppointmentsPage from "./pages/DoctorAppointmentsPage";
import DoctorPatientsPage from "./pages/DoctorPatientsPage";
import DoctorProfile from "./pages/DoctorProfile";

import Admin from "./pages/Admin";
import AdminDoctors from "./pages/AdminDoctors";
import AdminPatients from "./pages/AdminPatients";
import AdminSettings from "./pages/AdminSettings";
import AdminAddDoctor from "./pages/AdminAddDoctor";

import ReceptionDashboard from "./pages/ReceptionDashboard";
import Inventory from "./pages/Inventory";
import UserProfilePage from "./pages/UserProfile";
import SpecialtyPage from "./pages/SpecialtyPage";

function App() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <BrowserRouter>


      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/specialty/:id" element={<SpecialtyPage />} />

        {/* Patient */}
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

        {/* Doctor */}
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

        {/* Admin */}
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
        <Route
          path="/admin/doctors/add"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminAddDoctor />
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

        {/* Reception */}
        <Route
          path="/reception"
          element={
            <ProtectedRoute role="RECEPTION">
              <ReceptionDashboard />
            </ProtectedRoute>
          }
        />

        {/* Profile */}
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
