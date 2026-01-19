export default function SectionCard({ title, subtitle, icon, action, children }) {
  return (
    <div className="section-card">
      <div className="section-header">
        <div className="section-left">
          <div className="section-icon">{icon}</div>
          <div>
            <h5>{title}</h5>
            <small>{subtitle}</small>
          </div>
        </div>
        {action}
      </div>

      <div className="section-body">{children}</div>
    </div>
  );
}
