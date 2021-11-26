import React from "react";
//import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = ({ name, image, location, species, status, type, id }) => {
  return (
    <div className="fondoCard">
      {/* <Link to={`/home/${id}`} className="link_cards"> */}
      <h5>Name:{name}</h5>
      <h4>species:{species}</h4>
      <h4>location:{location}</h4>
      <h4>status:{status}</h4>
      <h4>type:{type}</h4>
      <img src={image} alt="" />
      {/* </Link> */}
    </div>
  );
};

export default Card;
