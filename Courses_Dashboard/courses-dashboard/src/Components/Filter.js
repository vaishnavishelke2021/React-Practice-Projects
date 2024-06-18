import React from "react";

function Filter() {
  return (
    <div>
      <div className="flex space-x-3 justify-center flex-wrap items-center p-4 mt-3">
        <button className="bg-black/10  px-4 py-1 rounded-sm border-yellow-600 text-zinc-800 text-[16px] border-b-[3px]">
          All
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 transition-all px-4 py-1 rounded-sm border-none text-lemon text-[16px]">
          Development
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 transition-all px-4 py-1 rounded-sm border-none text-lemon text-[16px]">
          Design
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 transition-all px-4 py-1 rounded-sm border-none text-lemon text-[16px]">
          Business
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 transition-all px-4 py-1 rounded-sm border-none text-lemon text-[16px]">
          Lifestyle
        </button>
      </div>
    </div>
  );
}

export default Filter;
