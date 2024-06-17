import React, { useState } from "react";
import Card from "../Components/Card";
import data from "../Utils/mockdata.json";

function CardContainer() {
  const [filterCard, setFilterCard] = useState(data);

  function removeCardHandler(id) {
    const filteredCard = filterCard.filter((card) => card.id !== id);
    setFilterCard([...filteredCard]);
  }

  return filterCard.length === 0 ? (
    <div className="mt-6 w-[90%] min-h-[70vh] py-4 bg-zinc-800 rounded-sm flex flex-col flex-wrap justify-center items-center mx-auto">
      <h1 className="text-lg font-semibold text-white/80">No Tours Left</h1>
      <button
        onClick={() => setFilterCard(data)}
        className="mt-4 font-medium hover:bg-zinc-950 transition-all  px-4 py-1 bg-zinc-700 text-slate-300 text-sm rounded-sm"
      >
        Refresh
      </button>
    </div>
  ) : (
    <div>
      <div className="mt-6 w-[90%] py-12 flex flex-wrap gap-10 justify-center mx-auto">
        {filterCard.map((card) => (
          <Card
            key={card.id}
            data={card}
            removeCardHandler={removeCardHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
