import React from "react";

import { FaReact } from "react-icons/fa";

export default function Card({ name, close, complete, handleCardClick }) {
  return (
    <div
      className={
        "card" + (!close ? " opened" : "") + (complete ? " matched" : "")
      }
      onClick={() => handleCardClick(name)}
    >
      <div className="front">
        <FaReact />
      </div>
      <div className="back">
        <img src={`images/${name}.png`} alt={name} />
      </div>
    </div>
  );
}
