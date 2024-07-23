import React, { useContext } from "react";
import Card from "./Card";
import { FaShop } from "react-icons/fa6";
import Navbar from "./Navbar";
import { ProductContext } from "../Context/Context";

const HomePage = () => {
  const [product, loading] = useContext(ProductContext);
  // console.log(product);
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
            {product.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <div className="w-full min-h-[70vh] flex justify-center items-center">
            <div className="text-3xl font-bold text-primary/60">Loading...</div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
