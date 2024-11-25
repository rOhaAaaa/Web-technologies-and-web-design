# Redux: Cart Page (Shopping Cart)

## Description
You are on your way to completing this exciting project! This task involves creating the first of three cart pages - the **Shopping Cart page**. In this project, you will also be introduced to **Redux**, one of the most popular libraries for React state management.

## Variants
The list of products you are "selling" is the same as the previous works. (Refer to the description in the 3rd assignment for product details.)

---

## Requirements

### General Requirements
All requirements from previous React.js assignments should be adhered to.

### Functionality
1. **Item Page:**
   - Implement the **"Add to Cart"** action using Redux flow:
     - When you add an item to the cart, it should be stored in the Redux store.
   - On the **Cart page**, retrieve all items from the Redux store.

2. **Cart Page:**
   - Implement **"Add"** and **"Remove"** item actions using Redux:
     - Use Redux **actions** and **reducers** for managing these functionalities.

### Code Style
1. **Redux Structure:**
   - Keep all Redux parts in separate and specific files:
     - `actions.js`
     - `reducers.js`
     - `store.js`
2. **React-Redux Hooks:**
   - Use the `useSelector` hook for accessing data from the Redux store.
     - [Official Docs: useSelector Examples](https://react-redux.js.org/api/hooks#useselector-examples)
   - Use the `useDispatch` hook for dispatching actions.
     - [Official Docs: useDispatch Examples](https://react-redux.js.org/api/hooks#usedispatch)


