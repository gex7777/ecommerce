import React from "react";
import { useShoppingCart, useStateContext } from "../context/ShopContext";
import { DECREMENT, INCREMENT } from "./../context/shopReducer";

const QuantityBtns = ({ product, xs }) => {
  const { dispatch, cartState } = useShoppingCart();
  console.log(cartState);
  const { quantity } = cartState.cart.find(
    (prod) => prod._id === product._id && prod.size === product.size
  );

  return (
    <div className="w-full h-full flex  items-center">
      <button
        className={` btn ${
          xs && "btn-xs"
        }  btn-outline rounded-r-none rounded-l-xl`}
        onClick={() => dispatch({ action: INCREMENT, product })}
      >
        +
      </button>
      <div className={`btn ${xs && "btn-xs"}  rounded-none`}>{quantity}</div>
      <button
        className={`btn ${
          xs && "btn-xs"
        }  btn-outline rounded-r-xl rounded-l-none`}
        onClick={() => dispatch({ action: DECREMENT, product })}
      >
        -
      </button>
    </div>
  );
};
export default QuantityBtns;
