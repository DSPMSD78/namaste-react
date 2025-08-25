import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
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
      </div>
    </div>
  );
};

export default RestaurantCard;
