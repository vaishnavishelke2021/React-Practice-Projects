import React from "react";
import { btns } from "../Utils/constants";
import FilterButton from "./FilterButton";

function Filter() {
  return (
    <div>
      <div className="flex space-x-1 lg:space-x-3 justify-center flex-wrap items-center p-1 mt-4">
        <button className="bg-black/10  px-4 py-1 rounded-sm border-yellow-600 text-zinc-800 mt-2 lg:text-[16px] text-[14px] border-b-[3px]">
          All
        </button>

        {btns.map((btn) => (
          <FilterButton key={btn.id} btn={btn} />
        ))}
      </div>
    </div>
  );
}

export default Filter;
