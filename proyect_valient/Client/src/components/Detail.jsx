import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharactersDetails } from "../Redux/actions";
import { Link } from "react-router-dom";
import "../styles/card.css";

const Detail = (props) => {
  const dispatch = useDispatch();
  const characters = useSelector((e) => e.characterDetail);
  console.log("desde el detalle", characters);
  useEffect(() => {
    dispatch(getCharactersDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);
  return (
    <div className="cards_details">
      {characters.length > 0 ? (
        <div className="cards_details_">
          <h2>
            {" "}
            <span>Name:</span> {characters[0].name}
          </h2>
          <p className="description">
            <span>status:</span> {characters[0].status}
          </p>
          <p className="description">
            <span>species: </span>
            {characters[0].species}
          </p>
          <p className="description">
            <span>type:</span> {characters[0].type}
          </p>
          <p className="description">
            <span>genre: </span>
            {characters[0].genre}
          </p>
          <p className="description1">
            <span>location:</span> {characters[0].location}
          </p>
          <Link to="/">
            <img
              className="image_Detail"
              src={characters[0].image}
              alt=" img not found"
            />
          </Link>
        </div>
      ) : (
        <p>landing...</p>
      )}
    </div>
  );
};

export default Detail;
