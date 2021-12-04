import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = ({ name, image, location, species, status, type, id, gender }) => {
  return (
    <div className="fondoCard">
      <div className="lista">
        <li>Name: {name}</li>
        <li>species: {species}</li>
        <li>location: {location}</li>
        <li>status: {status}</li>
        <li>type: {type}</li>
        <li>gender: {gender}</li>
        {/* <Link to={`/episode/${id}`}>
          <li>Episode: {episode}</li>
        </Link> */}
      </div>
      <Link to={`/home/${id}`} className="link_cards">
        <img src={image} alt="imag no fount" />
      </Link>
    </div>
  );
};

export default Card;
