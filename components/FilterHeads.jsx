import React from "react";
import { ALL, CAKES, SNACKS, ACHAARS, SPICES } from "../constants";

const FilterHeads = ({ filter, setFilter }) => {
  return (
    <div className="btn-group btn-group-horizontal">
      <button
        aria-label="filter type"
        className={`btn btn-xs sm:btn-sm lg:btn-lg ${
          filter === ALL ? "btn-active" : ""
        }`}
        onClick={() => setFilter(ALL)}
      >
        All
      </button>
      <button
        aria-label="filter type"
        className={`btn btn-xs sm:btn-sm  lg:btn-lg ${
          filter === CAKES ? "btn-active" : ""
        }`}
        onClick={() => setFilter(CAKES)}
      >
        Cakes
      </button>

      <button
        aria-label="filter type"
        className={`btn btn-xs sm:btn-sm  lg:btn-lg ${
          filter === SNACKS ? "btn-active" : ""
        }`}
        onClick={() => setFilter(SNACKS)}
      >
        Snacks
      </button>
      <button
        aria-label="filter type"
        className={`btn btn-xs sm:btn-sm  lg:btn-lg ${
          filter === ACHAARS ? "btn-active" : ""
        }`}
        onClick={() => setFilter(ACHAARS)}
      >
        Achaars
      </button>
      <button
        aria-label="filter type"
        className={`btn btn-xs sm:btn-sm  lg:btn-lg ${
          filter === SPICES ? "btn-active" : ""
        }`}
        onClick={() => setFilter(SPICES)}
      >
        Spices
      </button>
    </div>
  );
};

export default FilterHeads;
