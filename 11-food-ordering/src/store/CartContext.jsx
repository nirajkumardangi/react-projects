import { createContext, useReducer } from 'react';

// Create the context with default values
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  // add item to the cart
  if (action.type === 'ADD_ITEM') {
    const existingItem = state.items.find((item) => item.id === action.item.id);

    if (existingItem) {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      };
    }
  }

  // remove item from the cart
  if (action.type === 'REMOVE_ITEM') {
    const existingItem = state.items.find((item) => item.id === action.id);

    if (existingItem.quantity === 1) {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    } else {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  }

  // Context value
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
