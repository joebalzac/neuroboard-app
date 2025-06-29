import  { useEffect, useState } from 'react'
import type { Product } from '../types/product';
import { productsApi } from '../api/productsApi';

export const useProducts = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading ] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const data = await productsApi.getProducts()
        setProducts(data) 
      } catch (err) {
        setError("Failed to load products")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])


  return {products, isLoading, error}
}
