import axios from "axios";

import { CHARACTERS_URL, CHARACTERSID_URL } from "../Constantes/Constans";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_DETAILS = "GET_CHARACTERS";

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      var json = await axios.get(CHARACTERS_URL);

      return dispatch({
        type: GET_CHARACTERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCharactersDetails = (id) => {
  return async (dispatch) => {
    try {
      var json = await axios.get(CHARACTERSID_URL + id);

      return dispatch({
        type: GET_CHARACTERS_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
