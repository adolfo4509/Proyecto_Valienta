import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = ({ name, image, location, species, status, type, id }) => {
  return (
    <div className="fondoCard">
      <li>Name: {name}</li>
      <li>species: {species}</li>
      <li>location: {location}</li>
      <li>status: {status}</li>
      <li>type: {type}</li>
      <Link to={`/home/${id}`} className="link_cards">
        <img src={image} alt="imag no fount" />
      </Link>
    </div>
  );
};

export default Card;
