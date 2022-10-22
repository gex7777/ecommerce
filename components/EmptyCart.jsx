import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <FiShoppingBag size={200} />
      <div className="">cart is empty. Please add some products</div>
    </div>
  );
};

export default EmptyCart;
