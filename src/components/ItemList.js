import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (i) => {
    dispatch(addItem(i));
  };
  return (
    <div>
      {items.map((i) => (
        <div
          key={i?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="py-2 w-9/12">
              <span>{i?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {i?.card?.info?.price
                  ? i?.card?.info?.price / 100
                  : i?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-s">{i?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 h-auto">
              <div className="absolute">
                <button
                  onClick={() => handleAddItems(i)}
                  className="px-2 mx-5 rounded-lg bg-white shadow-lg cursor-pointer"
                >
                  Add
                </button>
              </div>
              <img
                className="w-full"
                src={CDN_URL + i?.card?.info?.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
