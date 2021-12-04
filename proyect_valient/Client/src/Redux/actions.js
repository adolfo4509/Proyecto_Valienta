import axios from "axios";

import {
  CHARACTERS_URL,
  CHARACTERSID_URL,
  EPISODE_URL,
  LOCATION_URL,
} from "../Constantes/Constans";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_CHARACTERS_DETAILS = "GET_CHARACTERS_DETAILS";
export const GET_CLEAN_CHARACTERS_DETAILS = "GET_CLEAN_CHARACTERS_DETAILS";
export const GET_EPISODES = "GET_EPISODES";
export const GET_EPISODE = "GET_EPISODE";
export const GET_LOCATIONS = "GET_LOCATIONS";
export const GET_LOCATION = "GET_LOCATION";

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
export const getCleanCharactersDetails = (id) => ({
  type: GET_CLEAN_CHARACTERS_DETAILS,
  payload: id,
});
export const filterCharacters = () => ({});

export const getEpisodes = () => {
  return async (dispatch) => {
    try {
      var json = await axios.get(EPISODE_URL);
      return dispatch({
        type: GET_EPISODES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getEpisode = (id) => {
  return async (dispatch) => {
    try {
      var json = await axios.get(
        `https://rickandmortyapi.com/api/episode/${id}`
      );
      return dispatch({
        type: GET_EPISODE,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getLocations = () => {
  return async (dispatch) => {
    try {
      var json = await axios.get(LOCATION_URL);

      return dispatch({
        type: GET_LOCATIONS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getLocation = (id) => {
  return async (dispatch) => {
    try {
      var json = await axios.get(
        `https://rickandmortyapi.com/api/location/${id}`
      );
      console.log("desde la accion de location", json.data);

      return dispatch({
        type: GET_LOCATION,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
