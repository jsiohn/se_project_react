import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ closeActiveModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add garment"
      onClose={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
      </label>
      <input
        type="text"
        className="modal__input"
        id="name"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
      </label>
      <input
        type="url"
        className="modal__input"
        id="imageUrl"
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleUrlChange}
      />
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label_type_radio">
          <input
            type="radio"
            name="weather-type"
            className="modal__radio-input"
            id="hot"
            value="hot"
            onChange={handleWeatherChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label_type_radio">
          <input
            type="radio"
            name="weather-type"
            className="modal__radio-input"
            id="warm"
            value="warm"
            onChange={handleWeatherChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label_type_radio">
          <input
            type="radio"
            name="weather-type"
            className="modal__radio-input"
            id="cold"
            value="cold"
            onChange={handleWeatherChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
