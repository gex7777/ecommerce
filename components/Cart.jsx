import React from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useShoppingCart } from "../context/ShopContext";

import QuantityBtns from "./QuantityBtns";

import { REMOVE } from "./../context/shopReducer";
import { urlFor } from "../lib/client";

const Cart = () => {
  const { cartState, setShowCart } = useShoppingCart();
  console.log(cartState);
  return (
    <>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <div
        className="top-0 right-0 pb-16  px-4 z-10 fixed  bg-base-100 backdrop-blur-sm bg-opacity-90 h-full flex flex-col justify-between w-80 
      "
      >
        <ul className="  flex flex-col divide-y min-w-min max-h-[80%] overflow-y-scroll ">
          {!!cartState &&
            cartState.cart.map((item) => {
              console.log(item);
              return (
                <>
                  {item && (
                    <li key={`${item._id} + ${item.size}`}>
                      <CartItem
                        key={`${item._id} + ${item.size}`}
                        item={item}
                      />
                    </li>
                  )}
                </>
              );
            })}
        </ul>
        <div className="flex flex-col">
          <div className="flex justify-between items-center pb-2 ">
            <div className="text-2xl">Total</div>
            <div className="text-4xl">rupees</div>
          </div>
          <div className="btn min-h-16 items-center">
            <span className="text-4xl">checkout</span>
            <span>
              <AiOutlineArrowRight size={29} />
            </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
const CartItem = ({ item: { name, quantity, size, variants, _id, image } }) => {
  const { dispatch } = useShoppingCart();
  console.log(variants, size);
  const price = variants.find((varient) => varient.name === size).price;
  return (
    <div className=" grid grid-rows-3 grid-cols-[.7fr_1.4fr_1.4fr]  ">
      <div className="row-span-4    justify-self-center">
        <img
          className="object-fill h-28 w-28 p-2"
          src={urlFor(image)}
          alt="maw"
        />
      </div>
      <div className=" p-1  col-span-2 flex justify-between ">
        <div className="text-4xl md:text-2xl">{name}</div>
        <div className="text-4xl md:text-2xl">₹ {price * quantity}</div>
      </div>
      <div className="flex items-start justify-between col-span-2">
        <div className="flex items-center divide-x">
          <div className="text-3xl md:text-xl pr-1 ">₹{price}</div>
          <div
            className={`${
              variants.find((varient) => varient.name === size).instock
                ? "text-green-500"
                : "text-red-500"
            } text-xl md:text-xl pl-1 `}
          >
            {variants.find((varient) => varient.name === size).instock
              ? "in stock"
              : "not available"}
          </div>
        </div>
      </div>
      <div className="col-span-2  ">
        <div className="flex justify-between items-center">
          <div className="badge badge-outline  badge-lg ">{size}</div>

          <div className="btn-xs">
            <QuantityBtns product={{ name, quantity, size, variants, _id }} />
          </div>
          <button
            className="flex items-center btn  btn-outline text-xl text-red-600 "
            onClick={() =>
              dispatch({
                action: REMOVE,
                product: { name, quantity, size, variants, _id },
              })
            }
          >
            <span className=""> delete</span>
            <span>
              <AiOutlineDelete className="  rounded-full" size={"2rem"} />
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
