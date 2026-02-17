import "../../styles/admin.css";
import { FaSave } from "react-icons/fa";
import AdminSidebar from "../../components/AdminComponent/AdminSidebar";
import Footer from "../../components/Common/Footer";

export default function AdminSettings() {
  return (
    <>
      <div className="mb-4">
        <h4 className="mb-0 fw-bold">Settings</h4>
        <small className="text-muted">Manage system preferences</small>
      </div>

      <div className="card shadow-sm border-0 p-4">
        <h5>Hospital Information</h5>

        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <label className="form-label">Hospital Name</label>
            <input className="form-control" defaultValue="VV Care Hospital" />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input className="form-control" defaultValue="admin@vvcare.com" />
          </div>
        </div>

        <div className="mt-4 text-end">
          <button className="btn btn-primary">
            <FaSave /> Save Changes
          </button>
        </div>
      </div>
    </>
  );

}
