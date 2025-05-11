import { ProductType } from "types/product";
import ProductList from "features/products/components/ProductList/ProductList";
import products from "assets/json/products/products.json";
import { Link } from "react-router-dom";

const ProductPage = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products as ProductType[]} />
      <div>
        <Link to="/cart-page">Cart Page</Link>
      </div>
    </div>
  );
};

export default ProductPage;
