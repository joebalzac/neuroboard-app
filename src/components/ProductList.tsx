import type { Product } from "../types/product"
import { ProductCard } from "./ProductCard"


type Props = {
  products: Product[]
}

export const ProductList = ({products}: Props) => {

  if (products.length === 0) {
    return <p>No products found</p>
  }

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-24">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
    </>
  )
}
