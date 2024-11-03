import "./LoginModal.css";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleLogin, onClose, isOpen, handleRegisterClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged In");
    handleLogin({ email, password });
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email{" "}
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
        Password{" "}
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
      <button
        type="button"
        className="login__register-link"
        onClick={handleRegisterClick}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
