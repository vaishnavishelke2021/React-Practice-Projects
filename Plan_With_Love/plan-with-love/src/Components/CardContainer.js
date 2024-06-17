import React, { useState } from "react";
import Card from "../Components/Card";
import data from "../Utils/mockdata.json";
import Refresh from "./Refresh";

function CardContainer() {
  const [filterCard, setFilterCard] = useState(data);

  function removeCardHandler(id) {
    const filteredCard = filterCard.filter((card) => card.id !== id);
    setFilterCard([...filteredCard]);
  }

  return filterCard.length === 0 ? (
    <Refresh setFilterCard={setFilterCard} data={data} />
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
