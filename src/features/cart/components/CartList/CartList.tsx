import CartItem from "../CartItem/CartItem";
import { useCart } from "context/CartContext";

const CartList = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((product) => (
        <CartItem
          key={product.product.id}
          product={product.product}
          quantity={product.quantity}
        />
      ))}
      {cart.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
};

export default CartList;
