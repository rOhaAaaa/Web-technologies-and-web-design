import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_ITEM, DECREMENT_ITEM, CLEAR_CART } from './actions';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || []  
};

const cartReducer = (state = initialState, action) => {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.cart.findIndex(item => item.uniqueProductId === action.payload.uniqueProductId);

      if (existingItemIndex >= 0) {
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
      } else {
        updatedCart = [...state.cart, action.payload];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      updatedCart = state.cart.filter(item => item.uniqueProductId !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case INCREMENT_ITEM:
      updatedCart = state.cart.map(item =>
        item.uniqueProductId === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case DECREMENT_ITEM:
      updatedCart = state.cart.map(item =>
        item.uniqueProductId === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case CLEAR_CART:
      localStorage.removeItem('cart');
      return { ...state, cart: [] };

    default:
      return state;
  }
};

export default cartReducer;
