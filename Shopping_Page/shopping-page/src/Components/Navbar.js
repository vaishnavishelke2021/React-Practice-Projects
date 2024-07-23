import React, { useContext } from "react";
import { ProductContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [product] = useContext(ProductContext);
  const distinct_categories =
    product && product.reduce((acc, curr) => [...acc, curr.category], []);

  const categories = [...new Set(distinct_categories)];
  // console.log(categories);

  return (
    <div className="w-[20%] bg-primary/10 p-10 px-13">
      <div className="flex items-center justify-center">
        <button className="text-center py-2 px-4 rounded-md bg-primary text-white mx-auto">
          Add New Product
        </button>
      </div>

      <div className="mt-5 h-[1px] bg-slate-400"></div>

      <nav className="mt-8">
        <h2 className="font-semibold text-lg">Category Filter</h2>
        <ul className="flex flex-col gap-3 mt-5 text-[15px] font-medium">
          <Link
            to="/"
            className="flex text-secondary/80 hover:cursor-pointer hover:text-black transition-all duration-200 items-center gap-2"
          >
            <span className="w-[12px] h-[12px] bg-primary/60 rounded-full"></span>{" "}
            All
          </Link>

          {categories.map((c, i) => (
            <Link
              to={`/?category=${c}`}
              key={i}
              className="flex text-secondary/80 hover:cursor-pointer hover:text-black transition-all duration-200 items-center gap-2"
            >
              <span className="w-[12px] h-[12px] bg-primary/60 rounded-full"></span>{" "}
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
