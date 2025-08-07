import React, { createContext, useState, useContext, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(p => p.id === item.id);
      if (existing) {
        return prevCart.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(p => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;