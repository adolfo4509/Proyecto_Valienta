import React from "react";
import "../styles/card.css";
const Card = ({ name }) => {
  return (
    <div className="fondoCard">
      <h4>Name:{name}</h4>
    </div>
  );
};

export default Card;
