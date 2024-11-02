import { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose, handleProfileEdit }) => {
  // const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleProfileSubmit(e) {
    e.preventDefault();
    handleProfileEdit({ name, avatar });
  }

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleProfileSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          required
          value={name}
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar{" "}
        <input
          required
          value={avatar}
          type="url"
          className="modal__input"
          id="avatar"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
