import React, {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useState,
} from "react";
import { shopReducer } from "./shopReducer";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setInitialValue(cart);
  }, []);
  const [initialValue, setInitialValue] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, {
    cart: initialValue,
  });
  const [showCart, setShowCart] = useState(false);
  const totalQuantity = cartState.cart?.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartState.cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log(showCart);
  return (
    <ShoppingCartContext.Provider
      value={{
        setShowCart,
        showCart,
        dispatch,
        cartState,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
