import { useProducts } from "../hooks/useProducts";
import { ProductList } from "../components/ProductList";
import { useState } from "react";

export const ProductsPage = () => {
  const { products, isLoading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")


 const categories = Array.from(new Set(products.map((product) => product.category)))

  const filteredProducts = products.filter((product) => {
     const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())

     const matchesCategory = selectedCategory === "" || product.category === selectedCategory

     return matchesSearch && matchesCategory
  }
  )

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>🛍️ DummyJSON Products</h1>

      <input className="mt-8" type="text" placeholder="Search Products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <ProductList products={filteredProducts} />
    </main>
  );
};
