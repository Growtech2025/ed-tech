
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  /**
   * Adds a book to the cart. If it exists, increase its quantity.
   */
  const addToCart = (book) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.title === book.title);
      if (existingItem) {
        return prev.map(item =>
          item.title === book.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });
  };

  /**
   * Increases the quantity of an item in the cart.
   */
  const increaseQuantity = (title) => {
    setCartItems(prev =>
      prev.map(item =>
        item.title === title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /**
   * Decreases the quantity of an item in the cart.
   * If quantity becomes 0, the item is removed.
   */
  const decreaseQuantity = (title) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.title === title
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  /**
   * Removes an item from the cart by its title.
   */
  const removeFromCart = (title) => {
    setCartItems(prev => prev.filter(item => item.title !== title));
  };

  /**
   * Clears the entire cart.
   */
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
