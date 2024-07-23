import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { FaShop } from "react-icons/fa6";
import Navbar from "./Navbar";
import { ProductContext } from "../Context/Context";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [product] = useContext(ProductContext);
  const [filteredData, setFilteredData] = useState([]);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  console.log(category);

  const getProductsCategory = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      setFilteredData(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!filteredData.length || category === "undefined")
      setFilteredData(product);

    if (category !== "undefined") {
      getProductsCategory();
    }
  }, [category, product]);

  return (
    <>
      <Navbar />
      <div className="w-[80%] overflow-x-hidden pb-10">
        <h1 className="text-[1.5rem] flex items-center gap-3 text-primary p-10 px-20 font-extrabold">
          <span className="inline-block text-[1.6rem]">
            <FaShop />
          </span>
          ShopNesty
        </h1>
        {loading ? (
          <div className="flex flex-wrap justify-between gap-y-8 p-0 px-20">
            <div className="text-3xl font-bold text-primary/60">Loading...</div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-start gap-x-7 gap-y-8 p-0 px-20">
            {filteredData && filteredData.map((p) => <Card key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
