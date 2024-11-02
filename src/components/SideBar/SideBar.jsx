import "./SideBar.css";
import avatar from "../../assets/profilePic.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ isLoggedIn, handleLogout, handleEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar}
          alt={currentUser?.name}
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <div className="sidebar__btn-container">
        <button
          type="button"
          className="sidebar__edit-profile-btn"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="sidebar__logout-btn"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
