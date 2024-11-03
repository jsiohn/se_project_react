import "./SideBar.css";
import Avatar from "../Avatar/Avatar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";

function SideBar({ handleLogout, handleEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isSidebar = useState(true);
  return (
    <div className="sidebar">
      <div className="sidebar__user-container">
        <Avatar isSidebar={isSidebar} />
        {/* {currentUser?.avatar ? (
          <img
            className="sidebar__avatar"
            src={currentUser?.avatar}
            alt={currentUser?.name}
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {currentUser?.name ? currentUser?.name[0].toUpperCase() : ""}
          </div>
        )} */}
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
