import { ProductType } from "./product";
import { CartItemType } from "./cart";

export type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getCartTotal: () => number;
  getItemSubtotal: (productId: number) => number;
  clearCart: () => void;
};
