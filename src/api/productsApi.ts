import type { Product } from '../types/product'


const BASE_URL = "https://dummyjson.com"

export const productsApi =  {

  getProducts: async (): Promise<Product[]> => {
    try {
      const res = await fetch(`${BASE_URL}/products`)
      if (!res.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await res.json()
      return data.products
    } catch (error) {
      console.log("Error fetching products", error)
       throw error;
    }
   
  }

}
