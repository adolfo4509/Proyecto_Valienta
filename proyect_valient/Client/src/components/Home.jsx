import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/home.css";
import Card from "./Card";
import { getCharacters } from "../Redux/actions";
import Paginado from "./Paginado";

const Home = () => {
  var characterAll = useSelector((state) => state.charactersLoad);
  const dispatch = useDispatch();
  const [currentPage, setCurrentpage] = useState(1);
  const [characterForPage] = useState(12);
  const indexOfLastCharacters = currentPage * characterForPage;
  const indexOfFirtsCharacters = indexOfLastCharacters - characterForPage;
  const currentCharacters = characterAll.slice(
    indexOfFirtsCharacters,
    indexOfLastCharacters
  );
  /**Paginado */
  const paginado = (pageNum) => {
    setCurrentpage(pageNum);
  };
  useEffect(() => {
    dispatch(getCharacters()); //se hace un dispatch con la accion como parametro
  }, [dispatch]);
  return (
    <div className="home">
      <h1 className="titulo">Rick and Morty</h1>

      <Paginado
        characterForPage={characterForPage}
        characterAll={characterAll}
        paginado={paginado}
      />
      <div className="cards">
        {currentCharacters &&
          currentCharacters.map((ch) => {
            return (
              <Card
                id={ch.id}
                name={ch.name}
                image={ch.image}
                location={ch.location}
                species={ch.species}
                status={ch.status}
                type={ch.type}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
