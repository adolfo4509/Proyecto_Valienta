const axios = require("axios");
const { Videogame, Genres, Platforms, Image } = require("../db");
const { API_KEY } = process.env;

const apiInfo = async () => {
  const getEpisodes = [];

  for (let index = 0; index < 10; index++) {
    getEpisodes.push(
      axios.get(` https://rickandmortyapi.com/api/character?page=${index + 1}`)
    );
  }
  const responses = await Promise.all(getEpisodes);
  let results = [];

  for (let index = 0; index < responses.length; index++) {
    const element = responses[index];
    results = [...results, ...element.data.results];
  }

  return results;
};

const getAllInfo = async () => {
  const infoTotal = await apiInfo();

  let temp = infoTotal.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      status: e.status,
      species: e.species,
      type: e.type,
      gender: e.gender,
      location: e.location.name,
    };
  });

  return temp;
};
const episodes = async () => {
  const getEpisodes = [];

  for (let index = 0; index < 10; index++) {
    getEpisodes.push(
      axios.get(` https://rickandmortyapi.com/api/character?page=${index + 1}`)
    );
  }
  const responses = await Promise.all(getEpisodes);
  let results = [];

  for (let index = 0; index < responses.length; index++) {
    const element = responses[index];
    results = [...results, ...element.data.results];
  }

  return results;
};

module.exports = { apiInfo, getAllInfo };
