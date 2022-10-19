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
  const { cartState } = useShoppingCart();
  console.log(cartState);
  return (
    <div
      className="top-16 right-0 absolute bg-base-100 backdrop-blur-sm bg-opacity-90 max-h-96 flex flex-col w-full md:w-2/5
    "
    >
      <ul className=" p-4 flex flex-col divide-y min-w-min h-5/6">
        {!!cartState &&
          cartState.cart.map((item) => {
            return (
              <>
                {item && (
                  <li key={`${item._id} + ${item.size}`}>
                    <CartItem key={`${item._id} + ${item.size}`} item={item} />
                  </li>
                )}
              </>
            );
          })}
      </ul>
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl">Total</div>
        <div className="text-4xl">rupees</div>
      </div>
      <div className="btn items-center">
        <span>checkout</span>
        <span>
          <AiOutlineArrowRight />
        </span>{" "}
      </div>
    </div>
  );
};

export default Cart;
const CartItem = ({ item: { name, quantity, size, variants, _id, image } }) => {
  const { dispatch } = useShoppingCart();
  console.log(variants, size);
  const price = variants.find((varient) => varient.name === size).price;
  return (
    <div className=" grid grid-rows-3 grid-cols-3  ">
      <div className="row-span-4    justify-self-center">
        <img
          className="object-fill h-28 w-28 p-2"
          src={urlFor(image)}
          alt="maw"
        />
      </div>
      <div className=" p-1  col-span-2 flex justify-between ">
        <div className="text-2xl">{name}</div>
        <div className="text-2xl">₹ {price * quantity}</div>
      </div>
      <div className="flex items-start justify-between col-span-2">
        <div className="flex divide-x">
          <div className="text-xs pr-1">₹ {price}</div>
          <div
            className={`${
              variants.find((varient) => varient.name === size).instock
                ? "text-green-500"
                : "text-red-500"
            } text-xs pl-1 `}
          >
            {variants.find((varient) => varient.name === size).instock
              ? "in stock"
              : "not available"}{" "}
          </div>
        </div>
      </div>
      <div className="col-span-2  ">
        <div className="flex justify-between items-center">
          <div className="badge badge-outline">{size}</div>

          <div className="btn-xs">
            <QuantityBtns
              sm
              product={{ name, quantity, size, variants, _id }}
            />
          </div>
          <button
            className="flex items-center btn  btn-outline btn-xs "
            onClick={() =>
              dispatch({
                action: REMOVE,
                product: { name, quantity, size, variants, _id },
              })
            }
          >
            <span> delete</span>
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
