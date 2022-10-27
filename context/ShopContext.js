import React, { createContext, useContext, useReducer, useState } from "react";
import { shopReducer } from "./shopReducer";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const [showCart, setShowCart] = useState(false);
  const totalQuantity = cartState.cart?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <ShoppingCartContext.Provider
      value={{ setShowCart, showCart, dispatch, cartState, totalQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
