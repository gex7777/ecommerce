import Link from "next/link";
import React, { useState, useEffect } from "react";
import { logoName } from "../constants";
import { HiOutlineShoppingCart, HiOutlineXCircle } from "react-icons/hi";

import Cart from "./Cart";
import { useShoppingCart } from "../context/ShopContext";
import Image from "next/image";

const Navbar = () => {
  const { totalQuantity, setShowCart } = useShoppingCart();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={`
      sticky ${
        visible ? "top-0 motion-safe:animate-fadeIn" : ""
      } z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
      bg-base-100 text-base-content shadow-sm 
      
   `}
    >
      <nav className=" navbar w-full ">
        <div className="flex flex-1">
          <div>
            <Image src={"/jtfplogo2.png"} width="50" height="50" />
          </div>
          <Link href={"/"}>
            <a className="btn sm:flex   btn-ghost normal-case ">
              <div className="font-title text-primary inline-flex   transition-all duration-200 md:text-3xl">
                <div className="truncate ... max-w-[100px] sm:max-w-full">
                  {logoName}
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="flex-0">
          <div>
            <Link href={"/support"}>
              <a className="btn btn-ghost  normal-case ">
                <div className="font-title text-primary inline-flex  transition-all duration-200 md:text-3xl">
                  Contact us
                </div>
              </a>
            </Link>
          </div>
          <button
            className=" btn btn-ghost cursor-pointer"
            onClick={() => setShowCart((pre) => !pre)}
          >
            <div className="indicator">
              {totalQuantity > 0 ? (
                <span className="indicator-item badge badge-secondary text-xs">
                  {totalQuantity}
                </span>
              ) : null}

              <HiOutlineShoppingCart
                size={"1.5rem"}
                className="transition-all duration-200"
              />
            </div>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
