import Link from "next/link";
import React from "react";
import { logoName } from "../constants";
import { HiOutlineShoppingCart, HiOutlineXCircle } from "react-icons/hi";

import Cart from "./Cart";
import { useShoppingCart } from "../context/ShopContext";
import Image from "next/image";

const Navbar = () => {
  const { showCart, setShowCart, cartState } = useShoppingCart();
  return (
    <div
      className="
      sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
      bg-base-100 text-base-content shadow-sm
      
   "
    >
      <nav className=" navbar w-full ">
        <div className="flex flex-1">
          <div>
            <Image src={"/jtfplogo2.png"} width="50" height="50" />
          </div>
          <Link href={"/"}>
            <a className="btn sm:flex   btn-ghost normal-case sm:text-xl">
              <div className="font-title text-primary inline-flex  transition-all duration-200 md:text-3xl">
                {logoName}
              </div>
            </a>
          </Link>
        </div>

        <div className="flex-0">
          <di>
            <Link href={"/support"}>
              <a className="btn btn-ghost  normal-case ">
                <div className="tfont-title text-primary inline-flex  transition-all duration-200 md:text-3xl">
                  {" "}
                  Contact us
                </div>
              </a>
            </Link>
          </di>
          <button
            className=" cursor-pointer"
            onClick={() => setShowCart((prev) => !prev)}
          >
            <div className="indicator">
              {cartState?.cart?.length > 0 ? (
                <span className="indicator-item badge badge-secondary text-xs">
                  {cartState.cart.length}
                </span>
              ) : null}
              <label
                htmlFor="my-drawer"
                className="btn btn-square btn-ghost drawer-button "
              >
                <HiOutlineShoppingCart
                  size={"1.5rem"}
                  className="transition-all duration-200"
                />
              </label>
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
