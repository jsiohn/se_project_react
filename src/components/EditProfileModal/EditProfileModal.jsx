import { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, closeActiveModal, onProfileSubmit }) => {
  const currentUser = useContext(CurrentUserContext);
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
    onProfileSubmit({ name, avatar });
  }

  return (
    <ModalWithForm
      title="Change Profile Data"
      buttonText="Save Changes"
      isOpen={isOpen}
      onClose={closeActiveModal}
      onSubmit={handleProfileSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          required
          value={currentUser.name}
          type="text"
          className="modal__input"
          id="name"
          placeholder={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatar" className="modal__label">
        Avatar{" "}
        <input
          required
          value={currentUser.avatar}
          type="url"
          className="modal__input"
          id="avatar"
          placeholder={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
