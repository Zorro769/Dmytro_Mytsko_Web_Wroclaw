import styles from "./Product.module.css";
import { ProductType } from "types/product";
import { ReactNode } from "react";

type ProductProps = ProductType & {
  children?: ReactNode;
};

const Product = (props: ProductProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}>
          {props.price.main}.{props.price.fractional}
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Product;
