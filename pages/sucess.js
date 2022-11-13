import React, { useEffect } from "react";
import { BsStar } from "react-icons/bs";
import Link from "next/link";
import { useShoppingCart } from "../context/ShopContext";
import { CLEAR } from "../context/shopReducer";

const Sucess = () => {
  const { dispatch } = useShoppingCart();
  useEffect(() => {
    return dispatch({ action: CLEAR });
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <BsStar className="text-5xl text-green-500 m-auto animate-bounce" />
          <p className="py-6">
            order sucessfully placed !, check your email for more infomation.
          </p>
          <Link href="/" className="btn btn-primary">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sucess;
