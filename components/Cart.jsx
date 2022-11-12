import React from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useShoppingCart } from "../context/ShopContext";

import QuantityBtns from "./QuantityBtns";

import { REMOVE } from "./../context/shopReducer";
import { urlFor } from "../lib/client";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { setShowCart, cartState, totalPrice } = useShoppingCart();

  return (
    <>
      <label
        htmlFor="my-drawer"
        onClick={() => setShowCart(false)}
        className="drawer-overlay"
      ></label>

      <div
        className="top-0 right-0 pb-5  px-4 z-10 fixed  bg-base-100 backdrop-blur-sm bg-opacity-90 h-full  w-11/12 md:w-[30%] lg:w-[30%]
        "
      >
        <button
          className="flex btn-lg btn-ghost btn normal-case text-primary items-center p-5"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineArrowLeft />
          back to shoping
        </button>
        {cartState && cartState.cart.length > 0 ? (
          <div className="flex flex-col justify-between h-full pb-14">
            <ul className="  flex flex-col divide-y w-full max-h-[80%] overflow-y-scroll ">
              {cartState.cart.map((item) => {
                return (
                  <>
                    {item && (
                      <li key={item._id}>
                        <CartItem item={item} />
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
            <div className="flex flex-col">
              <div className="flex justify-between items-center pb-2 ">
                <div className="">Total</div>
                <div className="">₹{totalPrice}</div>
              </div>
              <div className="btn min-h-16 items-center">
                <span className="">checkout</span>
                <span>
                  <AiOutlineArrowRight size={29} />
                </span>{" "}
              </div>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default Cart;
const CartItem = ({ item: { name, quantity, size, variants, _id, image } }) => {
  const { dispatch } = useShoppingCart();

  const price = variants.find((varient) => varient.name === size).price;
  return (
    <div className=" grid grid-rows-3 grid-cols-[.7fr_1.4fr_1.4fr]  ">
      <div className="row-span-3   justify-self-center">
        <img
          className="object-contain h-28 w-28 p-2"
          src={urlFor(image)}
          alt="maw"
        />
      </div>
      <div className=" p-1  col-span-2 flex justify-between ">
        <div className="">{name}</div>
        <div className="">₹ {price * quantity}</div>
      </div>
      <div className="flex items-start justify-between col-span-2">
        <div className="flex items-center divide-x">
          <div className=" pr-1 ">₹{price}</div>
          <div
            className={`${
              variants.find((varient) => varient.name === size).instock
                ? "text-green-500"
                : "text-red-500"
            } pl-1 `}
          >
            {variants.find((varient) => varient.name === size).instock
              ? "in stock"
              : "not available"}
          </div>
        </div>
      </div>
      <div className="col-span-2  ">
        <div className="flex justify-between items-center">
          <div className="badge badge-outline ">{size}</div>

          <div className="btn-xs">
            <QuantityBtns
              product={{ name, quantity, size, variants, _id }}
              xs
            />
          </div>
          <button
            className="flex items-center btn  btn-xs btn-outline  text-red-600 "
            onClick={() =>
              dispatch({
                action: REMOVE,
                product: { name, quantity, size, variants, _id },
              })
            }
          >
            <span className=""> delete</span>
            <span>
              <AiOutlineDelete className="  rounded-full" size={"1rem"} />
            </span>
          </button>
        </div>
      </div>

      {/*<select className="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>*/}
    </div>
  );
};
