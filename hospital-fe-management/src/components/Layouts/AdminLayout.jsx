import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../AdminComponent/AdminSidebar";
import GlobalHeader from "../Common/GlobalHeader";
import Footer from "../Common/Footer";

export default function AdminLayout() {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [user, setUser] = useState({ name: "Admin User", role: "Administrator" });

    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            try {
                const parsed = JSON.parse(storedUser);
                setUser({
                    name: parsed.fullName || parsed.name || "Admin",
                    role: parsed.role === "ROLE_ADMIN" ? "Administrator" : parsed.role || "Staff"
                });
            } catch (e) {
                console.error("Error parsing user from storage", e);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        navigate("/login");
    };

    return (
        <div className="d-flex flex-column min-vh-100 bg-light overflow-hidden">
            <GlobalHeader
                user={user}
                onLogout={handleLogout}
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
