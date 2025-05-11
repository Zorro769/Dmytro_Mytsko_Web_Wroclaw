import { useCart } from "context/CartContext";
import { Link } from "react-router-dom";
import OrderList from "features/order/components/OrderList/OrderList";
import styles from "./OrderSummaryPage.module.css";

const OrderSummary = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const handleSubmitOrder = () => {
    localStorage.setItem(
      "orderData",
      JSON.stringify({
        cart,
        total: getCartTotal(),
      })
    );

    clearCart(); //
    window.location.href = "/order-confirmation.html";
  };
  return (
    <div className={styles.summary}>
      <h2>Order Summary</h2>
      <OrderList />
      <div className={styles.total}>
        <strong>Summary sum: {getCartTotal()}</strong>
      </div>
      <button className={styles.orderButton} onClick={handleSubmitOrder}>
        Finish
      </button>
      <div>
        <Link to="/cart-page" className={styles.backLink}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
