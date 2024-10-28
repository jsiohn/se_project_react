import "./SideBar.css";
import avatar from "../../assets/profilePic.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
      <button type="button">Change profile data</button>
    </div>
  );
}

export default SideBar;
