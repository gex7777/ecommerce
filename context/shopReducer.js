//actions
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const REMOVE = "REMOVE";

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
    return {
      ...state,
      cart: updatedCart.map((item) => {
        if (
          item._id === payload.product._id &&
          item.size === payload.product.size
        ) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      }),
    };
  } else {
    updatedCart.push(payload.product);
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
    return {
      ...state,
      cart: updatedCart.filter(
        (item) =>
          item._id !== payload.product.id && item.size !== payload.product.size
      ),
    };
  } else
    return {
      ...state,
      cart: updatedCart.map((item) => {
        if (
          item._id === payload.product._id &&
          item.size === payload.product.size
        ) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }),
    };
};
const removeProductInCart = (state, payload) => {
  const updatedCart = [...state.cart];
  return {
    ...state,
    cart: updatedCart.filter(
      (item) =>
        item._id !== payload.product.id && item.size !== payload.product.size
    ),
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
  }
};
