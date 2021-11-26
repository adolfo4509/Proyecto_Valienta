import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/paginado.css";

const Paginado = ({ characterForPage, paginado }) => {
  const [pageIni, setpageIni] = useState(1);
  console.log("desde paginado", pageIni);
  const AllCharacters = useSelector((state) => state.charactersLoad);
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(AllCharacters.length / characterForPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  const nextPage = () => {
    setpageIni(pageIni + 1);
  };
  const prevPage = () => {
    setpageIni(pageIni - 1);
  };
  const show = () => {
    if (pageIni === 1) {
      return (
        <div className="pagination">
          <p className="pagination-item active">{prevPage}</p>
          <p>TO</p>
          <p className="pagination-item ">{characterForPage}</p>
          <p className="pagination-item " onClick={nextPage}>
            next
          </p>
        </div>
      );
    }
    if (pageIni >= characterForPage) {
      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>
            prev
          </p>
          <p className="pagination-item active">{pageIni}</p>
          <p>TO</p>
          <p className="pagination-item ">{characterForPage}</p>
        </div>
      );
    } else {
      return (
        <div className="pagination">
          <p className="pagination-item " onClick={prevPage}>
            prev
          </p>
          <p className="pagination-item active">{pageIni}</p>
          <p>TO</p>
          <p className="pagination-item ">{characterForPage}</p>
          <p className="pagination-item " onClick={nextPage}>
            next
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      <nav className="paginado">
        {/* <div className="pagination">
          <p className="pagination-item active">{prevPage}</p>
          <p>TO</p>
          <p className="pagination-item ">{characterForPage}</p>
          <p className="pagination-item " onClick={nextPage}>
            next
          </p>
        </div>
        {pageNumbers &&
          pageNumbers.map((number, id) => (
            <p className="App-link" onClick={() => paginado(number)} key={id}>
              {number}
            </p>
          ))} */}
        {show()}
      </nav>
    </div>
  );
};

export default Paginado;
