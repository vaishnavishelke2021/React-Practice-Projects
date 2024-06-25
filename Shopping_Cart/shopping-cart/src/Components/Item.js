import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

function Item({ item }) {
  const title = item.title.substring(0, 18);
  const desc = item.description.substring(0, 57);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeFromItem = () => {
    dispatch(removeItem(item.id));
  };

  const addToItem = () => {
    dispatch(addItem(item));
  };

  return (
    <div className=" group max-w-[260px] p-4 rounded-xl bg-[#f6f6f6] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:scale-[1.06] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-[0.3s] hover:bg-white z-0">
      <div className="w-full h-[200px] flex justify-center items-center bg-white rounded-lg p-2 py-4">
        <img className="w-auto h-full cover" src={item.image} alt="" />
      </div>
      <h1 className="mt-4 font-bold text-[1.2rem]">{title}...</h1>
      <p className="text-[12px] mt-1 text-black/50">{desc}...</p>

      <p className=" mt-1 text-[13px] font-medium text-black/70">
        ⭐ {item.rating.rate}
      </p>

      {/* ---------------------price & rating------------------ */}
      <div className="mt-5 flex flex-wrap justify-between">
        <p className="text-lg font-semibold text-rose">$ {item.rating.count}</p>
        {cart.some((i) => i.id === item.id) ? (
          <button
            onClick={removeFromItem}
            className="text-[14px] text-rose py-[3px] px-4 rounded-lg border-[2px] font-medium border-rose cursor-pointer group-hover:bg-rose group-hover:text-[#f6f6f6] transition-all duration-[0.3s]"
          >
            Remove item
          </button>
        ) : (
          <button
            onClick={addToItem}
            className="text-[14px] text-rose py-[3px] px-4 rounded-lg border-[2px] font-medium border-rose cursor-pointer group-hover:bg-rose group-hover:text-[#f6f6f6] transition-all duration-[0.3s]"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
