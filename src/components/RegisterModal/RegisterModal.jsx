import "./RegisterModal.css";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleRegistration,
  onClose,
  isOpen,
  handleLoginClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ email, password, name, avatar });
    handleRegistration({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email*{" "}
      </label>
      <input
        type="email"
        className="modal__input"
        id="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="password" className="modal__label">
        Password*{" "}
      </label>
      <input
        type="password"
        className="modal__input"
        id="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <label htmlFor="name" className="modal__label">
        Name*{" "}
      </label>
      <input
        type="text"
        className="modal__input"
        id="name"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL*{" "}
      </label>
      <input
        type="url"
        className="modal__input"
        id="avatarUrl"
        placeholder="Avatar URL"
        value={avatar}
        onChange={handleAvatarChange}
      />
      <button
        type="button"
        className="register__login-link"
        to="login"
        onClick={handleLoginClick}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};

export default RegisterModal;
