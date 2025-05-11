import Product from "components/common/Product/Product";
import { useCart } from "context/CartContext";
import { CartItemType } from "types/cart";

const OrderItem = (product: CartItemType) => {
  const { getItemSubtotal } = useCart();

  return (
    <Product
      id={product.product.id}
      name={product.product.name}
      price={product.product.price}
    >
      <div>Amount: {product.quantity}</div>
      <div>
        <span>Suma: {getItemSubtotal(product.product.id).toFixed(2)}</span>
      </div>
    </Product>
  );
};

export default OrderItem;
