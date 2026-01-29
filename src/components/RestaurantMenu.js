import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const item = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (item === null) return <Shimmer />;

  const { name, cuisines } = item.cards[2].card.card.info;

  const categories =
    item?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="text-center m-6">
      <h1 className="font-bold text-lg m-4">{name}</h1>
      <h5 className="font-bold  m-4">{cuisines.join(", ")}</h5>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index === showIndex ? "" : index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
