import React, { Children } from "react";

const CollapseParagraph = ({ children }) => {
  return (
    <>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click to view cart
        </div>
        <div className="collapse-content ">{children}</div>
      </div>
    </>
  );
};

export default CollapseParagraph;
