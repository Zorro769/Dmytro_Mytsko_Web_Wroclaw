export type ProductType = {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
};
