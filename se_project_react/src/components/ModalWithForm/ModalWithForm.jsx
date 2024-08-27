import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New Garment</h2>
        <button className="modal__close" type="button"></button>
        <form className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name{" "}
          </label>
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
          </label>
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label htmlFor="hot" className="modal__label_type_radio">
              <input type="radio" className="modal__radio-input" id="hot" /> Hot
            </label>
            <label htmlFor="warm" className="modal__label_type_radio">
              <input type="radio" className="modal__radio-input" id="warm" />{" "}
              Warm
            </label>
            <label htmlFor="cold" className="modal__label_type_radio">
              <input type="radio" className="modal__radio-input" id="cold" />{" "}
              Cold
            </label>
          </fieldset>
        </form>
        <button className="modal__submit" type="submit">
          Add garment
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
