import styles from "./CartItem.module.css";
import Product from "components/common/Product/Product";
import { useCart } from "context/CartContext";
import { CartItemType } from "types/cart";

const CartItem = ({ product, quantity }: CartItemType) => {
  const { removeFromCart, updateQuantity, getItemSubtotal } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQty = parseInt(e.target.value, 10);
    if (newQty >= 1) updateQuantity(product.id, newQty);
  };

  return (
    <Product id={product.id} name={product.name} price={product.price}>
      <div className={styles.cartControls}>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={() => removeFromCart(product.id)}>Usuń</button>
        <div className={styles.subtotal}>
          {getItemSubtotal(product.id).toFixed(2)}
        </div>
      </div>
    </Product>
  );
};

export default CartItem;
