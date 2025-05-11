import { ProductType } from "types/product";
import Product from "components/common/Product/Product";
import styles from "./ProductItem.module.css";
import AddToCart from "../AddToCart/AddToCart";

type ProductItemProps = {
  product: ProductType;
};

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <Product {...product}>
      <div className={styles.button}>
        <AddToCart product={product} />
      </div>
    </Product>
  );
};

export default ProductItem;
