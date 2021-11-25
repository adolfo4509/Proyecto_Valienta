import axios from "axios";

import { CHARACTERS_URL } from "../Constantes/Constans";

export const GET_CHARACTERS = "GET_VIDEOGAME";

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      var json = await axios.get(CHARACTERS_URL);
      console.log("desde las acciones", json);
      return dispatch({
        type: GET_CHARACTERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
