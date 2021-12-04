import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { getLocations } from "../Redux/actions";
import "../styles/card.css";

const Location = () => {
  const allLocations = useSelector((state) => state.locations);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);
  const handleClik = (e) => {
    history.push("/");
  };
  return (
    <div className="episodios">
      <button className="episodes_location_click_regresar" onClick={handleClik}>
        Regresar
      </button>
      <h3 className="h3_localizacion">Hacer click en la Localización</h3>
      <div className="Episodios">
        {allLocations.map((location) => (
          <Link className="Link_episodes" to={`/location/${location.id}`}>
            <li className="li_episodes">
              {`Location ${location.id} -  ${location.name}`}
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Location;
