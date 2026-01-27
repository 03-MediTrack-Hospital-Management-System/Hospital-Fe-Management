import { FaPeopleGroup, FaHouse } from "react-icons/fa6";
import { MdOutlineEmojiPeople } from "react-icons/md";

export default function OverviewCards() {
  return (
    <div className="cards-container">
      <div className="overview-card pink">
        <FaPeopleGroup />
        <p>Total Staff</p>
        <h2>150</h2>
      </div>

      <div className="overview-card blue">
        <MdOutlineEmojiPeople />
        <p>Total Patients</p>
        <h2>950</h2>
      </div>

      <div className="overview-card green">
        <FaHouse />
        <p>Total Rooms</p>
        <h2>250</h2>
      </div>
    </div>
  );
}
