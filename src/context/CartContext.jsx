import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = { items: [] };

// Action types
const ADD_TO_CART = "ADD_TO_CART";
const DECREASE_QUANTITY = "DECREASE_QUANTITY";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";

// Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const index = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (index >= 0) {
        const updatedItems = [...state.items];
        updatedItems[index].quantity += action.payload.quantity;
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }
    }

    case DECREASE_QUANTITY: {
      const index = state.items.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (index >= 0) {
        const updatedItems = [...state.items];
        updatedItems[index].quantity -= 1;
        if (updatedItems[index].quantity <= 0) {
          updatedItems.splice(index, 1);
        }
        return { ...state, items: updatedItems };
      }
      return state;
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.product.id !== action.payload.id
        ),
      };

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

// Context
const CartContext = createContext({
  cart: initialState,
  addToCart: () => {},
  decreaseQuantity: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

// Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, quantity = 1) =>
    dispatch({ type: ADD_TO_CART, payload: { product, quantity } });

  const decreaseQuantity = (product) =>
    dispatch({ type: DECREASE_QUANTITY, payload: { product } });

  const removeFromCart = (productId) =>
    dispatch({ type: REMOVE_FROM_CART, payload: { id: productId } });

  const clearCart = () => dispatch({ type: CLEAR_CART });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, decreaseQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook
export const useCart = () => useContext(CartContext);
