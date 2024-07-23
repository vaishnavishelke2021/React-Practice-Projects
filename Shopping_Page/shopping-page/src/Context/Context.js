import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

const Context = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://fakestoreapi.com/products";

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct, loading, setLoading]}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, Context };
