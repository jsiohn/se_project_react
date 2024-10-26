import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleRegistration, closeActiveModal, isOpen }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
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
    handleRegistration(data);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
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
      <label htmlFor="name" className="modal__label">
        Name{" "}
      </label>
      <input
        type="text"
        className="modal__input"
        id="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL{" "}
      </label>
      <input
        type="url"
        className="modal__input"
        id="avatarUrl"
        placeholder="Avatar URL"
        value={data.avatarUrl}
        onChange={handleChange}
        required
      />
    </ModalWithForm>
  );
};

export default RegisterModal;
