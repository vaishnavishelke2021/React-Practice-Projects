import React from "react";
import ItemShimmer from "./ItemShimmer";

function HomeShimmerUI() {
  const arr = [0,0,0,0,0,0,0,0];
  return (
    <div className="max-w-full h-[90vh] mx-auto">
      <div className="flex flex-wrap justify-center gap-[30px] gap-y-9">
        {arr.map((i) => (
          <ItemShimmer key={i} />
        ))}
      </div>
    </div>
  );
}

export default HomeShimmerUI;
