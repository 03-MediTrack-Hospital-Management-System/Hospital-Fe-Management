import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function PatientChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Patients",
        data: [120, 190, 300, 500, 200, 300, 450],
        borderColor: "#008080", 
        backgroundColor: "rgba(0, 128, 128, 0.1)",
        tension: 0.4, 
        fill: true,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#008080",
        pointHoverBackgroundColor: "#008080",
        pointHoverBorderColor: "#fff",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#f3f4f6",
        bodyColor: "#f3f4f6",
        padding: 10,
        cornerRadius: 8,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        grid: {
          borderDash: [5, 5], 
          color: "#e5e7eb",
        },
        ticks: {
          color: "#6b7280",
          stepSize: 100,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-card" style={{ height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ marginBottom: '15px' }}>Patient Activity</h3>
      <div style={{ flex: 1, position: 'relative', width: '100%' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}