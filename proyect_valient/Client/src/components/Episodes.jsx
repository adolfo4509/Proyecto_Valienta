import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getEpisodes } from "../Redux/actions";
import "../styles/card.css";
const Episodes = () => {
  const allEpisodes = useSelector((state) => state.episodes);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);
  const handleClik = (e) => {
    history.push("/");
  };
  return (
    <div className="episodios">
      <button onClick={handleClik}>Regresar</button>
      <h3 className="Link_episodes_titulo">Hacer click en el episodio</h3>
      <div className="Episodios">
        {allEpisodes.map((episode) => (
          <Link className="Link_episodes" to={`/episode/${episode.id}`}>
            <li key={episode.id} className="li_episodes">
              {`episodio ${episode.id} -  ${episode.name}`}
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
