import { createContext, useContext, useState } from "react";
import { ProductType } from "../types/product";
import { CartContextType } from "../types/cartContext";
import { CartItemType } from "../types/cart";
import { CartProviderProps } from "types/cartProvider";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (newProduct: ProductType) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id === newProduct.id
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        const existingItem = updatedCart[existingItemIndex];
        updatedCart[existingItemIndex] = {
          ...existingItem,
          product: {
            ...existingItem.product,
          },
          quantity: existingItem.quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prevCart, { product: newProduct, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.product.id !== productId)
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getCartTotal = () => {
    const total = cart.reduce((sum, item) => {
      return (
        sum +
        (item.product.price.main + item.product.price.fractional / 100) *
          item.quantity
      );
    }, 0);

    return Math.round(total * 100) / 100;
  };
  const getItemSubtotal = (productId: number): number => {
    const item = cart.find((item) => item.product.id === productId);
    if (!item) return 0;
    const subtotal =
      (item.product.price.main + item.product.price.fractional / 100) *
      item.quantity;
    return Math.round(subtotal * 100) / 100;
  };
  const clearCart = () => setCart([]);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getItemSubtotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
};
