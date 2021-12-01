const {
  GET_CHARACTERS,
  GET_CHARACTERS_DETAILS,
  GET_CLEAN_CHARACTERS_DETAILS,
  GET_EPISODES,
} = require("./actions");

const inicialState = {
  charactersLoad: [],
  copiaCharactersLoad: [],
  characterDetail: [],
  episodes: [],
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
        charactersDetail: action.payload,
      };

    case GET_CHARACTERS_DETAILS:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case GET_EPISODES:
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
