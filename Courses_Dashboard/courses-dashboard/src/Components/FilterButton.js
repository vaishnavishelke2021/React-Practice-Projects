import React from "react";

function FilterButton({ btn, category, setCategory }) {
  const filterHandler = (title) => {
    setCategory(title);
  };

  return (
    <div>
      <button
        className={` transition-all px-4 py-1 rounded-sm  mt-2 lg:text-[16px] text-[14px] ${
          category === btn.title
            ? "bg-black/10  border-yellow-600 text-zinc-800 border-b-[3px]"
            : "bg-zinc-800 hover:bg-zinc-700 text-lemon"
        }`}
        onClick={() => filterHandler(btn.title)}
      >
        {btn.title}
      </button>
    </div>
  );
}

export default FilterButton;
