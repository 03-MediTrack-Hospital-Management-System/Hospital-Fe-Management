import { FaUserInjured, FaCalendarCheck, FaNotesMedical, FaCheckCircle } from "react-icons/fa";

export default function DoctorOverview() {
  const stats = [
    {
      title: "Patients Today",
      value: "24",
      icon: <FaUserInjured />,
      color: "#0b5c63",
      trend: "+12% from yesterday"
    },
    {
      title: "Upcoming Appts",
      value: "8",
      icon: <FaCalendarCheck />,
      color: "#1ea6a9",
      trend: "Next: 10:30 AM"
    },
    {
      title: "Consultations",
      value: "14",
      icon: <FaNotesMedical />,
      color: "#d44f8c",
      trend: "6 pending review"
    }
  ];

  return (
    <div className="dr-overview-grid">
      <style>{`
        .dr-overview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .dr-stat-card {
          background: #ffffff;
          padding: 24px;
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .dr-stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.04);
          border-color: #0b5c6322;
        }

        .dr-stat-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .dr-stat-info h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .dr-stat-info .stat-value {
          display: block;
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin: 4px 0;
        }

        .dr-stat-trend {
          font-size: 12px;
          font-weight: 500;
          color: #94a3b8;
        }
      `}</style>

      {stats.map((stat, idx) => (
        <div key={idx} className="dr-stat-card">
          <div className="dr-stat-icon-wrapper" style={{
            backgroundColor: `${stat.color}15`,
            color: stat.color
          }}>
            {stat.icon}
          </div>
          <div className="dr-stat-info">
            <h3>{stat.title}</h3>
            <span className="stat-value">{stat.value}</span>
            <p className="dr-stat-trend">{stat.trend}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

