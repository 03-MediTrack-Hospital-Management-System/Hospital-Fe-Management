import "../../styles/admin.css";
import { FaSave } from "react-icons/fa";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";

export default function AdminSettings() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">

      {/* HEADER */}
      <header className="bg-white border-bottom px-4 py-3">
        <div>
          <h4 className="mb-0 fw-bold">Settings</h4>
          <small className="text-muted">Manage system preferences</small>
        </div>
      </header>

      <div className="flex-grow-1 d-flex">
        <div className="d-none d-md-block col-md-3 col-lg-2 border-end bg-white">
          <AdminSidebar />
        </div>

        <div className="col p-4">
          <div className="card p-4">
            <h5>Hospital Information</h5>

            <div className="row g-3 mt-2">
              <div className="col-md-6">
                <label>Hospital Name</label>
                <input className="form-control" defaultValue="VV Care Hospital" />
              </div>

              <div className="col-md-6">
                <label>Email</label>
                <input className="form-control" defaultValue="admin@vvcare.com" />
              </div>
            </div>

            <div className="mt-4 text-end">
              <button className="btn btn-primary">
                <FaSave /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
