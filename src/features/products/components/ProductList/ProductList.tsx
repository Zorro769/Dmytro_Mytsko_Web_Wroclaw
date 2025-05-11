import { ProductType } from "types/product";
import styles from "./ProductList.module.css";
import ProductItem from "../ProductItem/ProductItem";

type ProductListProps = {
  products: ProductType[];
};

const ProductList = (products: ProductListProps) => {
  return (
    <div className={styles.container}>
      {products.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
