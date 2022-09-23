import Link from "next/link";
import React from "react";
import { logoName } from "../constants";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useStateContext } from "../context/StateContext";
import Cart from "./cart";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar bg-base-100 backdrop-blur-sm bg-opacity-90 ">
      <div className="flex-1">
        <Link href={"/"}>
          <a className="btn btn-ghost normal-case text-xl">{logoName}</a>
        </Link>
      </div>
      {/*TODO:make new cart componnt */}
      <button
        className="mr-8 cursor-pointer"
        onClick={() => setShowCart((prev) => !prev)}
      >
        <div className="indicator">
          {totalQuantities > 1 ? (
            <span className="indicator-item badge badge-secondary text-xs">
              {totalQuantities}
            </span>
          ) : null}
          <HiOutlineShoppingCart className="text-3xl cursor-pointer" />
        </div>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
