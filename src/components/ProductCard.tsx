import type { Product } from "../types/product"

type Props = {
  product: Product
}



export const ProductCard = ({product}: Props) => {

  const imageUrl = product.thumbnail || product.images[0] || ""

  

  return (
    <div key={product.id}>
      <h3>
        {product.title}
      </h3>
      <p>
        {product.description}
      </p>
      <p>• ⭐{product.rating}</p>

      {imageUrl && (
        <img key={product.id} src={imageUrl} alt={product.title} className="" />
      )}
      
    </div>
  )
}
