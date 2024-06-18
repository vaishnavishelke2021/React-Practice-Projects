import React from "react";

function FilterButton({ btn }) {
  return (
    <div>
      <button className="bg-zinc-800 hover:bg-zinc-700 transition-all px-4 py-1 rounded-sm border-none text-lemon mt-2 lg:text-[16px] text-[14px]">
        {btn.title}
      </button>
    </div>
  );
}

export default FilterButton;
