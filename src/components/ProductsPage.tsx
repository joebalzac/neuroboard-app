import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";
import { useState } from "react";

export const ProductsPage = () => {
  const { products, isLoading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState(" ")

  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>🛍️ DummyJSON Products</h1>

      <input type="text" placeholder="Search Products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <ProductList products={filteredProducts} />
    </main>
  );
};
