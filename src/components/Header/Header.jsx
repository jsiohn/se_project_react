import "./Header.css";
import logo from "../../assets/wtwrLogo.svg";
import avatar from "../../assets/profilePic.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleLoginClick,
  handleRegisterClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  return (
    <header className="header">
      <div className="header__logo-datelocation-container">
        <Link to="/">
          <img src={logo} alt="wtwr logo" className="header__logo" />
        </Link>
        <p className="header__datelocation">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          // className="header__add-btn"
          className={`header__add-btn ${
            !isLoggedIn ? "header__add-btn_hidden" : ""
          }`}
          type="button"
          onClick={handleAddClick}
        >
          + Add clothes
        </button>
        {isLoggedIn ? (
          <Link to="/profile" className="header__link">
            <p className="header__username">{currentUser?.name}</p>
            <img
              src={currentUser?.avatarUrl}
              alt={currentUser?.name}
              className="header__avatar"
            />
          </Link>
        ) : (
          <div className="header__auth">
            <button className="header__register" onClick={handleRegisterClick}>
              Sign Up
            </button>
            <button className="header__login" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
