import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { location, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherAPI";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  getItems,
  addItem,
  deleteItem,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const onAddItem = (values) => {
    const jwt = localStorage.getItem("jwt");
    addItem(values, jwt)
      .then((newItem) => {
        console.log(values, newItem);
        setClothingItems([newItem.data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onDeleteItem = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems((items) =>
          items.filter((item) => item._id !== selectedCard._id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };

  const onCardLike = (id, isLiked) => {
    const jwt = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(id, jwt)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, jwt)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleRegistration = ({ name, avatar, email, password }) => {
    auth
      .register(name, avatar, email, password)
      .then(() => {
        handleLogin({ email, password });
        closeActiveModal();
      })
      .catch((err) => console.error("Error setting data", err));
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    auth
      .login({ email, password })
      .then((res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setIsLoggedIn(true);
          auth.getUserInfo(res.token).then((res) => {
            setCurrentUser(res);
            console.log(res);
            closeActiveModal();
            navigate("/profile");
          });
        }
      })
      .catch((err) => console.error("Login Failed", err));
  };

  const handleProfileEdit = ({ name, avatar }) => {
    const jwt = localStorage.getItem("jwt");
    auth
      .editProfile({ name, avatar }, jwt)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        setCurrentUser((prevUser) => ({
          ...prevUser,
          name,
          avatar,
        }));
        closeActiveModal();
        navigate("/profile");
      })
      .catch((err) => console.error("Cannot update profile", err));
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  useEffect(() => {
    getWeather(location, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        const clothingItems = data;
        setClothingItems(clothingItems);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getUserInfo(jwt)
        .then((user) => {
          console.log(user);
          setIsLoggedIn(true);
          setCurrentUser(user);
          // navigate("/profile");
        })
        .catch(console.error);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    isLoggedIn={isLoggedIn}
                    onCardLike={onCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute anonymous={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleAddClick={handleAddClick}
                      handleEditProfileClick={handleEditProfileClick}
                      handleLogout={handleLogout}
                      isLoggedIn={isLoggedIn}
                      handleProfileEdit={handleProfileEdit}
                      onCardLike={onCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
          {activeModal === "add-garment" && (
            <AddItemModal
              closeActiveModal={closeActiveModal}
              isOpen={activeModal === "add-garment"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              onClose={closeActiveModal}
              onDeleteItem={onDeleteItem}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              isOpen={activeModal === "register"}
              onClose={closeActiveModal}
              handleRegistration={handleRegistration}
              handleLoginClick={handleLoginClick}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={closeActiveModal}
              handleLogin={handleLogin}
              handleRegisterClick={handleRegisterClick}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              isOpen={activeModal === "edit"}
              onClose={closeActiveModal}
              handleProfileEdit={handleProfileEdit}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
