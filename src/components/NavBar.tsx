import { ShoppingCartSimple } from "@phosphor-icons/react";
import img1 from "../images/React-iconfr.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-gray-900 px-4 sticky top-0">
      <img src={img1} className="box-content h-14 w-16 px-4 py-2" />
      <div className="text-white flex justify-between pt-3">
        <Link to="/" className="pr-4 pt-1 text-2xl underline underline-offset-2">Shop</Link>
        <Link to="/cart">
          <ShoppingCartSimple size={44} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
