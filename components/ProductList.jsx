import Link from "next/link";
import React, { useState } from "react";
import { urlFor } from "../lib/client";
const ProductList = ({ products }) => {
  console.log(products);
  const [filter, setFilter] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-12">Products</h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-items-center">
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
