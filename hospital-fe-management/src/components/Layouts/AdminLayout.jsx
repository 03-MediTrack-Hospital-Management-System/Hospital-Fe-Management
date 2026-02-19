import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../AdminComponent/AdminSidebar";
import GlobalHeader from "../Common/GlobalHeader";
import Footer from "../Common/Footer";

export default function AdminLayout() {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="d-flex flex-column min-vh-100 bg-light overflow-hidden">
            <GlobalHeader
                user={{ name: "Admin User", role: "Administrator" }}
                onLogout={() => navigate("/login")}
            />

            <div className="d-flex flex-grow-1 overflow-hidden" style={{ minHeight: 0 }}>
                {/* Fixed width container that responds to sidebar state */}
                <div style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    width: isCollapsed ? '90px' : '260px',
                    flexShrink: 0,
                    zIndex: 100
                }}>
                    <AdminSidebar
                        isCollapsed={isCollapsed}
                        onToggle={() => setIsCollapsed(!isCollapsed)}
                    />
                </div>

                <div className="flex-grow-1 p-4 overflow-auto" style={{ minWidth: 0 }}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
}
