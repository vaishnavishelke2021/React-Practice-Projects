import React from "react";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const removeFromItem = () => {
    dispatch(removeItem(item.id));
    toast.error("Item removed", {
      style: {
        border: "1px solid #B83B5E",
        padding: "10px",
        color: "#B83B5E",
      },
      iconTheme: {
        primary: "#B83B5E",
        secondary: "#FFFAEE",
      },
    });
  };

  const desc = item.description.substring(0, 160);
  return (
    <div className="max-w-full bg-white flex justify-between p-3 rounded-md">
      <div className="max-w-[30%] flex justify-center item-center">
        <img className="w-[100%] p-5 h-fit" src={item.image} alt="" />
      </div>

      <div className="max-w-[67%]">
        <h1 className="mt-4 font-bold text-[1.2rem]">{item.title}</h1>
        <p className="text-[12px] mt-1 text-black/50">{desc}...</p>

        <div className="flex justify-between mt-3">
          <h1 className="text-lg font-semibold text-green-700">
            $ {item.price}
          </h1>
          <MdDelete
            onClick={removeFromItem}
            className="p-[7px] text-[1.9rem] text-rose bg-rose/20 rounded-full cursor-pointer transition-all duration-[0.3s] hover:bg-rose hover:text-[#f6f6f6]"
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
