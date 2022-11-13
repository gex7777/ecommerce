//actions
import { INCREMENT } from "./shopReducer";

export const DECREMENT = "DECREMENT";
export const REMOVE = "REMOVE";
export const INITIALIZE = "INITIALIZE";
export const CLEAR = "CLEAR";
//functions
const addProductToCart = (state, payload) => {
  console.log(payload);
  const updatedCart = [...state.cart];
  if (
    updatedCart.find(
      (item) =>
        item._id === payload.product._id && item.size === payload.product.size
    )
  ) {
    console.log("found duplicate");
    const newUpdatedCart = updatedCart.map((item) => {
      if (
        item._id === payload.product._id &&
        item.size === payload.product.size
      ) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newUpdatedCart));
    return {
      ...state,
      cart: newUpdatedCart,
    };
  } else {
    updatedCart.push(payload.product);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return { ...state, cart: updatedCart };
  }
};
const decrementProductInCart = (state, payload) => {
  const updatedCart = [...state.cart];

  if (
    updatedCart.find(
      (item) =>
        item._id === payload.product._id && item.size === payload.product.size
    ).quantity === 1
  ) {
    const newUpdatedCart = updatedCart.filter(
      (item) =>
        item._id !== payload.product.id && item.size !== payload.product.size
    );
    localStorage.setItem("cart", JSON.stringify(newUpdatedCart));
    return {
      ...state,
      cart: newUpdatedCart,
    };
  } else {
    const newUpdatedCart = updatedCart.map((item) => {
      if (
        item._id === payload.product._id &&
        item.size === payload.product.size
      ) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    localStorage.setItem("cart", JSON.stringify(newUpdatedCart));
    return {
      ...state,
      cart: newUpdatedCart,
    };
  }
};
const removeProductInCart = (state, payload) => {
  const updatedCart = [...state.cart];
  console.log(" before payload", payload, "cart:", updatedCart);

  const newUpdatedCart = updatedCart.filter(
    (item) =>
      item._id + item.size !== payload.product._id + payload.product.size
  );
  console.log("after payload", payload, "cart:", newUpdatedCart);
  localStorage.setItem("cart", JSON.stringify(newUpdatedCart));

  return {
    ...state,
    cart: newUpdatedCart,
  };
};
const initilizeCart = (state, payload) => {
  return {
    ...state,
    cart: payload.cart,
  };
};
const clearCart = (state, payload) => {
  localStorage.clear();
  return {
    ...state,
    cart: [],
  };
};
//reducer
export const shopReducer = (state, payload) => {
  switch (payload.action) {
    case INCREMENT: {
      console.log("adding to cart");
      return addProductToCart(state, payload);
    }
    case DECREMENT: {
      console.log("decrement item in cart");
      return decrementProductInCart(state, payload);
    }
    case REMOVE: {
      console.log("remove item in cart");
      return removeProductInCart(state, payload);
    }
    case INITIALIZE: {
      console.log("Initializing cart");
      return initilizeCart(state, payload);
    }
    case CLEAR: {
      console.log("clearing cart");
      return clearCart(state, payload);
    }
  }
};
