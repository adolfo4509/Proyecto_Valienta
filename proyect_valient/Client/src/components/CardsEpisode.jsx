import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getEpisode, getCharacters } from "../Redux/actions";
import "../styles/card.css";

const CardsEpisode = (props) => {
  const allCaracters = useSelector((state) => state.charactersLoad);
  const dispatch = useDispatch();
  const episode = useSelector((state) => state.episode);
  let arrayCharacters = episode?.characters;
  const history = useHistory();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getEpisode(id));
  }, [dispatch, id]);

  let idCaracters = arrayCharacters?.map((e) => {
    if (e.length === 45) return e.slice(-3);
    if (e.length === 44) return e.slice(-2);
    if (e.length === 43) return e.slice(-1);
  });

  let filtrado = [];
  if (idCaracters !== undefined) {
    for (let i = 0; i < allCaracters.length; i++) {
      for (let j = 0; j < idCaracters.length; j++) {
        if (parseInt(idCaracters[i]) === allCaracters[i]?.id) {
          filtrado.push(allCaracters[j]);
        }
      }
    }
  }
  filtrado = filtrado.filter((ele, pos) => {
    return filtrado.indexOf(ele) === pos;
  });

  let personaje = filtrado.map((e) => {
    return (
      <div className="card_body1">
        <div key={e.id} className="card_body1">
          <span className="card_nombre">{e.name}</span>
          <img src={e.image} alt={e.name} onClick={() => history.push(`/`)} />
        </div>
      </div>
    );
  });
  var countP = 10;
  var totalCurrent = Math.ceil(personaje.length / countP);
  const [currentPage, setCurrentPage] = useState(0);
  const [actualCurrent, setactualCurrent] = useState(1);

  const nextPage = () => {
    if (totalCurrent !== actualCurrent) {
      setactualCurrent(actualCurrent + 1);
      setCurrentPage(currentPage + countP);
    }
  };

  const prevPage = () => {
    if (actualCurrent > 1) {
      setactualCurrent(actualCurrent - 1);
      setCurrentPage(currentPage - countP);
    }
  };

  const show = () => {
    if (actualCurrent === 1) {
      return (
        <div className="pagination">
          <p className="pagination-item active">{actualCurrent}</p>
          <p>TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
          <p className="pagination-item " onClick={nextPage}>
            next
          </p>
        </div>
      );
    } else if (actualCurrent >= totalCurrent) {
      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>
            prev
          </p>
          <p className="pagination-item active">{actualCurrent}</p>
          <p className="to">TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
        </div>
      );
    } else {
      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>
            prev
          </p>
          <p className="pagination-item active">{actualCurrent}</p>
          <p className="to">TO</p>
          <p className="pagination-item ">{totalCurrent}</p>
          <p className="pagination-item " onClick={nextPage}>
            next
          </p>
        </div>
      );
    }
  };

  return (
    <div className="">
      {show()}
      <div className="centar_episodes">
        <div>
          <span className="card_nombre">
            {` episode ${episode?.id}  ${episode?.name}`}
          </span>
        </div>
        <span className="card_nombre">Click en la imagen para regresar</span>
      </div>
      <div className="card_body">{personaje}</div>
    </div>
  );
};

export default CardsEpisode;
