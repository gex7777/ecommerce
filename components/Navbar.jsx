import Link from "next/link";
import React from "react";
import { logoName } from "../constants";
import { HiOutlineShoppingCart, HiOutlineXCircle } from "react-icons/hi";

import Cart from "./Cart";
import { useShoppingCart } from "../context/ShopContext";

const Navbar = () => {
  const { showCart, setShowCart, cartState } = useShoppingCart();
  return (
    <div className="px-5 py-2 flex justify-between bg-base-100 backdrop-blur-sm bg-opacity-90 ">
      <Link href={"/"}>
        <a className="btn btn-ghost normal-case text-xl">{logoName}</a>
      </Link>

      {/*TODO:make new cart componnt */}
      <button
        className="mr-8 cursor-pointer"
        onClick={() => setShowCart((prev) => !prev)}
      >
        <div className="indicator">
          {cartState?.cart?.length > 0 ? (
            <span className="indicator-item badge badge-secondary text-xs">
              {cartState.cart.length}
            </span>
          ) : null}
          {!showCart ? (
            <HiOutlineShoppingCart className="text-3xl cursor-pointer" />
          ) : (
            <HiOutlineXCircle className="text-3xl cursor-pointer" />
          )}
        </div>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
