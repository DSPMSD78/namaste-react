import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4325894&lng=78.4070691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search">
        <input
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            setFilteredRestaurant(
              listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          setFilteredRestaurant(
            listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
          );
        }}
      >
        Top listed Restaurants
      </button>

      <div className="res-container">
        {filteredRestaurants.map((x) => (
          <RestaurantCard key={x.info.id} resData={x} />
        ))}
      </div>
    </div>
  );
};

export default Body;
