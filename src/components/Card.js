import React from "react";

export default function Card({ name, close, complete, handleCardClick }) {
  return (
    <div
      className={
        "card" + (!close ? " opened" : "") + (complete ? " matched" : "")
      }
      onClick={() => handleCardClick(name)}
    >
      <div className="front">?</div>
      <div className="back">{name}</div>
    </div>
  );
}
