import React from "react";
import { useShoppingCart, useStateContext } from "../context/ShopContext";
import { DECREMENT, INCREMENT } from "./../context/shopReducer";
import { toast } from "react-hot-toast";

const QuantityBtns = ({ product, xs }) => {
  const { dispatch, cartState } = useShoppingCart();

  const { quantity } = cartState.cart.find(
    (prod) => prod._id === product._id && prod.size === product.size
  );

  return (
    <div className="w-full h-full flex  items-center">
      <button
        aria-label="add"
        className={`  btn btn-outline ${
          xs && "btn-xs"
        }   rounded-r-none rounded-l-xl`}
        onClick={() => {
          dispatch({ action: INCREMENT, product });
          toast.success("added one more to cart");
        }}
      >
        +
      </button>
      <div className={`btn   ${xs && "btn-xs"}  rounded-none`}>{quantity}</div>
      <button
        aria-label="subract"
        className={`btn  btn-outline ${
          xs && "btn-xs"
        }   rounded-r-xl rounded-l-none`}
        onClick={() => {
          dispatch({ action: DECREMENT, product });
          toast.success("removed one less in cart");
        }}
      >
        -
      </button>
    </div>
  );
};
export default QuantityBtns;
