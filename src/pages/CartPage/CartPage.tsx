import CartList from "features/cart/components/CartList/CartList";
import { Link } from "react-router-dom";
import { useCart } from "context/CartContext";
const CardPage = () => {
  const { getCartTotal } = useCart();
  return (
    <div>
      <CartList />
      <p>Total: {getCartTotal()}</p>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div>
        <Link to="/summary-page">Next</Link>
      </div>
    </div>
  );
};

export default CardPage;
