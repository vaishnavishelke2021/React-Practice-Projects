import React, { useEffect, useState } from "react";
import HomeShimmerUI from "./HomeShimmerUI";
import Item from "./Item";

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

  return (
    <div className="max-w-[75%] py-10 mt-[4.5rem] mx-auto">
      {loading ? (
        <HomeShimmerUI />
      ) : products.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-[30px] gap-y-9">
          {products.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[70vh]">
          <h1>No data found</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
