import "./ModalWithForm.css";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" && "modal__opened"}`}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <form className="modal__form">{children}</form>
        <button className="modal__submit" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
