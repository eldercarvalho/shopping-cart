import React, { createContext, useState, useCallback, useContext } from 'react';

import { http } from '../services/http';

import { useGlobal } from './global';

import { formatCurrency } from '../utils/formatCurrency';
import { shuffleArray } from '../utils/shuffleArray';

import { IProduct } from '../entities/Product';

interface ProductContextData {
  currentProduct: IProduct;
  products: IProduct[];
  fetchProduct(id: number): Promise<void>;
  fetchProducts(): void;
  fetchProductsByCategory(categoryName: string): Promise<void>;
}

const ProductsContext = createContext<ProductContextData>({} as ProductContextData);

const ProductsProvider: React.FC = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>({} as IProduct);
  const [products, setProducts] = useState<IProduct[]>([]);
  const { setLoading } = useGlobal();

  const fetchProduct = useCallback(
    async (id: number) => {
      setLoading(true);
      const response = await http.get<IProduct>(`products/${id}`);
      setLoading(false);
      const product = response.data;
      product.formattedPrice = formatCurrency(product.price);
      setCurrentProduct(product);
    },
    [setLoading],
  );

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const response = await http.get<IProduct[]>('products');
    setLoading(false);
    const productsData = response.data.map((product) => {
      product.formattedPrice = formatCurrency(product.price);
      return product;
    });

    setProducts(shuffleArray(productsData));
  }, [setLoading]);

  const fetchProductsByCategory = useCallback(
    async (categoryName: string) => {
      let endpoint = 'products';
      if (categoryName !== 'All') {
        endpoint += `/category/${categoryName}`;
      }
      setLoading(true);
      const response = await http.get<IProduct[]>(endpoint);
      setLoading(false);
      const productsData = response.data.map((product) => {
        product.formattedPrice = formatCurrency(product.price);
        return product;
      });

      setProducts(shuffleArray(productsData));
    },
    [setLoading],
  );

  return (
    <ProductsContext.Provider
      value={{
        currentProduct,
        products,
        fetchProduct,
        fetchProducts,
        fetchProductsByCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = (): ProductContextData => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within ProductsProvider');
  }

  return context;
};

export { useProducts, ProductsProvider };
