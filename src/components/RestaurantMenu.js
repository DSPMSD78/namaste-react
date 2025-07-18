import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "./utils/constants";

const RestaurantMenu = () => {
  const [item, setItem] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const json = await fetch(MENU_API + resId);
    const res = await json.json();
    setItem(res.data);
    console.log(res.data);
  };

  if (item === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = item.cards[2].card.card.info;
  const { itemCards } =
    item?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div>
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
