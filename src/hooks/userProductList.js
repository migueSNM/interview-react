import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductList = (initialValues, callback) => {

  const [products, setProducts] = useState(initialValues);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios('http://localhost:3000/products');
      setProducts(data);
  }
    fetchData();
  }, []);

  return {
    products
  }
};

export default useProductList;