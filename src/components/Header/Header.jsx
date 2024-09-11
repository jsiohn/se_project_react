import "./Header.css";
import logo from "../../assets/wtwrLogo.svg";
import avatar from "../../assets/profilePic.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-datelocation-container">
        <img src={logo} alt="wtwr logo" className="header__logo" />
        <p className="header__datelocation">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__user-container">
        <ToggleSwitch />
        <button
          className="header__add-btn"
          type="button"
          onClick={handleAddClick}
        >
          + Add clothes
        </button>

        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="profile avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
