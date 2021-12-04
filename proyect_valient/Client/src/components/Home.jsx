import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { getCharacters } from "../Redux/actions";
import "../imagenes/lupa.svg";
import "../styles/paginado.css";
import "../styles/home.css";
import "../styles/filtros.scss";
import imagen from "../imagenes/Lupa.svg";
import { Link } from "react-router-dom";

const Home = () => {
  var characterAll = useSelector((state) => state.charactersLoad);
  // console.log("characterAll", characterAll);
  const dispatch = useDispatch();

  /**Paginado */
  var countP = 10;
  var totalCurrent = Math.ceil(characterAll.length / countP);
  const [currentPage, setCurrentPage] = useState(0);
  const [actualCurrent, setactualCurrent] = useState(1);
  const [inputName, setInputName] = useState("");
  const [inputRadio, setInputRadio] = useState("");
  const [inputRadioStatus, setInputRadioStatus] = useState("");

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

  useEffect(() => {
    dispatch(getCharacters()); //se hace un dispatch con la accion como parametro
  }, [dispatch]);

  //Filtrar por nombre de personaje
  const filterData = () => {
    if (inputName !== "") {
      return characterAll.filter((e) =>
        e.name.toLowerCase().includes(inputName.toLowerCase())
      );
    }
    return characterAll;
  };
  const handleInput = (e) => {
    setInputName(e.target.value);
  };
  const handleRadiInput = (e) => {
    setInputRadioStatus("");
    setInputRadio(e.target.name);
  };

  const handleRadiInputStatus = (e) => {
    setInputRadio("");
    setInputRadioStatus(e.target.name);
  };
  const dataFilterEstadoGenero = () => {
    if (inputRadio !== "") {
      return filterData().filter((e) => e.gender.includes(inputRadio));
    }

    if (inputRadioStatus !== "") {
      return filterData().filter((e) => e.status.includes(inputRadioStatus));
    }
    return filterData();
  };

  return (
    <div className="home">
      <div className="titulo">
        <h1>Rick and Morty</h1>
      </div>
      <div className="filtrar">
        <div className="select">
          <img className="lupa" src={imagen} alt="imagen not fount" />
          <input
            placeholder="Buscar"
            name="name"
            type="search"
            onChange={handleInput}
          />
        </div>
        <div className="select" tabIndex="1">
          Filtrar por Genero {inputRadio}
          <div className="list">
            <label>
              <input
                className="search"
                type="radio"
                // id="select-radio1"
                name="Male"
                onChange={handleRadiInput}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                id="select-radio2"
                name="Female"
                onChange={handleRadiInput}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                id="select-radio3"
                name="unknown"
                onChange={handleRadiInput}
              />
              unknown
            </label>
          </div>
        </div>
        <div className="select" tabIndex="2">
          Filtrar por Estado {inputRadioStatus}
          <div className="list">
            <label>
              <input
                type="radio"
                id="select-radio4"
                name="Alive"
                onChange={handleRadiInputStatus}
              />
              Alive
            </label>
            <label>
              <input
                type="radio"
                id="select-radio5"
                name="Dead"
                onChange={handleRadiInputStatus}
              />
              Dead
            </label>
            <label>
              <input
                type="radio"
                id="select-radio6"
                name="unknown"
                onChange={handleRadiInputStatus}
              />
              unknown
            </label>
          </div>
        </div>
      </div>
      <div className="episodes_location">
        <Link className="episodes_location_click" to="/episode">
          <button className="episodes_location_button">Episodios</button>
        </Link>
        <Link className="episodes_location_click" to="/location">
          <button className="episodes_location_button">Localización</button>
        </Link>
      </div>
      {show()}
      <div className="cards">
        {dataFilterEstadoGenero() &&
          dataFilterEstadoGenero()
            .map((ch) => (
              <Card
                id={ch.id}
                name={ch.name}
                image={ch.image}
                location={ch.location}
                species={ch.species}
                status={ch.status}
                type={ch.type}
                gender={ch.gender}
                episode={ch.episodes}
                key={ch.id}
              />
            ))
            .slice(currentPage, currentPage + countP)}
      </div>
      {show()}
    </div>
  );
};

export default Home;
