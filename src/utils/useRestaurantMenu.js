import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const json = await fetch(MENU_API + resId);
    console.log(json);
    const res = await json.json();
    setItem(res.data);
    console.log(res.data);
  };
  return item;
};

export default useRestaurantMenu;
