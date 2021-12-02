import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getCharactersDetails } from "../Redux/actions";
import "../styles/card.css";

const Detail = (props) => {
  const detailCaracter = useSelector((state) => state.characterDetail);
  const [character, setCharacter] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getCharactersDetails(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const handleClik = (e) => {
    setCharacter("");
    history.push("/home");
  };
  return (
    <div className="cards_details">
      {detailCaracter.length > 0 ? (
        <div className="cards_details_">
          <h2>
            {" "}
            <span>Name:</span> {detailCaracter[0].name}
          </h2>
          <div className="lista">
            <li className="description">
              <span>status:</span> {detailCaracter[0].status}
            </li>
            <li className="description">
              <span>species: </span>
              {detailCaracter[0].species}
            </li>
            <li className="description">
              <span>type:</span> {detailCaracter[0].type}
            </li>

            <li className="description1">
              <span>location:</span> {detailCaracter[0].location}
            </li>
            <li className="description1">
              <span>Gender:</span> {detailCaracter[0].gender}
            </li>
            <span className="regresar">Para regresar click en la imagen</span>
          </div>
          <img
            className="image_detail"
            onClick={handleClik}
            src={detailCaracter[0].image}
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
