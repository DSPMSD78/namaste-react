import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const json = await fetch(MENU_API + resId);
    const res = await json.json();
    setItem(res.data);
  };
  return item;
};

export default useRestaurantMenu;
