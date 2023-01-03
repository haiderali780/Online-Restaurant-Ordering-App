import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "addItemToCart") {
    const updatedItems = state.items.concat(action.items);
    const updatedTotalAmount=state.totalAmount+action.item.amount*action.item;
    return{
        items: updatedItems,
  totalAmount: updatedTotalAmount,
    }
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "addItemToCart",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "removeItemFromCart",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
