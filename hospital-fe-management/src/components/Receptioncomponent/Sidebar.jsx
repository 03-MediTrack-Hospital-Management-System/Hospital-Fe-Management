export default function Sidebar() {
  return (
    <aside className="patient-dashboard-content-left">
      <h3>General</h3>

      <div className="menu-item active">Dashboard</div>
      <div className="menu-item">Patients</div>
      <div className="menu-item">Appointments</div>
      <div className="menu-item">Reports</div>

      
      <div className="menu-item">Logout</div>
    </aside>
  );
}
