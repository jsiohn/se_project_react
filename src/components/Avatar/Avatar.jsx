import "./Avatar.css";
import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Avatar() {
  const currentUser = useContext(CurrentUserContext);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {hasError ? (
        <div className="avatar__placeholder">
          {currentUser?.name ? currentUser?.name[0].toUpperCase() : ""}
        </div>
      ) : (
        <img
          src={currentUser?.avatar}
          alt={currentUser?.name}
          className="avatar"
          onError={() => setHasError(true)}
        />
      )}
    </>
  );
}

export default Avatar;
