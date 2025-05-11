import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import OrderSummary from "pages/OrderSummaryPage/OrderSummaryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/summary-page" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
