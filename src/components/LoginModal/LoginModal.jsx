import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleLogin, closeActiveModal, isOpen }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      onClose={closeActiveModal}
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
        value={data.email}
        onChange={handleChange}
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
        value={data.password}
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  );
};

export default LoginModal;
