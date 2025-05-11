import styles from "./AddToCart.module.css";
import cartIcon from "assets/icons/cart-icon.png";
import { useCart } from "context/CartContext";
import { ProductType } from "types/product";

type AddToCartProps = {
  product: ProductType;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product added to cart");
  };

  return (
    <div className={styles.container}>
      <button onClick={handleAddToCart}>
        Add to cart
        <img src={cartIcon} alt="cart-icon" />
      </button>
    </div>
  );
};

export default AddToCart;
