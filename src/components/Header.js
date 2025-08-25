import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  let btnName = "Login";
  const status = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="relative top-0 left-0 w-full py-5 px-10 flex justify-between items-center border border-black">
      <div className="h-8 w-8">
        <img className="w-full h-full" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex gap-x-10">
          <li>Online status : {status ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="cursor-pointer"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
