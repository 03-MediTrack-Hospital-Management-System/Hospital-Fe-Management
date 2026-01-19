export default function StatCard({ icon, title, value, subtitle, active }) {
  return (
    <div className={`stat-card ${active ? "active" : ""}`}>
      <div className="stat-icon">{icon}</div>
      <div>
        <h6>{title}</h6>
        <p className="stat-sub">{subtitle}</p>
      </div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
