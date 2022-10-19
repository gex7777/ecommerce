import React from "react";

const Select = ({ variants, selected }) => {
  return (
    <select
      className="select select-bordered select-xs pl-1 pr-0"
      defaultValue={selected}
    >
      {variants.map((e) => {
        return <option>{e.name}</option>;
      })}
    </select>
  );
};

export default Select;
