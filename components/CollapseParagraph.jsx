import React, { Children } from "react";

const CollapseParagraph = ({ children, title }) => {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content ">{children}</div>
    </div>
  );
};

export default CollapseParagraph;
