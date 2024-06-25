import React from "react";

function ItemShimmer() {
  return (
    <div className="w-[260px]  rounded-xl bg-[#efefef] p-5">
      <div className="w-full h-[180px] rounded-md bg-zinc-200/90"></div>
      <div className="w-full h-[25px] rounded-sm mt-2 bg-zinc-200/90"></div>

      <div className="w-full h-[7px] rounded-sm mt-3 bg-zinc-200/80"></div>
      <div className="w-full h-[7px] rounded-sm mt-1 bg-zinc-200/80"></div>
      <div className="w-[70%] h-[7px] rounded-sm mt-1 bg-zinc-200/80"></div>
      <div className="w-[50%] h-[20px] rounded-sm mt-4 bg-zinc-200/80"></div>
    </div>
  );
}

export default ItemShimmer;
