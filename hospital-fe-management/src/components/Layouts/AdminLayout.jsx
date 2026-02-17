import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../AdminComponent/AdminSidebar";
import GlobalHeader from "../Common/GlobalHeader";
import Footer from "../Common/Footer";

export default function AdminLayout() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid min-vh-100 p-0 bg-light">
            <GlobalHeader
                user={{ name: "Admin User", role: "Administrator" }}
                onLogout={() => navigate("/login")}
            />

            <div className="row g-0 min-vh-100">
                <div className="col-12 col-md-3 col-lg-2 border-end bg-white">
                    <AdminSidebar />
                </div>

                <div className="col-12 col-md-9 col-lg-10 p-4 overflow-auto">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
