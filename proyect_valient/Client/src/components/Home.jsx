import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/home.css";
import Card from "./Card";
import { getCharacters } from "../Redux/actions";

const Home = () => {
  var characterAll = useSelector((state) => state.charactersLoad);
  const dispatch = useDispatch();
  console.log("caracteres", characterAll);

  useEffect(() => {
    dispatch(getCharacters()); //se hace un dispatch con la accion como parametro
  }, [dispatch]);
  return (
    <div className="home">
      <h1 className="titulo">Rick and Morty</h1>
      <div className="cards">
        {/* {characterAll &&
          characterAll.results.map((ch) => {
            return <Card name={ch.name} image={ch.image} />;
          })} */}
      </div>
    </div>
  );
};

export default Home;
