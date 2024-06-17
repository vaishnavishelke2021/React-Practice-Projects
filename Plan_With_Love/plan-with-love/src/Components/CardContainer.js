import React from "react";
import Card from "../Components/Card";
import data from "../Utils/mockdata.json";

function CardContainer() {
  return (
    <div>
      <div className="mt-4 w-[90%] py-12 flex flex-wrap gap-10 justify-center mx-auto">
        {data.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
