import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getCharacters } from "../Redux/actions";
import "../styles/paginado.css";
import "../styles/home.css";

const Home = () => {
  var characterAll = useSelector((state) => state.charactersLoad);
  const dispatch = useDispatch();

  /**Paginado */
  var countP = 8;
  var totalCurrent = Math.ceil(characterAll.length / countP);
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
          <p>TO</p>
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

  useEffect(() => {
    dispatch(getCharacters()); //se hace un dispatch con la accion como parametro
  }, [dispatch]);
  return (
    <div className="home">
      <div className="titulo">
        <h1>Rick and Morty</h1>
      </div>
      {show()}
      <div className="cards">
        {characterAll &&
          characterAll
            .map((ch) => (
              <Card
                id={ch.id}
                name={ch.name}
                image={ch.image}
                location={ch.location}
                species={ch.species}
                status={ch.status}
                type={ch.type}
              />
            ))
            .slice(currentPage, currentPage + countP)}
      </div>
    </div>
  );
};

export default Home;
