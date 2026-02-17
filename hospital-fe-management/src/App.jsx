import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import ProtectedRoute from "./components/Common/ProtectedRoute";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/signup";

import PatientDashboard from "./pages/PatientPages/PatientDashboard";
import PatientAppointments from "./pages/PatientPages/PatientAppointments";
import PatientReports from "./pages/PatientPages/PatientReports";
import PatientProfile from "./pages/PatientPages/PatientProfile";
import PatientSettings from "./pages/PatientPages/PatientSettings";
import PatientFeedback from "./pages/PatientPages/PatientFeedback";

import DoctorDashboard from "./pages/DoctorPages/DoctorDashboard";
import DoctorAppointmentsPage from "./pages/DoctorPages/DoctorAppointmentsPage";
import DoctorPatientsPage from "./pages/DoctorPages/DoctorPatientsPage";
import DoctorProfile from "./pages/DoctorPages/DoctorProfile";

import Admin from "./pages/AdminPages/Admin";
import AdminDoctors from "./pages/AdminPages/AdminDoctors";
import AdminPatients from "./pages/AdminPages/AdminPatients";
import AdminSettings from "./pages/AdminPages/AdminSettings";
import AdminAddDoctor from "./pages/AdminPages/AdminAddDoctor";

import ReceptionDashboard from "./pages/ReceptionPages/ReceptionDashboard";
import Inventory from "./pages/AdminPages/Inventory";
import AdminAddMedicine from "./pages/AdminPages/AdminAddMedicine";
import UserProfilePage from "./pages/PatientPages/UserProfile";
import AdminLayout from "./components/Layouts/AdminLayout";
import SpecialtyPage from "./pages/SpecialtyPage";

function App() {
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <BrowserRouter>


      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/specialty/:id" element={<SpecialtyPage />} />


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


        {/* Admin Portal with Persistent Layout */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="doctors/add" element={<AdminAddDoctor />} />
          <Route path="patients" element={<AdminPatients />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/add" element={<AdminAddMedicine />} />
        </Route>



        <Route
          path="/reception"
          element={
            <ProtectedRoute role="RECEPTION">
              <ReceptionDashboard />
            </ProtectedRoute>
          }
        />


        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
