import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItems = (i) => {
    dispatch(removeItem(i));
  };

  return (
    <div className="w-6/12 mx-auto my-6">
      <div className="flex justify-center items-center gap-8 mb-6">
        <h1 className="text-2xl font-bold">Cart</h1>
        {"-"}
        <button
          onClick={handleClearCart}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Clear Cart
        </button>
      </div>
      <div className="text-center">
        {cartItems.length === 0 ? (
          <p className="font-bold text-2xl">No items</p>
        ) : (
          <div>
            {cartItems.map((i) => (
              <div
                data-testid="cartitem"
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
                        onClick={() => handleRemoveItems(i?.card?.info?.id)}
                        className="px-2 mx-5 rounded-lg bg-white shadow-lg cursor-pointer"
                      >
                        Remove
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
        )}
      </div>
    </div>
  );
};

export default Cart;
