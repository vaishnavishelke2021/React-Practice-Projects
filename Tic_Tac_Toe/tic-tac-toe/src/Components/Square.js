import React from "react";

function Square({ value, onClick }) {
  return (
    <div className="box" onClick={onClick}>
      <h3>{value}</h3>
    </div>
  );
}

export default Square;
