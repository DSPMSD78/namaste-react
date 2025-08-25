import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const list = useRestaurantList();
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const status = useOnlineStatus();

  useEffect(() => {
    if (list.length > 0) {
      setFilteredRestaurant(list);
    }
  }, [list]);

  if (!status) {
    return <h1>You are offline </h1>;
  }

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-full">
      <div className="p-[2%]">
        <input
          className="border border-gray-300"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="mx-[2%] px-[1%] py-[0.25%] cursor-pointer rounded-md shadow-md hover:bg-gray-600"
          onClick={() => {
            setFilteredRestaurant(
              list.filter((res) =>
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
        className="mx-[2%] px-[1%] py-[0.25%] cursor-pointer rounded-md shadow-md hover:bg-gray-600"
        onClick={() => {
          setFilteredRestaurant(list.filter((res) => res.info.avgRating > 4.5));
        }}
      >
        Top listed Restaurants
      </button>

      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))] gap-[1%] p-[2%] max-w-full mx-auto">
        {filteredRestaurants.map((x) => (
          <Link key={x.info.id} to={"/restaurants/" + x.info.id}>
            <RestaurantCard resData={x} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
