import { FaUsers, FaUserMd, FaMoneyBill } from "react-icons/fa";

export default function AdminOverview() {
  return (
    <div className="cards-container">
      <div className="overview-card blue">
        <FaUsers />
        <h2>3</h2>
        <p>Total Patients</p>
      </div>

      <div className="overview-card green">
        <FaUserMd />
        <h2>3</h2>
        <p>Active Doctors</p>
      </div>

      <div className="overview-card pink">
        <FaMoneyBill />
        <h2>$750</h2>
        <p>Total Revenue</p>
      </div>
    </div>
  );
}
