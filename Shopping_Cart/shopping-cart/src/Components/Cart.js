import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { clear } from "../redux/cartSlice";
import toast from "react-hot-toast";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const clearCart = () => {
    dispatch(clear());
    toast.success("All items removed from your cart.", {
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

  return (
    <div className="max-w-[75%] py-10 mt-[4.5rem] mx-auto">
      {cart.length > 0 ? (
        <div className="flex justify-between">
          {/* ---------------cart items ------------------------- */}
          <div className="w-[50%] flex flex-col gap-y-4">
            <button
              onClick={clearCart}
              className="hover:bg-rose text-[15px] w-fit text-[#f6f6f6] rounded-md mt-3 font-medium py-[5px] px-5 transition ease-in duration-100 bg-[#f6f6f6] border-[1.7px] border-rose hover:text-[#f6f6f6] text-rose"
            >
              Clear cart
            </button>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* -------------------------summary------------------------------ */}
          <div className="flex justify-start flex-col w-[45%] px-10 ">
            <p className="uppercase text-[17px] text-rose font-semibold">
              your cart
            </p>
            <h1 className="text-[2.9rem] font-bold text-rose -mt-2">SUMMARY</h1>
            <h4 className="text-[19px] font-medium text-zinc-700 mt-16">
              Total Items: {cart.length}
            </h4>
            <h1 className="text-[19px] font-medium text-zinc-700 mt-1">
              Total Amount:{" "}
              <span className="font-extrabold text-green-700">
                $ {totalAmount}
              </span>
            </h1>

            {/* ------------------------------- buttons --------------------------- */}
            <div className="flex gap-x-3">
              <button className="bg-green-700 w-fit px-10 py-[7px] border-[1.7px] hover:border-green-700 hover:text-green-700 hover:bg-[#f6f6f6] transition ease-in cursor-pointer duration-100 mt-4 text-[#f6f6f6] font-medium rounded-md">
                Checkout now
              </button>
              <NavLink to="/">
                <button className="bg-rose w-fit text-[#f6f6f6] rounded-md mt-4 font-medium py-[7px] px-10 transition ease-in duration-100 hover:bg-[#f6f6f6] border-[1.7px] border-rose hover:text-rose">
                  Shop More
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-[70vh]">
          <h1 className="text-2xl font-bold ">Your cart is empty!</h1>
          <p className="text-[15px] font-medium text-[#161616]/80 mt-0">
            Add items to the cart
          </p>
          <NavLink to="/">
            <button className="bg-rose text-[#f6f6f6] rounded-md mt-4 font-medium py-[7px] px-10 transition ease-in duration-100 hover:bg-[#f6f6f6] border-[1.7px] border-rose hover:text-rose">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
