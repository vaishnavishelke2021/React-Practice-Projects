import React from "react";
import { btns } from "../Utils/constants";
import FilterButton from "./FilterButton";

function Filter({ category, setCategory }) {
  return (
    <div>
      <div className="flex space-x-1 lg:space-x-3 justify-center flex-wrap items-center p-1 mt-4">

        {btns.map((btn) => (
          <FilterButton
            key={btn.id}
            btn={btn}
            category={category}
            setCategory={setCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;
