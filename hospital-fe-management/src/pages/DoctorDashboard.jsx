import DoctorSidebar from "../components/DoctorComponent/DoctorSidebar";
import DoctorOverview from "../components/DoctorComponent/DoctorOverview";
import DoctorStats from "../components/DoctorComponent/DoctorStats";
import DoctorPatients from "../components/DoctorComponent/DoctorPatients";
import DoctorAppointments from "../components/DoctorComponent/DoctorAppointments";
import GlobalHeader from "../components/Common/GlobalHeader";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="container-fluid min-vh-100 bg-light p-0">
      {/* Header */}
      <GlobalHeader onLogout={handleLogout} />

      <div className="row g-0 min-vh-100">
        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 bg-white border-end">
          <DoctorSidebar />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 p-4 overflow-auto">
          {/* Page Header */}
          <div className="mb-4">
            <h1 className="fw-bold text-primary">Doctor Dashboard</h1>
            <p className="text-muted mb-0">
              Welcome back, Dr. John Doe. Here's your overview for today.
            </p>
          </div>

          {/* Dashboard Content */}
          <div className="row g-4">
            {/* Left Section */}
            <div className="col-12 col-lg-8">
              <div className="mb-4">
                <DoctorOverview />
              </div>

              <div className="mb-4">
                <DoctorStats />
              </div>

              <div>
                <DoctorPatients />
              </div>
            </div>

            {/* Right Section */}
            <div className="col-12 col-lg-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold text-primary mb-3">
                    Today’s Schedule
                  </h5>
                  <DoctorAppointments />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
