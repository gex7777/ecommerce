import React, { useState } from "react";

import { ALL, CAKES, ACHAARS, SNACKS, SPICES } from "./../constants";
import FilterHeads from "./FilterHeads";
import ProductCard from "./ProductCard";

const filters = {
  [ALL]: () => true,
  [CAKES]: (item) => item.category === CAKES,
  [ACHAARS]: (item) => item.category === ACHAARS,
  [SNACKS]: (item) => item.category === SNACKS,
  [SPICES]: (item) => item.category === SPICES,
};
const ProductList = ({ products }) => {
  console.log(products);
  const [filter, setFilter] = useState(ALL);

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-12">Products</h1>
      <div className="py-4">
        <FilterHeads filter={filter} setFilter={setFilter} />
      </div>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 justify-items-center">
        {products &&
          products
            .filter(filters[filter])
            .map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
      </div>
    </div>
  );
};

export default ProductList;
