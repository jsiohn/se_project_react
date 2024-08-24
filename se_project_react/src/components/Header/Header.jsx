import "./Header.css";
import logo from "../../assets/wtwrLogo.svg";
import avatar from "../../assets/profilePic.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="wtwr logo" className="header__logo" />
      <p className="header__datelocation">DATE, LOCATION</p>
      <button className="header__add-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="profile avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
