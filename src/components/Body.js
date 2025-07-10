import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resObj } from "./utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  return (
    <div>
      <div className="search">
        Search
        <input />
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top listed Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((x) => (
          <RestaurantCard key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
