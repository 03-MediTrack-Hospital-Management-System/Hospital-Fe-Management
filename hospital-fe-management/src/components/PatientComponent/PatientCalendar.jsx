import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../styles/components/PatientCalendar.css";

export default function PatientCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // Convert Sunday(0) → 6 so Monday starts first
  const firstDayOfMonth = (date) => {
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const prevMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );

  const nextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);
    const today = new Date();

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const isToday =
        i === today.getDate() &&
        currentDate.getMonth() === today.getMonth() &&
        currentDate.getFullYear() === today.getFullYear();

      const hasAppointment = [5, 12, 18, 25].includes(i);

      days.push(
        <div key={i} className={`calendar-day ${isToday ? "today" : ""}`}>
          {i}
          {hasAppointment && <span className="event-dot" />}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h3>
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h3>

        <div className="nav-buttons">
          <button onClick={prevMonth}>
            <FaChevronLeft size={12} />
          </button>
          <button onClick={nextMonth}>
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>

      <div className="weekdays">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="calendar-grid">{renderCalendarDays()}</div>
    </div>
  );
}
