import axios from "axios";

import {
  CHARACTERS_URL,
  CHARACTERSID_URL,
  EPISODE_URL,
} from "../Constantes/Constans";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_DETAILS = "GET_CHARACTERS";
export const GET_CLEAN_CHARACTERS_DETAILS = "GET_CLEAN_CHARACTERS_DETAILS";
export const GET_EPISODES = "GET_EPISODES";

export const getCharacters = () => {
  return async (dispatch) => {
    try {
      var json = await axios.get(CHARACTERS_URL);
      //console.log("Desde la actions con episodes", json.data);
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
      //console.log("desde la accion", json.data);
      return dispatch({
        type: GET_CHARACTERS_DETAILS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCleanCharactersDetails = (id) => ({
  type: GET_CLEAN_CHARACTERS_DETAILS,
  payload: id,
});
export const filterCharacters = () => ({});

export const getEpisodes = (id) => {
  return async (dispatch) => {
    try {
      var json = await axios.get(EPISODE_URL + id);
      console.log("desde la accion", json.data);
      return dispatch({
        type: GET_EPISODES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
