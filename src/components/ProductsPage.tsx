import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";

export const ProductsPage = () => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>🛍️ DummyJSON Products</h1>
      <ProductList products={products} />
    </main>
  );
};
