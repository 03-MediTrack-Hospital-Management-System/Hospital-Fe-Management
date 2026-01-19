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
import Doctor from "./pages/Doctor";
import PatientDashboard from "./pages/PatientDashboard";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function Layout() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/patient" ||
    location.pathname === "/doctor" ||
    location.pathname === "admin";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route   path="/patient"element={ <ProtectedRoute role="PATIENT"><PatientDashboard />  </ProtectedRoute> } />

        <Route
          path="/doctor"
          element={
            <ProtectedRoute role="DOCTOR">
              <Doctor />
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
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
