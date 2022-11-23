import React from "react";
import { ALL, CAKES, SNACKS, ACHAARS, SPICES } from "../constants";

const FilterHeads = ({ filter, setFilter }) => {
  return (
    <div className="btn-group">
      <button
        className={`btn ${filter === ALL ? "btn-active" : ""}`}
        onClick={() => setFilter(ALL)}
      >
        All
      </button>
      <button
        className={`btn ${filter === CAKES ? "btn-active" : ""}`}
        onClick={() => setFilter(CAKES)}
      >
        Cakes
      </button>

      <button
        className={`btn ${filter === SNACKS ? "btn-active" : ""}`}
        onClick={() => setFilter(SNACKS)}
      >
        Snacks
      </button>
      <button
        className={`btn ${filter === ACHAARS ? "btn-active" : ""}`}
        onClick={() => setFilter(ACHAARS)}
      >
        Achaars
      </button>
      <button
        className={`btn ${filter === SPICES ? "btn-active" : ""}`}
        onClick={() => setFilter(SPICES)}
      >
        Spices
      </button>
    </div>
  );
};

export default FilterHeads;
