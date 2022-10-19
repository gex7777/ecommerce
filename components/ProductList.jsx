import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
const ProductList = ({ products }) => {
  console.log(products);
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold mb-12">Products</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products &&
            products.map((product) => (
              <Link href={`/product/${product.slug.current}`} key={product._id}>
                <div className="card group p-8 bg-base-100 shadow-xl flex flex-col justify-between">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={urlFor(product.image && product.image[0])}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div>
                    <h3 className="mt-4 text-sm text-gray-700">
                      {product.name}
                    </h3>
                    <div className="flex justify-between">
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        ₹{product.price}
                      </p>
                      <button className="btn btn-primary">Add to cart</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
