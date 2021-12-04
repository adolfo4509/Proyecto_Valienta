const {
  GET_CHARACTERS,
  GET_CHARACTERS_DETAILS,
  GET_CLEAN_CHARACTERS_DETAILS,
  GET_EPISODES,
  GET_EPISODE,
  GET_LOCATIONS,
  GET_LOCATION,
} = require("./actions");

const inicialState = {
  charactersLoad: [],
  copiaCharactersLoad: [],
  characterDetail: [],
  episodes: [],
  locations: [],
  episode: {},
  location: {},
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        charactersLoad: action.payload,
      };
    case GET_CLEAN_CHARACTERS_DETAILS:
      return {
        ...state,
        copiaCharactersLoad: action.payload,
      };

    case GET_CHARACTERS_DETAILS:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case GET_EPISODES:
      return { ...state, episodes: action.payload };

    case GET_EPISODE:
      return {
        ...state,
        episode: action.payload,
      };
    case GET_LOCATIONS:
      return { ...state, locations: action.payload };
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
