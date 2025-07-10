import { CDN_URL } from "./utils/constants";

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
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <div className="res-details">
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
