import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product.slug.current}`} key={product._id}>
      <div
        className="relative text-gray-50  hover:scale-105 transition-all ease-in-out active:scale-95 duration-100
      w-80 h-96 rounded-2xl bg-cover"
        style={{
          backgroundImage: `url(${urlFor(product.image && product.image[0])})`,
        }}
      >
        <div className="h-full w-full absolute bg-gradient-to-t from-slate-900 to-transparent rounded-2xl"></div>
        <div className="absolute bottom-0 left-0  px-4 pb-4">
          <h2 className="text-2xl ">{product.name}</h2>
          <p className="text-xs py-2">
            starting at <p className="text-xl">₹{product.price}</p>
          </p>
          <div className="">
            <button className="btn btn-primary">Order now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
