import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';

// Create the context
const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    category: undefined,
  });

  // Fetch all products
  const fetchAllProducts = async (searchParams = {}) => {
    setLoading(true);
    try {
      const res = await api.get('/product/', {
        params: {
          keyword: searchParams?.keyword || '',
          category: searchParams.categor || undefined,
        },
      });
      setProducts(res.data.products);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };
  // Search all products by name
  const searchProducts = async (searchParams = {}) => {
    setLoading(true);
    try {
      const res = await api.get('/product/search/', {
        params: {
          keyword: searchParams?.keyword || '',
          category: searchParams.categor || undefined,
        },
      });
      setSearchResults(res.data.products);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  // Fetch best sellers
  const fetchBestSellers = async () => {
    setLoading(true);
    try {
      const res = await api.get('/product/best-sellers');
      setBestSellers(res.data.products);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch best sellers');
    } finally {
      setLoading(false);
    }
  };

  // Fetch new arrivals
  const fetchNewArrivals = async () => {
    setLoading(true);
    try {
      const res = await api.get('/product/new-arrivals');
      setNewArrivals(res.data.products);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch new arrivals');
    } finally {
      setLoading(false);
    }
  };

  // Fetch single product by id
  const fetchProductById = async (id) => {
    setLoading(true);
    try {
      const res = await api.get(`/product/${id}`);
      setError(null);
      return res.data.product;
    } catch (err) {
      setError(err.message || 'Failed to fetch product');
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Create product (requires token for vendor)
  const createProduct = async (productData, token) => {
    try {
      const res = await api.post('/product/create', productData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => [...prev, res.data.product]);
      return res.data.product;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to create product');
    }
  };

  // Update product
  const updateProduct = async (id, productData, token) => {
    try {
      const res = await api.put(`/product/${id}`, productData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) =>
        prev.map((prod) => (prod._id === id ? res.data.product: prod))
      );
      return res.data.product;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to update product');
    }
  };

  // Delete product
  const deleteProduct = async (id, token) => {
    try {
      await api.delete(`/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((prod) => prod._id !== id));
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to delete product');
    }
  };

  useEffect(() => {
    fetchAllProducts();
    fetchBestSellers();
    fetchNewArrivals();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        bestSellers,
        newArrivals,
        loading,
        error,
        searchParams,
        searchResults,
        setSearchParams,
        searchProducts,
        fetchAllProducts,
        fetchProductById,
        createProduct,
        updateProduct,
        deleteProduct,
        fetchBestSellers,
        fetchNewArrivals,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for easy access
export const useProducts = () => {
  return useContext(ProductContext);
};
