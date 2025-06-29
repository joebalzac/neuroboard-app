import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

type Props = {
  products: Product[];
};

export const ProductList = ({ products }: Props) => {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
