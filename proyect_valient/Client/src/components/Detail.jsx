import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getCharactersDetails,
  getCleanCharactersDetails,
} from "../Redux/actions";
import "../styles/card.css";

const Detail = (props) => {
  const charactersDetail = useSelector((state) => state.charactersLoad);
  console.log("Desde el details", charactersDetail);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getCharactersDetails(props.match.params.id));
    return () => {
      dispatch(getCleanCharactersDetails());
    };
  }, [dispatch, props.match.params.id]);

  const handleClik = (e) => {
    history.push("/home");
  };
  return (
    <div className="cards_details">
      {charactersDetail.length > 0 ? (
        <div className="cards_details_">
          <h2>
            {" "}
            <span>Name:</span> {charactersDetail[0].name}
          </h2>
          <div className="lista">
            <li className="description">
              <span>status:</span> {charactersDetail[0].status}
            </li>
            <li className="description">
              <span>species: </span>
              {charactersDetail[0].species}
            </li>
            <li className="description">
              <span>type:</span> {charactersDetail[0].type}
            </li>

            <li className="description1">
              <span>location:</span> {charactersDetail[0].location}
            </li>
            <li className="description1">
              <span>Gender:</span> {charactersDetail[0].gender}
            </li>
            <span className="regresar">Para regresar click en la imagen</span>
          </div>
          <img
            className="image_detail"
            onClick={handleClik}
            src={charactersDetail[0].image}
            alt="img not found"
          />
        </div>
      ) : (
        <h3>landing...</h3>
      )}
    </div>
  );
};

export default Detail;
