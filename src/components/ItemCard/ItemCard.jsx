import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, isLoggedIn, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = isLiked ? "card__like_active" : "card__like";

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike(item._id, isLiked);
  };

  return (
    <li className="card">
      <div className="card__title-wrapper">
        <h2 className="card__name">{item.name}</h2>
        <button
          className={isLoggedIn ? itemLikeButtonClassName : "hidden"}
          type="button"
          onClick={handleLike}
        ></button>
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;
