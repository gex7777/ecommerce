import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-12">Products</h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-items-center">
        {products &&
          products.map((product) => (
            <Link href={`/product/${product.slug.current}`} key={product._id}>
              <div className="max-w-xs  card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={urlFor(product.image && product.image[0])}
                    alt={product.imageAlt}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>starting at ₹{product.price}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Order now</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
