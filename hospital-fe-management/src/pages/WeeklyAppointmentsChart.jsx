import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function WeeklyAppointmentsChart({ weeklyData }) {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: weeklyData,
        backgroundColor: "#14b8a6",
        borderRadius: 6,
        barThickness: 22, // ⬅ keeps bars small
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // ⬅ important for compact size
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 2 },
        grid: { display: false },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="card chart-card-small">
      <h3 className="section-title small">📊 Weekly Appointments</h3>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
