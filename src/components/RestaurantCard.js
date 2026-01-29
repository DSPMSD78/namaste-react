import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const {
    name,
    avgRatingString,
    cloudinaryImageId,
    sla,
    costForTwo,
    cuisines,
  } = resData?.info;
  return (
    <div className="bg-[#f3f0f0] mx-auto w-[280px] h-88 p-[0.25%] hover:border hover:border-black hover:cursor-pointer">
      <img className="w-full h-[60%]" src={CDN_URL + cloudinaryImageId}></img>
      <div className="flex flex-col justify-start items-start gap-[10px] w-full">
        <h4 className="res-name">{name}</h4>
        <h5>
          {avgRatingString} stars ~ {sla.deliveryTime} MINS ~ {costForTwo}
        </h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>User : {loggedInUser}</h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div>
      <span className="absolute bg-black text-white m-1 p-2">Promoted</span>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
