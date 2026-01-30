import React from 'react';
import { FaChartLine, FaArrowUp } from 'react-icons/fa';
import "../../styles/components/DoctorStats.css";

export default function DoctorStats() {
  const weeklyData = [
    { day: "Mon", patients: 12, max: 20 },
    { day: "Tue", patients: 18, max: 20 },
    { day: "Wed", patients: 15, max: 20 },
    { day: "Thu", patients: 20, max: 20 },
    { day: "Fri", patients: 24, max: 30 },
    { day: "Sat", patients: 10, max: 30 },
    { day: "Sun", patients: 5, max: 30 },
  ];

  return (
    <div className="dr-stats-container">
      <div className="dr-stats-header">
        <h3><FaChartLine /> Patient Activity (Weekly)</h3>
        <div className="trend-up">
          <FaArrowUp size={12} /> 15%
        </div>
      </div>

      <div className="dr-stats-chart">
        {weeklyData.map((data, idx) => (
          <div key={idx} className="chart-column">
            <div className="bar-wrapper">
              <div
                className="bar-fill"
                style={{ height: `${(data.patients / data.max) * 100}%` }}
              ></div>
            </div>
            <span className="day-label">{data.day}</span>
          </div>
        ))}
      </div>

      <div className="stats-summary">
        You've seen <strong style={{ color: '#0f172a' }}>104 patients</strong> this week so far.
      </div>
    </div>
  );
}
