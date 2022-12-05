import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Image from "next/image";
const ProductCard = ({ product }) => {
  const src = urlFor(product.image && product.image[0]).url();
  return (
    <Link href={`/product/${product.slug.current}`} key={product._id}>
      <div
        className="relative text-base-content  hover:scale-105 transition-all ease-in-out active:scale-95 duration-100
      w-80 h-96 rounded-2xl"
      >
        {src && (
          <Image src={src} fill className="object-cover rounded-2xl"></Image>
        )}
        <div className="h-full w-full absolute bg-gradient-to-t from-base-300 to-transparent rounded-2xl"></div>
        <div className="absolute bottom-0 left-0  px-4 pb-4">
          <h2 className="text-2xl ">{product.name}</h2>
          <p className="text-xs py-2">
            starting at <span className="text-xl">₹{product.price}</span>
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
