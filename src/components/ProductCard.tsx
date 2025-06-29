// ProductCard.tsx
import type { Product } from "../types/product";

type Props = { product: Product };

export const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
};
