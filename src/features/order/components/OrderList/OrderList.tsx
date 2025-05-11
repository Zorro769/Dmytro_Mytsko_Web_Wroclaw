import OrderItem from "../OrderItem/OderItem";
import { useCart } from "context/CartContext";

const OrderList = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((product) => (
        <OrderItem
          key={product.product.id}
          product={product.product}
          quantity={product.quantity}
        />
      ))}
      {cart.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
};

export default OrderList;
