import React from "react";
import ShimmerCard from "./ShimmerCard";

function ShimmerCardContainer({ courses }) {
  const numofCards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-[80%] mt-4 py-10 flex flex-wrap justify-center items-center gap-6 mx-auto">
      {numofCards.map((c) => (
        <ShimmerCard key={c} />
      ))}
    </div>
  );
}

export default ShimmerCardContainer;
