import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const item = useRestaurantMenu(resId);

  if (item === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = item.cards[2].card.card.info;
  const { itemCards } =
    item?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="p-[2%]">
      <h1>{name}</h1>
      <h4>{costForTwoMessage}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <ul>
        {itemCards.map((x) => {
          return (
            <li key={x?.card?.info?.id}>
              {x?.card?.info?.name} ₹
              {x?.card?.info?.price / 100 || x?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
