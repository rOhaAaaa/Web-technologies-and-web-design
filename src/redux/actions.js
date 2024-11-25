export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const CLEAR_CART = 'CLEAR_CART'; 

export const addToCart = (product, selectedOption) => {
const uniqueProductId = `${product.id}-${selectedOption}`; 
return {
    type: ADD_TO_CART,
    payload: { ...product, uniqueProductId, option: selectedOption }
};
};

export const removeFromCart = (uniqueProductId) => ({
type: REMOVE_FROM_CART,
payload: uniqueProductId
});

export const incrementItem = (uniqueProductId) => ({
type: INCREMENT_ITEM,
payload: uniqueProductId
});

export const decrementItem = (uniqueProductId) => ({
type: DECREMENT_ITEM,
payload: uniqueProductId
});

export const clearCart = () => ({
type: CLEAR_CART  
});
