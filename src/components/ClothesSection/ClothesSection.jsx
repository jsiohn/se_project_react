import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ClothesSection({
  onCardClick,
  clothingItems,
  handleAddClick,
  isLoggedIn,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );
  return (
    <div className="clothes-section">
      <div className="clothes-section__text-container">
        <p className="clothes-section__title">Your items</p>
        <button className="clothes-section__add-btn" onClick={handleAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {userItems.length > 0 ? (
          userItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              isLoggedIn={isLoggedIn}
            />
          ))
        ) : (
          <p className="clothes-section__title">No items found</p>
        )}
      </ul>
    </div>
  );
}

export default ClothesSection;
