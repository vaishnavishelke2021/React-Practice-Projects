import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [state, setState] = useState(Array(9).fill('0'));
  return (
    <div className="board">
      <div className="row">
        <Square value={state[0]} />
        <Square value={state[1]} />
        <Square value={state[2]} />
      </div>
      <div className="row">
        <Square value={state[3]} />
        <Square value={state[4]} />
        <Square value={state[5]} />
      </div>
      <div className="row">
        <Square value={state[6]} />
        <Square value={state[7]} />
        <Square value={state[8]} />
      </div>
    </div>
  );
}

export default Board;
