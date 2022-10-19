import React, { useState } from "react";
import { ShoppingCartProvider } from "./ShopContext";

export const GlobalState = ({ children }) => {
  return <ShoppingCartProvider>{children}</ShoppingCartProvider>;
};
