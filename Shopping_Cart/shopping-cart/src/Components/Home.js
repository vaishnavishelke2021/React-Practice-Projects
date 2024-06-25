import React, { useEffect, useState } from "react";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
      console.log("Error fetching data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return <div></div>;
}

export default Home;
